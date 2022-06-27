import { Button, Form, Input, message } from "antd";

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};

interface EditProps {
  onEdit: (rec: any) => void;
  data: any;
}

export const Edit: React.FC<EditProps> = (props: EditProps) => {
  const { data, onEdit } = props;
  console.log(data);
  const onFinish = (values: any) => {
    onEdit(values);

    message.success("Success");
  };

  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 820 }}
    >
      Selection Edit
      <Form {...layout} name="nest-messages" onFinish={onFinish}>
        <Form.Item name={["name"]} label="Name" initialValue={data.name}>
          <Input />
        </Form.Item>
        <Form.Item
          name={["slug_name"]}
          label="Slug"
          initialValue={data.slug_name}
        >
          <Input disabled />
        </Form.Item>
        <Form.Item
          name={["description"]}
          label="Description"
          initialValue={data.description}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item name={["type"]} label="Type" initialValue={data.type}>
          <Input disabled />
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
