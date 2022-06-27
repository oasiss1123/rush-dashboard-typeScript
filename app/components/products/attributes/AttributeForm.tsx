import {
  MinusCircleOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, InputNumber, message, Space, Upload } from "antd";

interface TagFormProps {
  onCreate: (rec: any) => void;
}

export const AttributeForm: React.FC<TagFormProps> = (props: TagFormProps) => {
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
          New Attribute
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
        <Form.Item name="photo_key" label="Picture" valuePropName="fileList">
          <Upload name="picture" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          name="thumbnail_key"
          label="Thumbnail"
          valuePropName="fileList"
        >
          <Upload name="thumbnail" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item label="Items">
          <Form.List name="items">
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
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
