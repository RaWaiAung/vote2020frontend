import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Row, Col, Card, Space, Select, Upload, message, DatePicker, Radio, Dropdown } from 'antd';
import { withRouter } from "react-router";
import { FileAddOutlined, CloseCircleOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import api from '../../api';
import moment from 'moment';
import { masterData } from '../../util/helper';
// import noti from '../../component/noti';
import FormItem from 'antd/lib/form/FormItem';

const { TextArea } = Input;
const { Option } = Select;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}


const CreateForm = (props) => {

  const [state, setState] = useState([])
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(false)
  const [nrcList, setnrcList] = useState([])
  const [input, setInput] = useState([])

  const onChange = (value) => {
    console.log(value, "data")
  }

  const onResult = (value) => {
    setInput(value)
  }

  const nrcLength = (value) => {
    console.log(value, 'hi');
    // 

  }
  useEffect(() => {
    async function fetchData() {
      const StateData = await api().get('/party')
      StateData && StateData.status === 200 && setState(StateData.data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    async function fetchData() {
      const nrcData = await api().get(`/nrc/${input}`)
      console.log(nrcData, 'nrcData')
      nrcData && nrcData.status === 200 && setnrcList(nrcData.data)
    }
    input && fetchData()
  }, [input])

  const onFinish = async (values) => {
    delete values.State_Number;
    console.log(values, "values")
    const nrc = new Array();
    var numCe = new Array();
    const code = values.Township;
    var numbe = values.NRC_Number
    var i;

    if (numbe.length == 6) {
      for (i = 0; i <= numbe.length; i++) {
        if (numbe[i] == '1') {
          numCe.push('၁')
        }
        if (numbe[i] == '2') {
          numCe.push('၂')
        }
        if (numbe[i] == '3') {
          numCe.push('၃')
        }
        if (numbe[i] == '4') {
          numCe.push('၄')
        }
        if (numbe[i] == '5') {
          numCe.push('၅')
        }
        if (numbe[i] == '6') {
          numCe.push('၆')
        }
        if (numbe[i] == '7') {
          numCe.push('၇')
        }
        if (numbe[i] == '8') {
          numCe.push('၈')
        }
        if (numbe[i] == '9') {
          numCe.push('၉')
        }
        if (numbe[i] == '0') {
          numCe.push('၀')
        }
      }
    } else {
      // noti('error', 'Nrc number must be 6')
    }


    console.log(numCe, 'cece');

    nrc.push(code);
    nrc.push(numCe.join(''))
    values.NRIC_No = nrc.join('')
    console.log(values.NRIC_No, "nrc")
    delete values.NRC_Number
    delete values.Township
    values.Date_Of_Birth = moment(values.Date_Of_Birth).format('YYYY-MM-DD')
    values.Image = imageUrl ? imageUrl : null
    let data = { ...values, ...masterData }
    console.log(data, "data");

    let result = await api().post('/candidate', data)
    if (result && result.status === 200) {
      props.history.push('/candidate')
      // noti('success', "candidate create successful")
    } else {
      // noti('error', " candidate create fail")
    }
  }
  const onFinishFailed = (err) => {
    console.log(err, "err")
  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        setImageUrl(imageUrl)
      );
    }
  };

  return <Card title=" Candidate Information">
    <Form
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Row>
        <Col sm={24} md={12} lg={12}>
          <Form.Item
            label="Image"
            name="Image"
            rules={[{ required: true, message: "please input image  !" }]}
          >
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col sm={24} md={12} lg={12}>
          <Form.Item
            label="Party Name"
            name="Party_ID"
            rules={[{ required: true, message: "please input party name!" }]}
          >
            <Select
              showSearch
              optionFilterProp="children"
              onChange={onChange}
            >
              {
                state && state.map((item) => {
                  return <Option value={item.Party_ID}>{item.Party_Name}</Option>
                })
              }
            </Select>
          </Form.Item>
        </Col>
        <Col sm={24} md={12} lg={12}>
          <Form.Item
            label="Candidate Name"
            name="Candidate_Name"
            rules={[{ required: true, message: "please input cadidate name!" }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        label="Election Name"
        name="Election_Name"
        rules={[{ required: true, message: "please input  election name!" }]}>
        <TextArea rows={2} />
      </Form.Item>
      <Row gutter={16}>
        <Col sm={24} md={12} lg={12}>
          <Form.Item
            label="Date of Birth"
            name="Date_Of_Birth"
            rules={[{ required: true, message: "please input  date of birth!" }]}>
            <DatePicker onChange={onChange} />
          </Form.Item>
        </Col>
        <Col sm={24} md={12} lg={12}>
          <Form.Item
            label="Race"
            name="Race"
            rules={[{ required: true, message: "please race!" }]}>
              <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        label="Religion"
        name="Religion"
        rules={[{ required: true, message: "please input Religion !" }]}>
        <Radio.Group onChange={onChange}>
          <Radio value="ဗုဒ္ဓ" name="ဗုဒ္ဓ">ဗုဒ္ဓ</Radio>
          <Radio value="ခရစ်ယာန်" name="ခရစ်ယာန်">ခရစ်ယာန်</Radio>
          <Radio value="ဟိန္ဒူ" name="ဟိန္ဒူ">ဟိန္ဒူ</Radio>
          <Radio value="မွတ်ဆလင်" name="မွတ်ဆလင်">မွတ်ဆလင်</Radio>

        </Radio.Group>
      </Form.Item>
      <Row gutter={16}>
        <Col sm={24} md={12} lg={12}>
          <Form.Item
            label="NRIC_No"
            name="NRIC_No"
          // rules={[{ required: true, message: "please input your building type!" }]}
          >
            <Row>
              <Col span={8}>
                <Form.Item
                  label='State Number'
                  name="State_Number"
                  rules={[{ required: true, message: 'please select state number' }]}
                >
                  <Select
                    showSearch
                    style={{ width: 70 }}
                    onChange={onResult}
                    placeholder="NO"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="3">3</Option>
                    <Option value="4">4</Option>
                    <Option value="5">5</Option>
                    <Option value="6">6</Option>
                    <Option value="7">7</Option>
                    <Option value="8">8</Option>
                    <Option value="9">9</Option>
                    <Option value="10">10</Option>
                    <Option value="11">11</Option>
                    <Option value="12">12</Option>
                    <Option value="13">13</Option>
                    <Option value="14">14</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>

                <Form.Item
                  label='Township'
                  name="Township"
                  rules={[{ required: true, message: 'please select township' }]}
                >
                  <Select
                    showSearch
                    allowClear
                    // style={{ width: 200 }}
                    style={{ width: 100 }}
                    placeholder="Select a person"
                    optionFilterProp="children"
                  // filterOption={(input, option) =>
                  //   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  // }
                  >
                    {nrcList && nrcList.map((item) => {
                      return <Option value={item.code}>{item.townshipname}</Option>
                    })}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="NRC number"
                  name="NRC_Number"
                  rules={[{ required: true, message: "please input number  !" }]}
                >
                  <Input style={{ width: 100 }} />
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>

        </Col>
      </Row>

      <Form.Item
        label="Education "
        name="Education"
        rules={[{ required: true, message: "please input education !" }]}>
        <TextArea rows={2} />
      </Form.Item>

      <Form.Item
        label="Occupation"
        name="Occupation"
        rules={[{ required: true, message: "please input  occupation!" }]}>
        <TextArea rows={2} />
      </Form.Item>

      <Form.Item
        label="Permanent Address"
        name="Permanent_address"
        rules={[{ required: true, message: "please input  permanent address!" }]}>
        <TextArea rows={2} />
      </Form.Item>

      <Form.Item
        label="Why to be a candidate?"
        name="Why_to_be_a_candidate"
        rules={[{ required: true, message: "please input Why would you like to be a candidate!" }]}>
        <TextArea rows={2} />
      </Form.Item>

      <Form.Item
        label="Remark"
        name="Remark"
      >
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit" icon={<FileAddOutlined />} style={{ margin: '20px 0px' }} shape="round" size="middle">Create</Button>
          <Button type="primary" icon={<CloseCircleOutlined />} style={{ margin: '20px 0px' }} shape="round" size="middle"
            onClick={() => props.history.push('/candidate')}>Cancel</Button>
        </Space>
      </Form.Item>
    </Form>

  </Card>
}

export default withRouter(CreateForm);