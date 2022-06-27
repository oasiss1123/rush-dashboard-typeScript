import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, message, Upload } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

interface EditProps {
  onEdit: (rec: any) => void;
  data: any;
}

export const Edit: React.FC<EditProps> = (props: EditProps) => {
  const { data, onEdit } = props;

  const onFinish = (values: any) => {
    onEdit(values);
    message.success("Success");
  };

  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 820 }}
    >
      Category Edit
      <Form {...layout} name="nest-messages" onFinish={onFinish}>
        <Form.Item name={["name"]} label="Name" initialValue={data.name}>
          <Input />
        </Form.Item>
        <Form.Item name={["order"]} label="Order" initialValue={data.order}>
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name={["parent"]} label="Parent" initialValue={data.parent}>
          <Input />
        </Form.Item>
        <Form.Item name="photo_key" label="Picture" valuePropName="fileList">
          <Upload name="picture" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
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
