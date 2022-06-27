import { Button, Form, Input, InputNumber, message } from "antd";

interface EditProps {
  onEdit: (rec: any) => void;
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

interface EditProps {
  data: any;
}

export const Edit: React.FC<EditProps> = (props: EditProps) => {
  const { data, onEdit } = props;
  console.log(data);

  const onFinish = (values: any) => {
    console.log(values);
    onEdit(values);
    message.success("Success");
  };

  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 820 }}
    >
      Tag Edit
      <Form {...layout} name="nest-messages" onFinish={onFinish}>
        <Form.Item name={["name"]} label="Name" initialValue={data.name}>
          <Input />
        </Form.Item>
        <Form.Item name={["order"]} label="Order" initialValue={data.order}>
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name={["label"]} label="Label" initialValue={data.label}>
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
