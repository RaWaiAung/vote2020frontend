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
      const result= await api().get('/party')
      console.log(reload,'reload')
      result && result.status === 200 && setState(result.data)
     }

    fetchData()
  },[]);

  return <div>
    {state && state.map((val)=>(
      <div>
        <h4>{val.Party_Name}</h4>
    <span>{val.Description}</span>
      </div>
    ))}
    </div>

}

export default withRouter(State);
