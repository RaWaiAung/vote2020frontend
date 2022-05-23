import React, { useEffect, useState } from 'react'
import { Table, Button, Space, Popconfirm } from 'antd';
import { PlusOutlined, EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { withRouter } from "react-router-dom";
import api from '../../api'
// import noti from '../../component/noti'

const State = (props) => {

  const [state, setState] = useState([])
  const [reload, setReload] = useState(false)


  useEffect(() => {
    async function fetchData() {
      const result = await api().get('/state')
      console.log(reload, 'reload')
      result && result.status === 200 && setState(result.data)
    }

    fetchData()
  }, [reload]);

  const confirm = async (id) => {
    const result = await api().delete(`/state/${id}`)
    result && result.data === "Delete" && setReload(!reload)
    // noti('success','State delete successful')
  }

  const columns = [
    {
      title: 'State Code',
      dataIndex: 'State_Code',
      key: 'State_Code',
      // sorter: (a,b) => a.State_Code.length-b.State_Code.length
    },
    {
      title: 'State Region',
      dataIndex: 'State_Region',
      key: 'State_Region',
      // sorter: (a,b) => a.State_Region.length-b.State_Region.length
    },
    {
        title: 'Status',
        dataIndex: 'Status',
        key: 'Status'
    },
    {
      title: 'Action',
      render: (text, record) => {
        let id = record.State_ID
        return <Space>
          <a onClick={() => props.history.push(`/state/${id}`)}><EyeOutlined /></a>
          <a onClick={() => props.history.push(`/state/edit/${id}`)}><EditOutlined /></a>
          <Popconfirm
            onConfirm={() => confirm(id)}
            title="Are you sure?"
            okText="Yes"
            cancelText="No">
            <a><DeleteOutlined /></a>
          </Popconfirm>
        </Space>

      }
    }
  ]

  return <div>
    <Button type="primary" icon={<PlusOutlined />} style={{ margin: '20px 0px' }} shape="round" size="middle"
      onClick={() => props.history.push('./state/create')}
    >Create New State</Button>
    {console.log(state, 'state')}
    <Table columns={columns} dataSource={state} />
  </div>

}

export default withRouter(State);
