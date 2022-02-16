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

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];
// markup
const IndexPage = () => {
  return (
    <main style={{ marginTop: 40 }}>
      <Table dataSource={dataSource} columns={columns} />;
    </main>
  );
};

export default IndexPage;
