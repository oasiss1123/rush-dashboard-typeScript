import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Select, Upload } from "antd";

interface UsersFormProps {
  onCreate: (rec: any) => void;
  data: any;
}

export const UsersForm: React.FC<UsersFormProps> = (props: UsersFormProps) => {
  const { Option } = Select;
  const { data, onCreate } = props;

  console.log(data);

  const onFinish = (values: any) => {
    onCreate(values);
    console.log(values);
  };

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };

  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 820 }}
    >
      <div>
        <h1
          style={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          New Customers
        </h1>
        <></>
      </div>
      <Form {...layout} name="nest-messages" onFinish={onFinish}>
        <Form.Item name={["name"]} label="Name">
          <Input />
        </Form.Item>
        <Form.Item name={["phone"]} label="Phone">
          <Input />
        </Form.Item>
        <Form.Item name={["email"]} label="Email">
          <Input />
        </Form.Item>
        <Form.Item name={["password"]} label="Password">
          <Input.Password />
        </Form.Item>
        <Form.Item name={["confirm_password"]} label="Confirm Password">
          <Input.Password />
        </Form.Item>

        <Form.Item name={["role_id"]} label="Role">
          <Select style={{ width: "100%" }} placeholder="Select" value={Number}>
            <Option value={2}>Admin</Option>
            <Option value={3}>Manager</Option>
            <Option value={4}>Cashier</Option>
            <Option value={5}>Inventory Manager</Option>
            <Option value={6}>Staff</Option>
            <Option value={7}>Owner</Option>
            <Option value={8}>Admin Delivery</Option>
            <Option value={9}>Accountant</Option>
          </Select>
        </Form.Item>
        <Form.Item name={["branch"]} label="Branch">
          <Select style={{ width: "100%" }} placeholder="">
            {data.map((item: any) => (
              <Option key={item} value={item.id}>
                {item.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name="upload" label="Picture" valuePropName="fileList">
          <Upload name="picture" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
