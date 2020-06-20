import React, { useState, useContext, useEffect } from 'react'
import { Button, Card, Select, Switch, Input } from 'antd'
import { StepDispatchContext, StepStateContext } from './CollectionCreateForm'

interface IFilterTableProps {
  items: number
  filterName: string
  setItems: (value: number) => void
  onAdd:()=>void
}

const { Option } = Select
const FilterTable: React.FC<IFilterTableProps> = ({ items, setItems }) => {
  const state = useContext(StepStateContext)
  const dispatch = useContext(StepDispatchContext)
  const [filterCondition, setFilterCondition] = useState([])
  const [list, setList] = useState([])
  // const [filterItems, setFilterItems] = useState([])
  // console.log("hello",state.column);
  useEffect(() => {
    console.log('filterCondition', filterCondition)
    console.log('list', list)
  })

  const filterChange = (value, index, filterName: string) => {
    setFilterCondition((filterCondition) => {
      const newFilterCondition = [...filterCondition]
      newFilterCondition[index] = {
        ...newFilterCondition[index],
        [filterName]: value
      }
      console.log('12', newFilterCondition)
      return newFilterCondition
    })
  }
  const removeItem = (index) => {
    setFilterCondition(() => {
      const newFilterCondition = [...filterCondition]

      const aj = newFilterCondition.filter((item, indey) => {
        console.log('item', item)
        console.log('indey', indey)

        return index !== indey
      })
      console.log('aj', aj)
      return aj
    })
  }
  const filterItem = (index) => (
    <div style={{ marginBottom: '10px' }}>
      <Select
        style={{ width: 100, marginRight: '10px' }}
        defaultValue="and"
        onSelect={(value) => {
          const filterName = 'linkedSymbol'
          filterChange(value, index, filterName)
        }}
      >
        <Option key="AND" value="and">
          AND
        </Option>
        <Option key="OR" value="or">
          OR
        </Option>
      </Select>
      <Select
        style={{ width: 100, marginRight: '10px' }}
        defaultValue="数值条件"
        onSelect={(value) => {
          const filterName = 'type'
          filterChange(value, index, filterName)
        }}
      >
        <Option key="1" value="number">
          数字
        </Option>
        <Option key="2" value="string">
          字符串
        </Option>
      </Select>
      <Select
        style={{ width: 180, marginRight: '10px' }}
        defaultValue="列名"
        onSelect={(value) => {
          const filterName = 'columnName'
          filterChange(value, index, filterName)
        }}
      >
        {state.column
          ? state.column.map((item, index) => (
              <Option value={item} key={index}>
                {item}
              </Option>
            ))
          : null}
      </Select>
      <Select
        style={{ width: 130, marginRight: '10px' }}
        defaultValue="大小条件"
        onSelect={(value) => {
          const filterName = 'comparison'
          filterChange(value, index, filterName)
        }}
      >
        <Option key="5" value="=">
          {`等于(=)`}
        </Option>
        <Option key="6" value=">=">
          {`大于等于(>=)`}
        </Option>
        <Option key="7" value="<=">
          {`小于等于(<=)`}
        </Option>
        <Option key="8" value="!=">
          {`不等于(!=)`}
        </Option>
      </Select>
      <Input
        type="text"
        placeholder="值"
        style={{ width: '100px', marginRight: '10px' }}
        onChange={(e) => {
          const filterName = 'targetValue'
          // console.log('value', e.target.value)
          const value = e.target.value
          filterChange(value, index, filterName)
        }}
      />
      <Button
        icon="close"
        type="danger"
        color="#eee"
        onClick={() => {
          removeItem(index)
          console.log('item', items)
        }}
      >
        删除
      </Button>
    </div>
  )

  // filterItems.map((item, index) => {
  //   const list = <li key={index}>{filterItem(index)}</li>
  //   setFilterItems((filterItems) => {
  //     return [...filterItems, list]
  //   },
  //   )
  // })




  const filterItems = []
  for (let index = 0; index < items; index++) {
    filterItems.push(<li key={index}>{filterItem(index)}</li>)
  }


//   useEffect(() => {
//     setList([filterItems])
    
// }, [filterItems]);


  return <ul>{filterItems}</ul>
}

const Filter = () => {
  const [checked, setChecked] = useState(true)
  const [items, setItems] = useState(1)
  const handleSwitch = (isChecked) => {
    setChecked(isChecked)
  }

 const  handleAdd =()=>{

   console.log("props");
   
 }



  return (
    <Card
      title={
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '10px' }}>是否添加过滤条件</span>
          <Switch
            checkedChildren="是"
            unCheckedChildren="否"
            defaultChecked
            onChange={handleSwitch}
          />
        </div>
      }
      extra={
        <Button
          type="primary"
          style={{ marginLeft: '10px' }}
          onClick={() => {
            setItems(items + 1)
          }}
          disabled={!checked}
        >
          新增过滤条件选项
        </Button>
      }
    >
      {checked ? <FilterTable items={items} setItems={setItems} onAdd={handleAdd}/> : null}
    </Card>
  )
}

export default Filter
