import React,{useEffect, useState} from 'react'
import { Table, Button, Space, Popconfirm, Form, Input, Row, Col, Select, Collapse, Tag } from 'antd';
import { PlusOutlined, EyeOutlined, CloseCircleOutlined, SearchOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { withRouter } from "react-router-dom";
import api from '../../api'


const State = (props) => {
  const { Option } = Select;
  const { Panel } = Collapse;
  const [form] = Form.useForm();
  const [townshipList, setTownship] = useState([])
  const [state,setState] = useState ([])
  const [reload, setReload] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const result= await api().get('/constituency')
      console.log(result,'result')
      result && result.status === 200 && setState(result.data)

      const TownshipData = await api().get('/township')
      TownshipData && TownshipData.status === 200 && setTownship(TownshipData.data)
    
     }

    fetchData()
  },[reload]);

  const confirm = async (id) => {
    const result = await api().delete(`/constituency/${id}`)
    result && result.data === "Delete" && setReload(!reload)
    
  }
  const onFinish = async (values) => {
    let Constituency_Name = values.Constituency_Name;
    let Township_ID = values.Township_ID;

    const result = await api().get(`constituency?query=Constituency_Name:${Constituency_Name},Township_ID:${Township_ID}`)
    result && result.status === 200 && setState(result.data)
  }
  const columns =[
    {
      title : 'Constituency Name',
      dataIndex : 'Constituency_Name',
      key : 'Constituency_Name',
      sorter: (a,b) => a.Constituency_Name.length-b.Constituency_Name.length
    },
    {
      title : 'Township Name',
      dataIndex : 'Township_Name',
      key : 'Township_Name',
      sorter: (a,b) => a.Township_Name.length-b.Constituency_Name.length
    },
    {
      title : 'Election Name',
      dataIndex : 'Election_Name',
      key : 'Election_Name',
      sorter: (a,b) => a.Election_Name.length-b.Election_Name.length
    },
      {
      title: 'Action',
      render: (text, record) => {
        let id = record.Constituency_ID
        return <Space>
          <a onClick={() => props.history.push(`/constituency/${id}`)}><EyeOutlined /></a>
          <a onClick={() => props.history.push(`/constituency/edit/${id}`)}><EditOutlined /></a>
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
  const handleClear = () => {
    form.resetFields();
  }
  const getCreateBtn = <Tag
  color="magenta"
    onClick={() => props.history.push('/constituency/create')}
  >Create
</Tag>
 
  return <div>
  <Collapse defaultActiveKey={['1']} >
    <Panel header="Constituency List" key="2" extra={getCreateBtn}>
      <div>
        <Form layout="vertical"
          onFinish={onFinish} form={form}
        >
          <Row gutter={20}>
            <Col sm={24} md={8} lg={8}>
              <Form.Item name="Constituency_Name" label="Constituency Name">
                <Input />
              </Form.Item>
            </Col>
            <Col sm={24} md={8} lg={8}>
              <Form.Item name="Township_ID" label="Township">
                <Select
                  showSearch
                  optionFilterProp="children"
                  allowClear
                // onChange={onChange}
                >
                  {
                    townshipList && townshipList.map((item) => {
                      return <Option value={item.Township_ID}>{item.Township_Name}</Option>
                    })
                  }
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
              <Col sm={24} md={12} lg={12}>
                <Space>
                  <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>Search</Button>
                  <Button type="danger" icon={<CloseCircleOutlined />}
                    onClick={handleClear}>Cancel</Button>
                </Space>
              </Col>
            </Row>
          </Form>
        </div>
      </Panel>

    </Collapse>
    <br />
      <Table columns={columns} dataSource={state}/>
    </div>

}

export default withRouter(State);
