const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    model=this.props.model
    private tagOption = Object.entries(this.model).map(([variableType, text]) => (
      <Option key={variableType} value={variableType}>{variableType}</Option>
      ))
      // console.log("model",model)
  
    render() {
      const { visible, onCancel, onCreate, form} = this.props
      const { getFieldDecorator } = form

      return (
        <Modal
          visible={visible}
          title="Create a new collection"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="名称">
              {getFieldDecorator('name', {
                rules: [
                  {
                    required: true,
                    message: '选择名称'
                  }
                ]
              })(
                <Select
                  // defaultValue={visualType}
                  placeholder="请输入"
                  style={{ width: 200 }}
                  // onChange={selectChange.bind(this, index)}
                >
                  {this.tagOption}
                  {/* <Option key={0} value={'xm'}>
                    厦门
                  </Option>
                  <Option key={1} value={'cd'}>
                    成都
                  </Option> */}
                </Select>
              )}
            </Form.Item>
            <Form.Item label="值类型">
              {/* {getFieldDecorator("description")(<Input type="textarea" />)} */}
              {getFieldDecorator('valueType', {
                rules: [
                  {
                    required: true,
                    message: '请选择值类型!'
                  }
                ]
              })(
                <Select
                  // defaultValue={visualType}
                  placeholder="请选择值类型"
                  style={{ width: 200 }}
                  // onChange={selectChange.bind(this, index)}
                >
                  <Option key={0} value={'number'}>
                    数字
                  </Option>
                  <Option key={1} value={'string'}>
                    字符
                  </Option>
                </Select>
              )}
            </Form.Item>
          </Form>
        </Modal>
      )
    }
  }
)