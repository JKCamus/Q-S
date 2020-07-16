/* bug描述，及准备
当前tableName等select的value并未根据index进行存储，导致每次选择都会进行覆盖。
因为功能要求需要回去编辑，那么，每次最好都携带对应的index进行存储，之后便于获取
但是此次风险很大，因为我的列名及很多相关数据都是依赖于此，因此需要保存此版本，方便对照及回退
现做如下计划
携带为select填入的信息携带index进行保存。并且更改依赖于此的数据

*/
import React, { useState, useContext, useEffect, useRef } from 'react'
import {
  Button,
  Divider,
  Icon,
  Modal,
  Popconfirm,
  Result,
  Select,
  Table,
  Tag
} from 'antd'
import Filter from 'containers/View/components/Filter'
import FilterCopy from 'containers/View/components/FilterCopy'
import useSWR from 'swr/esm/use-swr'
import axios from 'axios'
import api from 'utils/api'
import { StepDispatchContext, StepStateContext } from '../CollectionCreateForm'

interface IATable {
  tableName: string
  tableFields: string[]
  connection: string
  lr: {
    left: string
    right: string
  }
}

const { Column, ColumnGroup } = Table
const { Option } = Select

const fetcher = (url) => axios(url).then((res) => res.data.payload.databases)

// const fetcher2=
const StepTwo = () => {
  // 设置是否有主表和关联表
  const [haveMainTable, setHaveMainTable] = useState(false)
  const [haveAssociativeTale, setHaveAssociativeTale] = useState(false)
  // 新建主表和关联表的Modal
  const [associativeModalVisible, setAssociativeModalVisible] = useState(false)
  const [mainTableModalVisible, setMainTableModalVisible] = useState(false)
  // 禁用字段
  const [fieldDisable, setFieldDisable] = useState(true)
  // 设置主表的表名和字段
  const [mainTable, setMainTable] = useState('')
  const [fields, setFields] = useState([])
  // 主表字段列
  const [mainTagName, setMainTagName] = useState([])
  // 主表已选表名和字段信息
  const [mainInfo, setMainInfo] = useState({})

  // 设置关联表的信息
  const [tableName, setTableName] = useState('')
  // 附表字段列
  const [tagName, setTagName] = useState([])
  // 副表已选表名和字段列s
  const [subInfo, setSubInfo] = useState({})
  const [tableFields, setTableFields] = useState([])
  const [connection, setConnect] = useState('')
  const [lr, setLr] = useState({ left: '', right: '' })
  // 设置关联表
  const [aTables, setATables] = useState<IATable[] | []>([])
  const [selectedTable, setSelectedTable] = useState([])
  const [column, setColumn] = useState([])
  // 副表列数
  const [columnNumber, setColumnNumber] = useState(0)
  // 不重复对比表
  const [compareTable, setCompareTable] = useState([])
  // 重复对比表
  const [toSameTags, setToSameTags] = useState([])
  // 对比总表
  const [ToCompare, setToCompare] = useState([])
  // 汇总信息
  const [TotalInfo, setTotalInfo] = useState([])
  // 副表modal key
  const [atModalKey, setAtModalKey] = useState(0)
  // 回填数据
  const [backfill, setBackfill] = useState({})
  const [aModalFlag, setAModalFlag] = useState(true)
  const [copyIndex, setCopyIndex] = useState(0)
  const state = useContext(StepStateContext)
  const dispatch = useContext(StepDispatchContext)

  // const tagNameRef = useRef(tagName)
  // tagNameRef.current = tagName

  /* 异步请求的数据 */

  const { data } = useSWR(
    'http://rap2.taobao.org:38080/app/mock/data/1579835',
    fetcher
  )
  const sourceID = state && state.currentSource.value
  const { data: tabSource } = useSWR(
    `${api.source}/${sourceID}/databases`,
    fetcher
  )

  // console.log('主表字段-', fields,"主表名-",mainTable)
  // console.log('副表名-', tableName,"副表字段-",tableFields)

  // console.log("ok",mainInfo);
  // console.log("subOk",subInfo);
  // console.log("tableFields",tableFields);

  const fetcher3 = (url) =>
    axios({
      method: 'get',
      url: url,
      data: { dbName: tabSource[0] }
    }).then((res) => res.data.payload.tables)

  /*
 ?必须做判断，是否有tabSource，不知为何SWR不能处理这个依赖
  */

  const { data: sourceTable } = useSWR(
    tabSource && `${api.source}/${sourceID}/tables?dbName=` + tabSource[0],
    fetcher3
  )
  // console.log('currentSource', state.currentSource)
  // console.log('viewDesc', state.viewDesc)
  // console.log('viewName', sourceTable)
  const handleCreateMainTable = () => {
    setMainTableModalVisible(true)
  }

  const handleMainTableOk = () => {
    setHaveMainTable(true)
    setMainTableModalVisible(false)
    setMainInfo({ [mainTable]: fields })
    setToCompare((ToCompare) => {
      ToCompare.push({ tableName: mainTable, fields: fields })
      return ToCompare
    })
    setTotalInfo((TotalInfo) => {
      TotalInfo.push({
        tableName: mainTable,
        columns: fields
      })
      return TotalInfo
    })
  }
  const handleMainTableCancel = () => {
    setMainTableModalVisible(false)
  }

  // 可以读取最新，但存的时候拿不到最新
  // 字段请求相关，之后抽离
  const _loadTag = async (value) => {
    const res = await axios({
      method: 'get',
      url:
        tabSource &&
        `${api.source}/${sourceID}/table/columns?dbName=` +
          tabSource[0] +
          `&tableName=${value}`,
      data: { dbName: tabSource[0], tableName: value }
    })
    return res
  }

  function onChange(value) {
    setFieldDisable(false)
    setMainTable(value)
    // console.log("2e",_loadTag(value));
    _loadTag(value).then((res) => setMainTagName(res.data.payload.columns))
  }

  // 字段模拟
  // const children = []
  // for (let i = 10; i < 36; i++) {
  //   children.push(
  //     <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
  //   )
  // }
  /* 主表字段 */
  const mainChildren = []
  if (mainTagName) {
    mainTagName.map((item, index) => {
      mainChildren.push(<Option key={item.name}>{item.name}</Option>)
    })
  }
  // 副表表名 (要求和住表副表不重复)
  let tempSubTableName = []
  if (sourceTable) {
    sourceTable.map((item) => {
      tempSubTableName.push(item.name)
    })
  }
  let subTableName = []
  tempSubTableName
    .filter((item) => !selectedTable.includes(item))
    .map((item) => {
      if (item != mainTable) {
        subTableName.push(<Option key={item}>{item}</Option>)
      }
    })

  // console.log('去除后的', subTableName)
  /* 副表字段 */
  const subChildren = []
  if (tagName.length != 0) {
    tagName.map((item, index) => {
      subChildren.push(<Option key={item.name}>{item.name}</Option>)
    })
  }
  // console.log('columnNumber', columnNumber)
  useEffect(() => {
    _columnName()
    // console.log('TotalInfo', TotalInfo)
  }, [subInfo])

  useEffect(() => {
    // console.log('kan', column)
    dispatch({ type: 'column', payload: column })
  }, [column])

  useEffect(() => {
    dispatch({ type: 'tableMaps', payload: TotalInfo })
  }, [column])

  useEffect(() => {
    // console.log('mainTagName发送', mainTagName)
    dispatch({ type: 'mainTagName', payload: mainTagName })
  }, [mainTagName])

  const _columnName = () => {
    // console.log("columnNumber",columnNumber);
    if (
      Object.keys(mainInfo).length != 0 &&
      Object.keys(subInfo).length != 0 &&
      subInfo[tableName]
    ) {
      //   console.log("1",...mainInfo[mainTable]);
      //   console.log("222",subInfo[tableName]);
      // console.log("2",...subInfo[tableName]);
      // debugger
      let sameTags = [],
        differentTags = [],
        res = []
      // debugger
      if (columnNumber === 1) {
        let no1 = [...new Set([...mainInfo[mainTable], ...subInfo[tableName]])]
        setCompareTable(no1)
        // console.log("mainInfo",mainInfo);
        // console.log('compareTab', compareTable)
        // console.log('compareTab', no1)
        sameTags = mainInfo[mainTable].filter((tags) =>
          subInfo[tableName].includes(tags)
        )
        setToSameTags([...toSameTags, ...sameTags])

        differentTags = no1.filter((tags) => !sameTags.includes(tags))
        // console.log("sameTags",sameTags);
        // console.log(columnNumber);
        sameTags.map((tag) =>
          res.push(mainTable + '.' + tag, tableName + '.' + tag)
        )
        // console.log('运行了1')
      } else {
        let compareTable2 = [
          ...new Set([...compareTable, ...subInfo[tableName]])
        ]
        setCompareTable(compareTable2)
        // 利用马上拿不到setCompareTable的值，获取之前的数据比对
        sameTags = subInfo[tableName].filter((tags) =>
          compareTable.includes(tags)
        )
        ToCompare.map((item) => {
          let toSame = item.fields.filter((tags) => sameTags.includes(tags))
          toSame.map((tag) => res.push(item.tableName + '.' + tag))
        })
        if (sameTags) {
          let talSame = [...new Set([...toSameTags, ...sameTags])]
          setToSameTags([...toSameTags, ...talSame])
          differentTags = compareTable2.filter(
            (tags) => !talSame.includes(tags)
          )
          // console.log('talSame', talSame)
        }
      }
      let ok1 = [
        ...new Set([...column, ...new Set([...res]), ...differentTags])
      ].filter((tags) => !sameTags.includes(tags))

      setColumn(ok1)
    }
  }
  // console.log('zui', compareTable)
  useEffect(() => {
    console.log('backfill', backfill)
  }, [backfill])
  // console.log("----",state.column);

  const handleATDelete = (index) => {
    // console.log('index', index)
    // console.log('data', aTables)
    const copyATables = [...aTables]
    setATables(() => {
      return copyATables.filter((item, indey) => {
        return index !== indey
      })
    })
  }
  const handleMTEdit = (index) => {
    setAssociativeModalVisible(true)
    const copyATModalKey = atModalKey
    setAtModalKey(index)
  }
  const handleATEdit = (index) => {
    setAtModalKey(index)
    setAModalFlag(false)
    const copyIndex = atModalKey
    setCopyIndex(copyIndex)
    const connection = aTables[index].connection
    const left = aTables[index].lr.left
    const right = aTables[index].lr.right
    const tableFields = aTables[index].tableFields
    const tableName = aTables[index].tableName
    setBackfill({ connection, left, right, tableFields, tableName })

    setAssociativeModalVisible(true)

    const copyATModalKey = atModalKey
  }
  const handleATModal = () => {
    setAModalFlag(true)
    setAssociativeModalVisible(true)
    // console.log('点击了')
  }

  useEffect(() => {
    console.log('atModalKey', atModalKey)
  }, [atModalKey])
  const AssociativeTable = () => (
    <>
      <Button
        type={'primary'}
        onClick={() => {
          handleATModal()
        }}
        style={{ margin: '10px 0' }}
      >
        新增关联表
      </Button>
      <Table dataSource={aTables}>
        <Column
          title="表名"
          dataIndex="tableName"
          key="tableName"
          width={150}
        />
        <Column
          title="字段"
          dataIndex="tableFields"
          key="tableFields"
          render={(tags, record, index) => (
            <span>
              {tags.map((tag) => {
                const color = tag.length > 5 ? 'geekblue' : 'green'
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                )
              })}
            </span>
          )}
        />
        <ColumnGroup title="关联关系">
          <Column
            title="关联方向"
            align={'center'}
            dataIndex="connection"
            key="connection"
            render={(name) => {
              return <Tag color={'blue'}>{name}</Tag>
            }}
          />
          <Column
            title="字段关系"
            align={'center'}
            dataIndex="lr"
            key="lr"
            render={(obj) => {
              return (
                <>
                  <Tag color={'#52BE80'}>{obj.left}</Tag>={' '}
                  <Tag color={'#9B59B6'}>{obj.right}</Tag>
                </>
              )
            }}
          />
        </ColumnGroup>
        <Column
          title="操作"
          key="operation"
          align={'center'}
          render={(text, record, index) => {
            // setColumnNumber(index)
            return (
              <span>
                <a onClick={() => handleATEdit(index)}>编辑</a>
                <Divider type="vertical" />
                <Popconfirm
                  title="所有关联表的数据也会丢失 ,确认删除?"
                  onConfirm={() => {
                    handleATDelete(index)
                  }}
                  okText="确定"
                  cancelText="取消"
                >
                  <a href="#">删除</a>
                </Popconfirm>
              </span>
            )
          }}
        />
      </Table>
    </>
  )
  const MainTable = () => {
    const dataSource = [{ key: '1', mainTable, fields }]
    const columns = [
      {
        title: '主表',
        dataIndex: 'mainTable',
        width: 150,
        key: 'name'
      },
      {
        title: '字段',
        key: 'tags',
        dataIndex: 'fields',
        render: (tags, index) => (
          <span>
            {tags.map((tag) => {
              let color = tag.length > 5 ? 'geekblue' : 'green'

              if (tag === 'loser') {
                color = 'volcano'
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              )
            })}
          </span>
        )
      },
      {
        title: '操作',
        key: 'action',
        align: 'center',
        render: (text, record, index) => (
          <span>
            <a onClick={() => handleMTEdit(index)}>编辑</a>
            <Divider type="vertical" />
            <Popconfirm
              title="所有关联表的数据也会丢失 ,确认删除?"
              onConfirm={() => {
                setHaveMainTable(false)
              }}
              okText="确定"
              cancelText="取消"
            >
              <a href="#">删除</a>
            </Popconfirm>
          </span>
        )
      }
    ]
    return (
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    )
  }
  const Tables = () => {
    return (
      <>
        {MainTable()}
        {haveAssociativeTale ? (
          <AssociativeTable />
        ) : (
          <Result
            status="warning"
            title="你还没有关联表"
            extra={
              <Button
                type="primary"
                key="associate"
                onClick={() => {
                  setAssociativeModalVisible(true)
                }}
              >
                新建关联表
              </Button>
            }
          />
        )}
      </>
    )
  }
  


  return (
    <>
      {/* 主表，字段 */}
      <Modal
        title="创建主表"
        visible={mainTableModalVisible}
        onOk={handleMainTableOk}
        onCancel={handleMainTableCancel}
      >
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="选择主表"
          optionFilterProp="children"
          onChange={onChange}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
        >
          {sourceTable
            ? sourceTable.map((item, index) => (
                <Option value={item.name} key={index}>
                  {item.name}
                </Option>
              ))
            : null}
        </Select>
        <Select
          mode="multiple"
          style={{ width: '50%', marginLeft: '20px' }}
          placeholder="选择字段"
          disabled={fieldDisable}
          onChange={(value) => {
            setFields(value)
          }}
        >
          {mainChildren}
        </Select>
      </Modal>
      <Modal
        onOk={() => {
          setHaveAssociativeTale(true)
          const copyATables = [...aTables]
          debugger
          // 数据有问题
          copyATables[atModalKey] = {
            tableName,
            connection,
            tableFields,
            lr,
            key: atModalKey
          }
          setATables(copyATables)
          console.log('copyATables', copyATables)
          if (aModalFlag) {

            setAtModalKey((atModalKey) => {
              return atModalKey + 1
            })
          } else {

            setAtModalKey(copyIndex)
          }

          console.log('at', aTables)

          setToCompare((ToCompare) => {
            // @ts-ignore
            ToCompare.push({ tableName: tableName, fields: tableFields })
            return ToCompare
          })

          setSelectedTable([
            ...new Set([...selectedTable, mainTable, tableName])
          ])
          setAssociativeModalVisible(false)
          // console.log("tableName",);
          setSubInfo({ [tableName]: tableFields })
          setColumnNumber((columnNumber) => columnNumber + 1)
          // dispatch({ type: 'column', payload: column })
          let connectionEn = (connection) => {
            switch (connection) {
              case '左关联':
                return 'left'
              case '右关联':
                return 'right'
              case '内关联':
                return 'inner'
            }
          }
          setTotalInfo((TotalInfo) => {
            TotalInfo.push({
              tableName: tableName,
              columns: tableFields,
              joinCondition: {
                mainTable: mainTable,
                mainColumn: lr.left,
                viceTable: tableName,
                viceColumn: lr.right,
                join: connectionEn(connection)
              }
            })
            return TotalInfo
          })
        }}
        onCancel={() => {
          setAssociativeModalVisible(false)
        }}
        title={aModalFlag ? '创建关联表' : '编辑关联表'}
        // modal关闭后清除数据
        // destroyOnClose={true}
        key={atModalKey}
        visible={associativeModalVisible}
      >
        <div>
      <div style={{ marginBottom: '10px' }}>
        <span>选择表格和字段: </span>
        <Select
          showSearch
          style={{ width: 100 }}
          placeholder="选择关联表"
          optionFilterProp="children"
          defaultValue={aModalFlag ? null : backfill.tableName}
          onChange={(value) => {
            _loadTag(value).then((res) => setTagName(res.data.payload.columns))
            setTableName(value)
          }}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
        >
          {subTableName}
        </Select>
        <Select
          mode="multiple"
          style={{ width: 200, marginLeft: '20px' }}
          placeholder="选择字段"
          defaultValue={atModalKey === 1 ? undefined : ['右关联', 'email', 'e']}
          disabled={fieldDisable}
          onChange={(value) => {
            setTableFields(value)
            console.log('value', value)
          }}
        >
          {subChildren}
        </Select>
      </div>
      <div>
        <span style={{ marginLeft: '28px' }}>选择关联性: </span>
        <Select
          style={{ width: 200 }}
          onChange={(value) => {
            setConnect(value)
          }}
        >
          <Option key="left" value="左关联">
            左关联
          </Option>
          <Option key="right" value="右关联">
            右关联
          </Option>
          <Option key="inner" value="内关联">
            内关联
          </Option>
        </Select>
        <div style={{ marginTop: '10px' }}>
          <Select
            style={{ width: 150, marginLeft: 106 }}
            onChange={(value) => {
              setLr((obj) => ({ ...obj, left: value }))
            }}
          >
            {/* <Option key="left1" value="id">
          id
        </Option>
        <Option key="right1" value="name">
          name
        </Option>
        <Option key="inner1" value="age">
          age
        </Option> */}
            {mainTagName
              ? mainTagName.map((item, index) => {
                  // console.log(item);
                  return (
                    <Option value={item.name} key={index}>
                      {item.name}
                    </Option>
                  )
                })
              : null}
          </Select>
          {'    '}
          <Icon type="swap" />
          {'    '}
          <Select
            style={{ width: 150 }}
            onChange={(value) => {
              setLr((obj) => ({ ...obj, right: value }))
            }}
          >
            {/* <Option key="left2" value="id">
          id
        </Option>
        <Option key="right2" value="name">
          name
        </Option>
        <Option key="inner3" value="age">
          age
        </Option> */}

            {tagName
              ? tagName.map((item, index) => {
                  // console.log(item);
                  return (
                    <Option value={item.name} key={index}>
                      {item.name}
                    </Option>
                  )
                })
              : null}
          </Select>
        </div>
      </div>
    </div>
      </Modal>
      {!haveMainTable ? (
        <Result
          title="你还没有创建主表"
          extra={
            <Button
              type="primary"
              key="console"
              onClick={handleCreateMainTable}
            >
              新建主表
            </Button>
          }
        />
      ) : (
        Tables()
      )}
      {haveMainTable ? <FilterCopy /> : null}
      {/* {haveMainTable ? <Filter /> : null} */}
    </>
  )
}

export default StepTwo
