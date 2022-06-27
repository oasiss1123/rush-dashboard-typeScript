import { Button, Form, Input, InputNumber, message } from "antd";

interface TagFormProps {
  onCreate: (rec: any) => void;
}

export const TagForm: React.FC<TagFormProps> = (props: TagFormProps) => {
  const { onCreate } = props;
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };

  const onFinish = (values: any) => {
    onCreate(values);
    console.log(values);
    message.success("Created New");
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
          New Tag
        </h1>
        <></>
      </div>
      <Form {...layout} name="nest-messages" onFinish={onFinish}>
        <Form.Item name={["name"]} label="Name">
          <Input />
        </Form.Item>
        <Form.Item name={["order"]} label="Order">
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name={["label"]} label="Label">
          <Input />
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
