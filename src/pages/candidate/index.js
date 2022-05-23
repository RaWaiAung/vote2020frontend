import React, { useEffect, useState } from 'react'
import { Form, Pagination , Card, Button, Collapse, Space, Popconfirm,Select } from 'antd';
import { PlusOutlined, EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { withRouter } from "react-router-dom";
import api from '../../api';
import moment from 'moment';
import '../../components/layout/layout.css'
const { Option } = Select;


const State = (props) => {
  const [getState, setGetState] = useState([]);
  const [ districtList , setDistrictList] = useState([])
  const [ stateid , setStateid] = useState([])
  

  useEffect(() => {
    async function fetchData() {

     const StateData = await api().get('/party')
     StateData && StateData.status === 200 && setGetState(StateData.data)

     const DistrictData = await api().get('/candidate')
     DistrictData && DistrictData.data.status === 200 && setDistrictList(DistrictData.data.data)
    }
    fetchData()
  }, [])

  
  useEffect(() => {
    async function fetchData() {
     const DistrictData = await api().get(`candidate?query=Party_ID:${stateid}`)
     console.log(DistrictData,"DistrictData")
     DistrictData && DistrictData.data.status === 200 && setDistrictList(DistrictData.data.data)
    }
    stateid && fetchData()
  }, [stateid]);

  const onStateChange = (value) => {
    setStateid(value);
    console.log(value,'hi');
  }

  const [state, setState] = useState({
    minValue: 0,
    maxValue: 5
  })
  const numEachPage = 5;
  const  handleChange = value => {
      setState({
        minValue: (value - 1 ) * numEachPage,
        maxValue: value * numEachPage
      })
  };

  return  <div className="candidate_data">
    <Form
      layout="vertical"
    >

      
<Form.Item
            label="State Name"
            name="State_ID"
            rules={[{ required: true, message: "please input select state!" }]}
          >
            <Select
              showSearch
              optionFilterProp="children"
              onChange={onStateChange} 
            >
              {
                getState && getState.map((item) =>{
                  return <Option value={item.Party_ID}>{item.Party_Name}</Option>
                })
              }
            </Select>
        </Form.Item>
    </Form>
    <div>
    <p className="reviews"><i>Name:</i>{districtList.length}</p>
    
  {districtList && districtList.slice(state.minValue, state.maxValue).map(val => (
       <div className="candidate">
         <div className="photo">
            <div className="details">
              <article className="">
                  <img src={require('../../images/people.jpeg')} className="img"/>
                  <h4>{val.Candidate_Name}</h4>
                  <p className="title">{val.Party_Name}</p>
                  <p className="text">{val.Why_to_be_a_candidate}</p>
                  <div className="info">
                    <div>
                    <span className="items">မွေးသက္ကရက်</span><p>{val.Date_Of_Birth = moment(val.Date_Of_Birth).format('YYYY-MM-DD')}</p>
                    <span className="items">လူမျိုး/ဘာသာ</span><p>{val.Education}</p>
                    </div>
                    <div>
                    <span className="items">နေရပ်လိပ်စာ</span><p>{val.Permanent_address}</p>
                    <span className="items">လူမျိုး/ဘာသာ</span><p>{val.Election_Name}</p>
                    </div>
                  </div>
              </article>
            </div>
         </div>
       </div>
    ))}
    </div>
    <Pagination
          defaultCurrent={1}
          defaultPageSize={numEachPage}
          onChange={handleChange}
          total={districtList.length}
          className="up-down"
        />
</div>
}
export default withRouter(State);
