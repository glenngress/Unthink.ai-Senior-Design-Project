import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  InputNumber,
  Checkbox,
  Radio,
  Upload,
  Table,
} from "antd";
import "antd/dist/antd.css";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "Emotions",
    dataIndex: "emotions",
    key: "emotions",
  },
  {
    title: "File",
    dataIndex: "file",
    key: "file",
  },
];
// markup
const IndexPage = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [age, setAge] = useState(null);
  const [emotions, setEmotions] = useState(null);
  const [gender, setGender] = useState(null);
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const dataSource = [
    {
      key: "1",
      name: name,
      email: email,
      age: age,
      gender: gender,
      emotions: emotions,
      file: file,
    },
  ];
  const onFinish = (values) => {
    let formData = { name, email, age, emotions, gender, file };
    axios({
      method: "POST",
      url: "https://getform.io/f/8f09ffd7-bca4-4e9f-b602-80f1f206dfee",
      data: formData,
      header: {
        "Content-Type": "multipart/form-data; boundary=${form._boundary}",
      },
    });
  };
  const getFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <main style={{ width: "50%", marginTop: 40 }}>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[{ required: true }]}
          onChange={(values) => {
            setName(values.target.value);
          }}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[{ type: "email", required: true }]}
          onChange={(values) => {
            setEmail(values.target.value);
          }}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "age"]}
          label="Age"
          rules={[{ type: "number", min: 0, max: 99, required: true }]}
          onChange={(values) => {
            setAge(values.target.value);
          }}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name={["user", "gender"]}
          label="Gender"
          rules={[{ required: true }]}
          onChange={(values) => {
            setGender(values.target.value);
          }}
        >
          <Radio.Group options={["male", "female", "other"]} />
        </Form.Item>
        <Form.Item
          name={["user", "emotions"]}
          label="Emotions"
          rules={[{ required: true }]}
          onChange={(values) => {
            setEmotions(values.target.value);
          }}
        >
          <Checkbox.Group options={["sad", "happy", "angry"]} />
        </Form.Item>

        <Form.Item
          name={["user", "file"]}
          label="File"
          rules={[{ required: true }]}
          getValueFromEvent={getFile}
          onChange={(values) => {
            setFile(values.target.value);
          }}
        >
          <Upload>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Table dataSource={dataSource} columns={columns} />;
    </main>
  );
};

export default IndexPage;
