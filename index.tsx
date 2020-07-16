/*
 * <<
 * Davinci
 * ==
 * Copyright (C) 2016 - 2017 EDP
 * ==
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * >>
 */

import React from 'react'
import { compose, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import memoizeOne from 'memoize-one'
import Helmet from 'react-helmet'
import { RouteComponentWithParams } from 'utils/types'

import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'

import reducer from './reducer'
import sagas from './sagas'

import { checkNameUniqueAction } from 'containers/App/actions'
import { ViewActions, ViewActionType } from './actions'
import {
  makeSelectLoading,
  makeSelectSources,
  makeSelectViews
} from './selectors'
import { makeSelectCurrentProject } from 'containers/Projects/selectors'

import ModulePermission from '../Account/components/checkModulePermission'
import { initializePermission } from '../Account/components/checkUtilPermission'

import {
  Button,
  Col,
  Icon,
  message,
  Popconfirm,
  Row,
  Table, Tag,
  Tooltip
} from 'antd';
import { ColumnProps, PaginationConfig, SorterResult } from 'antd/lib/table'
import { ButtonProps } from 'antd/lib/button'
import Container from 'components/Container'
import Box from 'components/Box'
import SearchFilterDropdown from 'components/SearchFilterDropdown'
import CopyModal from './components/CopyModal'

import { IViewBase, IViewLoading } from './types'
import { IProject } from '../Projects/types'

import utilStyles from 'assets/less/util.less'
import CollectionCreateForm from './components/CollectionCreateForm'
import { SourceActions, SourceActionType } from 'containers/Source/actions'
import reducerSource from 'containers/Source/reducer'
import sagasSource from 'containers/Source/sagas'
import DroDown from './components/VISSteps/DroDown'

interface IViewListStateProps {
  views: IViewBase[]
  currentProject: IProject
  loading: IViewLoading
}

interface IViewListDispatchProps {
  onLoadViews: (projectId: number) => void
  onDeleteView: (viewId: number, resolve: () => void) => void
  onCopyView: (view: IViewBase, resolve: () => void) => void
  onCheckName: (data, resolve, reject) => void
  onLoadSources: (projectId: number) => void
}

type IViewListProps = IViewListStateProps &
  IViewListDispatchProps &
  RouteComponentWithParams

interface IViewListState {
  screenWidth: number
  tempFilterViewName: string
  filterViewName: string
  filterDropdownVisible: boolean
  tableSorter: SorterResult<IViewBase>

  copyModalVisible: boolean
  copyFromView: IViewBase
  showModal: boolean
  newModal: boolean
  viewId: number
}

export class ViewList extends React.PureComponent<
  IViewListProps,
  IViewListState
> {
  public state = {
    screenWidth: document.documentElement.clientWidth,
    tempFilterViewName: '',
    filterViewName: '',
    filterDropdownVisible: false,
    tableSorter: null,

    copyModalVisible: false,
    copyFromView: null,
    showModal: false,
    newModal: true,
    viewId: null
  }
  private formRef: any

  public componentWillMount() {
    this.props.onLoadSources(+this.props.match.params.projectId)
    this.loadViews()
    window.addEventListener('resize', this.setScreenWidth, false)
  }

  private loadViews = () => {
    const { onLoadViews, match } = this.props
    const { projectId } = match.params
    if (projectId) {
      onLoadViews(+projectId)
    }
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.setScreenWidth, false)
  }
  componentDidMount() {
    // console.log("props",this.props);
  }
  private setScreenWidth = () => {
    this.setState({ screenWidth: document.documentElement.clientWidth })
  }

  private getFilterViews = memoizeOne(
    (viewName: string, views: IViewBase[]) => {
      if (!Array.isArray(views) || !views.length) {
        return []
      }
      const regex = new RegExp(viewName, 'gi')
      return views.filter(
        (v) => v.name.match(regex) || v.description.match(regex)
      )
    }
  )

  private static getViewPermission = memoizeOne((project: IProject) => ({
    viewPermission: initializePermission(project, 'viewPermission'),
    AdminButton: ModulePermission<ButtonProps>(project, 'view', true)(Button),
    EditButton: ModulePermission<ButtonProps>(project, 'view', false)(Button)
  }))

  private getTableColumns = ({
    viewPermission,
    AdminButton,
    EditButton
  }: ReturnType<typeof ViewList.getViewPermission>) => {
    const { views } = this.props
    const {
      tempFilterViewName,
      filterViewName,
      filterDropdownVisible,
      tableSorter
    } = this.state
    const sourceNames = views.map(({ sourceName }) => sourceName)

        const columns: Array<ColumnProps<IViewBase>> = [
            {
                title: "分类",
                dataIndex: "tags",
                render: (tags): any => {
                    const tagsArr = tags.split(",")
                    if (tagsArr.length > 0) {
                        return tagsArr.map((item: string, index: number) => <Tag color="blue">{item}</Tag>)
                    }
                }
            },
            {
                title: '名称',
                dataIndex: 'name',
                filterDropdown: (
                    <SearchFilterDropdown
                        placeholder="名称"
                        value={tempFilterViewName}
                        onChange={this.filterViewNameChange}
                        onSearch={this.searchView}
                    />
                ),
                filterIcon: <Icon type="search" style={{fontSize: '16px'}}/>,
                filterDropdownVisible,
                onFilterDropdownVisibleChange: (visible: boolean) =>
                    this.setState({filterDropdownVisible: visible}),
                sorter: (a, b) => (a.name > b.name ? 1 : -1),
                sortOrder:
                    tableSorter && tableSorter.columnKey === 'name'
                        ? tableSorter.order
                        : void 0
            },
            {
                title: '描述',
                dataIndex: 'description'
            },
            {
                title: '数据源',
                dataIndex: 'sourceName',
                filterMultiple: false,
                onFilter: (val, record) => record.sourceName === val,
                filters: sourceNames
                    .filter((name, idx) => sourceNames.indexOf(name) === idx)
                    .map((name) => ({text: name, value: name}))
            }
        ]

    if (filterViewName) {
      const regex = new RegExp(`(${filterViewName})`, 'gi')
      columns[0].render = (text: string) => (
        <span
          dangerouslySetInnerHTML={{
            __html: text.replace(
              regex,
              `<span class="${utilStyles.highlight}">$1</span>`
            )
          }}
        />
      )
    }
    /*  */
    if (viewPermission) {
      columns.push({
        title: '操作',
        width: 200,
        // align: 'left',
        // className: utilStyles.textAlignCenter,
        render: (_, record) => (
          <span
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '140px'
            }}
          >
            <Tooltip title="复制">
              {/* <EditButton icon="copy" shape="circle" type="ghost"  onClick={this.copyView(record)} /> */}
              <a onClick={this.copyView(record)}>复制</a>
            </Tooltip>
            <Tooltip title="修改">
              {/* 原代码图标编辑 */}
              {/* <EditButton
                icon="edit"
                shape="circle"
                type="ghost"
                onClick={this.editView(record.id)}
              /> */}
              <a
                onClick={this.editView(record.id, record.isVisualizationConfig)}
              >
                编辑
              </a>
            </Tooltip>
            <Popconfirm
              title="确定删除？"
              placement="bottom"
              onConfirm={this.deleteView(record.id)}
            >
              <Tooltip title="删除">
                {/* <AdminButton icon="delete" shape="circle" type="ghost" /> */}
                <a>删除</a>
              </Tooltip>
            </Popconfirm>
          </span>
        )
      })
    }

    return columns
  }

  private tableChange = (_1, _2, sorter: SorterResult<IViewBase>) => {
    this.setState({ tableSorter: sorter })
  }

  private filterViewNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      tempFilterViewName: e.target.value,
      filterViewName: ''
    })
  }

  private searchView = (value: string) => {
    this.setState({
      filterViewName: value,
      filterDropdownVisible: false
    })
    window.event.preventDefault()
  }
  /* Pagination config */
  private basePagination: PaginationConfig = {
    defaultPageSize: 10,
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (total) => {
      return `共有 ${total} 条 `
    }
  }

  private addView = () => {
    const { history, match } = this.props
    history.push(`/project/${match.params.projectId}/view`)

  }

  private copyView = (fromView: IViewBase) => () => {
    this.setState({
      copyModalVisible: true,
      copyFromView: fromView
    })
  }

  private copy = (view: IViewBase) => {
    const { onCopyView } = this.props
    onCopyView(view, () => {
      this.setState({
        copyModalVisible: false
      })
      message.info('View 复制成功')
    })
  }

  private cancelCopy = () => {
    this.setState({ copyModalVisible: false })
  }

  private editView = (viewId: number, isVisualizationConfig: boolean) => () => {
    // console.log("viewId",this.props.match.params);
    // console.log("parent",viewId);
    const { history, match } = this.props

    if (isVisualizationConfig) {
      this.setState({ showModal: true, newModal: false, viewId })
      // history.push(`/project/${match.params.projectId}/VIS`)
    } else {
      history.push(`/project/${match.params.projectId}/view/${viewId}`)
    }
  }

  private deleteView = (viewId: number) => () => {
    const { onDeleteView } = this.props
    onDeleteView(viewId, () => {
      this.loadViews()
    })
  }

  private checkViewUniqueName = (
    viewName: string,
    resolve: () => void,
    reject: (err: string) => void
  ) => {
    const { currentProject, onCheckName } = this.props
    onCheckName(
      { name: viewName, projectId: currentProject.id },
      resolve,
      reject
    )
  }
  private openModal = () => {
    const { history, match } = this.props
    // this.setState({ showModal: true,newModal: true})
    history.push(`/project/${match.params.projectId}/VIS`)
  }

  private handleCancel = () => {
    this.setState({ showModal: false })
  }

  private handleCreate = () => {
    // const { form } = this.formRef.props
    // console.log("da");

    this.setState({ showModal: false })
    // onDeleteView(viewId, () => {
    //   this.loadViews()
    // })

    // form.validateFields((err, values) => {
    //   if (err) {
    //     return
    //   }

    //   form.resetFields()
    // })

  }
  private saveFormRef = (formRef) => {
    this.formRef = formRef
  }

  public render() {
    const { currentProject, views, loading, sources } = this.props

    const { screenWidth, filterViewName } = this.state
    const { projectId } = this.props.match.params
    const {
      viewPermission,
      AdminButton,
      EditButton
    } = ViewList.getViewPermission(currentProject)
    const tableColumns = this.getTableColumns({
      viewPermission,
      AdminButton,
      EditButton
    })
    const tablePagination: PaginationConfig = {
      ...this.basePagination,

      simple: screenWidth <= 768
    }
    const filterViews = this.getFilterViews(filterViewName, views)

    // console.log("filterViews",filterViews);
    // console.log("props",props);
    const handleMenuClick = (params) => {
      console.log('点击', params)
      if (params.key == 1) {
        this.openModal()
      }
      if (params.key == 2) {
        this.addView()
      }
    }
    const menu = (
      <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">图形化配置</Menu.Item>
        <Menu.Item key="2">SQL配置</Menu.Item>
        <Menu.Item key="3">还有一个即将...</Menu.Item>
      </Menu>
    )

    const { copyModalVisible, copyFromView } = this.state
    return (
      <>
        <Container>
          <Helmet title="视图" />
          <Container.Body>
            <Box>
              <Box.Header>
                <Box.Title>
                  <Icon type="bars" />
                  视图列表
                </Box.Title>
                <Box.Tools>
                  <Dropdown overlay={menu}>
                    <Button type="primary">
                      <Icon type="plus" />
                      新增数据集
                    </Button>
                  </Dropdown>
                  {/* <Button onClick={this.openModal} type={'primary'}>
                    图形化视图
                  </Button> */}
                  <CollectionCreateForm
                    sources={sources}
                    projectId={projectId}
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.showModal}
                    newModal={this.state.newModal}
                    viewId={this.state.viewId}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                  />
                  {/* <Tooltip placement="bottom" title="新增"> */}
                  {/* <AdminButton type="primary" onClick={this.addView}>
                    SQL视图
                  </AdminButton> */}
                  {/* <Button type="primary" icon="plus" onClick={this.addView}>
                      添加
                    </Button> */}
                  {/* </Tooltip> */}
                </Box.Tools>
              </Box.Header>
              <Box.Body>
                <Row>
                  <Col span={24}>
                    <Table
                      bordered={false}
                      rowKey="id"
                      loading={loading.view}
                      dataSource={filterViews}
                      columns={tableColumns}
                      pagination={tablePagination}
                      onChange={this.tableChange}
                    />
                  </Col>
                </Row>
              </Box.Body>
            </Box>
          </Container.Body>
        </Container>
        <CopyModal
          visible={copyModalVisible}
          loading={loading.copy}
          fromView={copyFromView}
          onCheckUniqueName={this.checkViewUniqueName}
          onCopy={this.copy}
          onCancel={this.cancelCopy}
        />
      </>
    )
  }
}

const mapDispatchToProps = (
  dispatch: Dispatch<ViewActionType | SourceActionType>
) => ({
  onLoadViews: (projectId) => dispatch(ViewActions.loadViews(projectId)),
  onLoadSources: (projectId) => dispatch(SourceActions.loadSources(projectId)),
  onDeleteView: (viewId, resolve) =>
    dispatch(ViewActions.deleteView(viewId, resolve)),
  onCopyView: (view, resolve) => dispatch(ViewActions.copyView(view, resolve)),
  onCheckName: (data, resolve, reject) =>
    dispatch(checkNameUniqueAction('view', data, resolve, reject))
})

const mapStateToProps = createStructuredSelector({
  sources: makeSelectSources(),
  views: makeSelectViews(),
  currentProject: makeSelectCurrentProject(),
  loading: makeSelectLoading()
})

const withConnect = connect<
  IViewListStateProps,
  IViewListDispatchProps,
  RouteComponentWithParams
>(
  mapStateToProps,
  mapDispatchToProps
)
const withReducer = injectReducer({ key: 'view', reducer })
const withSaga = injectSaga({ key: 'view', saga: sagas })
const withReducerSource = injectReducer({
  key: 'source',
  reducer: reducerSource
})
const withSagaSource = injectSaga({ key: 'source', saga: sagasSource })
export default compose(
  withReducer,
  withSaga,
  withReducerSource,
  withSagaSource,
  withConnect
)(ViewList)
