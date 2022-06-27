import { Button, Form, Input, InputNumber, Select } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

interface EditProps {
  onEdit: (rec: any) => void;
  data: any;
  branches: any;
}

export const Edit: React.FC<EditProps> = (props: EditProps) => {
  const { data, branches, onEdit } = props;
  const { Option } = Select;
  const onFinish = (values: any) => {
    onEdit(values);
  };

  console.log(branches);

  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 820 }}
    >
      Pre-Order Edit
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        initialValues={data}
      >
        <Form.Item name={["name"]} label="Name">
          <Input />
        </Form.Item>
        <Form.Item name={["phone"]} label="Phone">
          <Input />
        </Form.Item>
        <Form.Item name={["email"]} label="Email">
          <Input />
        </Form.Item>

        <Form.Item name={["current_password"]} label="Current Password">
          <Input />
        </Form.Item>
        <Form.Item name={["new_password"]} label="New Password">
          <Input />
        </Form.Item>
        <Form.Item name={["confirm_password"]} label="Confirm Password">
          <Input />
        </Form.Item>
        <Form.Item name="role_id" label="Role">
          <Select style={{ width: "100%" }}>
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
        <Form.Item name={["branch_id"]} label="Branch">
          <Select style={{ width: "100%" }} placeholder="" disabled>
            {branches.map((item: any) => (
              <Option key={item} value={item.id}>
                {item.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name={["pinCode"]} label="Pin Code">
          <Input />
        </Form.Item>
        <Form.Item name={["confirmPinCode"]} label="Confirm Pin Code">
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
