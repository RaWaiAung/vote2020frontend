import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Row, Col, Card, Space, Select } from 'antd';
import { withRouter } from "react-router-dom";
import api from '../../api';
// import { masterData } from '../../util/helper';

const { TextArea } = Input;
const { Option } = Select;

const DetailForm = (props) => {

  const id = props.match.params.id

  const [state, setState] = useState(false)

  useEffect(() => {
    async function fetchData() {
      let result = await api().get(`/candidate/${id}`)
      result && result.status === 200 && setState(result.data)
    } fetchData()
  }, []);

  return <div>
    {
      state ? <Card title="candidate Information">
        <Form
          layout="vertical"
          initialValues={state}
        >
          <Row>
            <Col sm={24} md={24} lg={24}>
              <Form.Item
                label="Party Name"
                name="Party_ID"
                rules={[{ required: true, message: "please input party name!" }]}
              >
                <TextArea rows={2} />
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
          <Row gutter={16}>
            <Col sm={24} md={12} lg={12}>
              <Form.Item
                label="Image"
                name="Image"
                rules={[{ required: true, message: "please input office name !" }]}>
                <img src={state.Image} />
              </Form.Item>
            </Col>
           
          </Row>

          <Row>
            <Col sm={24} md={24} lg={24}>
              <Form.Item
                label="Election Name"
                name="Election_Name"
                rules={[{ required: true, message: "please input  election name!" }]}>
                <TextArea rows={2} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col sm={24} md={24} lg={24}>
              <Form.Item
                label="Date of Birth"
                name="Date_Of_Birth"
                rules={[{ required: true, message: "please input  date of birth!" }]}>
                <TextArea rows={2} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col sm={24} md={24} lg={24}>
              <Form.Item
                label="Race"
                name="Race"
                rules={[{ required: true, message: "please race!" }]}>
                <TextArea rows={2} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col sm={24} md={24} lg={24}>
              <Form.Item
                label="Religion"
                name="Religion"
                rules={[{ required: true, message: "please input Religion !" }]}>
                <TextArea rows={2} />
              </Form.Item>
            </Col>
            <Col sm={24} md={24} lg={24}>
              <Form.Item
                label="NRIC No"
                name="NRIC_No"
                rules={[{ required: true, message: "please input NRIC NO !" }]}>
                <TextArea rows={2} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col sm={24} md={24} lg={24}>
              <Form.Item
                label="Education"
                name="Education"
                rules={[{ required: true, message: "please input education !" }]}>
                <TextArea rows={2} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col sm={24} md={24} lg={24}>
              <Form.Item
                label="Occupation"
                name="Occupation"
                rules={[{ required: true, message: "please input  occupation!" }]}>
                <TextArea rows={2} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col sm={24} md={24} lg={24}>
              <Form.Item
                label="Permanent Address"
                name="Permanent_address"
                rules={[{ required: true, message: "please input  permanent address!" }]}>
                <TextArea rows={2} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col sm={24} md={24} lg={24}>
              <Form.Item
                label="Why would you like to be a candidate?"
                name="Why_to_be_a_candidate"
                rules={[{ required: true, message: "please input Why would you like to be a candidate!" }]}>
                <TextArea rows={2} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col sm={24} md={12} lg={12}>
              <Form.Item
                label="Remark"
                name="Remark"
              >
                <TextArea rows={4} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Space>
              <Button type="primary" onClick={() => props.history.push(`/candidate/edit/${id}`)}>Edit</Button>
              <Button onClick={() => props.history.push('/candidate')}>Close</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
        : <div>Loading .....</div>
    }
  </div>


}

export default withRouter(DetailForm);