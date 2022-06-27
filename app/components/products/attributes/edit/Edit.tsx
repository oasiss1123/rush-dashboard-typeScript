import {
  MinusCircleOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, InputNumber, message, Space, Upload } from "antd";

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
      Attribute Edit
      <Form {...layout} name="nest-messages" onFinish={onFinish}>
        <Form.Item name={["name"]} label="Name" initialValue={data.name}>
          <Input />
        </Form.Item>
        <Form.Item name={["order"]} label="order" initialValue={data.order}>
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item name="photo_key" label="Picture">
          <Upload name="picture" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item name="thumbnail_key" label="Thumbnail">
          <Upload name="thumbnail" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item label="Items">
          <Form.List name="items" initialValue={data.items}>
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    style={{ display: "flex", marginBottom: 8 }}
                    align="baseline"
                  >
                    <Form.Item
                      {...restField}
                      name={[name, "name"]}
                      label="Name"
                    >
                      <Input />
                    </Form.Item>

                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    Add Items
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
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
