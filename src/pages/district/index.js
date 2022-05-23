import React,{useEffect, useState} from 'react'
import {Table,Button, Space, Popconfirm, Col ,Row } from 'antd';
import {PlusOutlined, EyeOutlined ,EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { withRouter } from "react-router-dom";
import api from '../../api'
// import noti from '../../component/noti'

const State = (props) => {

  const [state,setState] = useState ([])
  const [reload , setReload] = useState(false)

  useEffect(() => {

    async function fetchData() {
      const result= await api().get('/district')
      console.log(reload,'reload')
      result && result.status === 200 && setState(result.data.data)
     }

    fetchData()
  },[reload]);

  const confirm = async (id) => {
    const result = await api().delete(`/district/${id}`)
    result && result.data === "Delete" && setReload(!reload)
    // noti('success','District delete successful')
  }

   
  const columns =[
    {
      title : 'District Code',
      dataIndex : 'District_Code',
      key : 'District_Code',
      sorter: (a,b) => a.District_Code.length-b.District_Code.length
    },
    
    {
        title : 'District Name',
        dataIndex : 'District_Name',
        key : 'District_Name',
        sorter: (a,b) => a.District_Name.length-b.District_Name.length
    },
    {
      title : 'State ID',
      dataIndex : 'State_ID',
      key : 'State_ID',
      sorter: (a,b) => a.State_ID.length-b.State_ID.length
    },
  ]

  return <div>
    <Button type="primary" icon={<PlusOutlined />} style={{ margin: '20px 0px' }} shape="round" size="middle"
      onClick={() => props.history.push('./district/create')}
    >Create New District</Button>
    {console.log(state,'state')}
        <Table columns={columns} dataSource={state} pagination={{defaultPageSize: 5}}/>
    
    </div>

}

export default withRouter(State);
