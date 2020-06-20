import React, { useContext, useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Table, Input, Button, Popconfirm, Form, Radio, Select } from "antd";

const EditableContext = React.createContext();
const { Option } = Select;
const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
        {/* <div>hey we</div> */}
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef();
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex]
    });
  };

  const save = async e => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`
          }
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "字段名称",
        dataIndex: "field"
      },
      {
        title: "别名",
        dataIndex: "alias",
        editable: true
      },
      {
        title: "数据类型",
        dataIndex: "type",
        render(type) {
          return (
            // <Radio.Group value={type} disabled>
            <Radio.Group value={type}>
              <Radio value={0}>维度</Radio>
              <Radio value={1}>指标</Radio>
            </Radio.Group>
          );
        }
      },
      {
        title: "可视化类型",
        dataIndex: "visType",
        render(type): any {
          return (
            <Select defaultValue={type} style={{ width: 200 }}>
              <Option key={0} value={0}>
                数字
              </Option>
              <Option key={1} value={1}>
                字符
              </Option>
              <Option key={2} value={2}>
                日期
              </Option>
              <Option key={3} value={3}>
                地理国家
              </Option>
              <Option key={4} value={4}>
                地理省份
              </Option>
              <Option key={5} value={5}>
                地理城市
              </Option>
            </Select>
          );
        }
      }
    ];
    this.state = {
      dataSource: [
        { field: "id", type: 0, visType: 0, alias: "标识" },
        { field: "name", type: 1, visType: 1, alias: "用户名" },
        { field: "project_id", type: 1, visType: 2, alias: "项目标识" },
        { field: "job_type", type: 0, visType: 3, alias: "工作类型" },
        { field: "job_status", type: 0, visType: 4, alias: "工作状态" },
        { field: "start_date", type: 0, visType: 5, alias: "开始时间" }
      ],
      count: 2
    };
  }

  handleDelete = key => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter(item => item.key !== key)
    });
  };

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: 32,
      address: `London, Park Lane no. ${count}`
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1
    });
  };

  handleSave = row => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData
    });
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell
      }
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave
        })
      };
    });
    return (
      <div>
        <Button
          onClick={this.handleAdd}
          type="primary"
          style={{
            marginBottom: 16
          }}
        >
          Add a row
        </Button>
        <Table
          components={components}
          rowClassName={() => "editable-row"}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    );
  }
}

ReactDOM.render(<EditableTable />, document.getElementById("container"));
