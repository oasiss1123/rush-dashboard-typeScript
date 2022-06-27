import {
  MinusCircleOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Space,
  Switch,
  Upload,
} from "antd";

interface SelectionFormProps {
  onCreate: (rec: any) => void;
}

export const SelectionForm: React.FC<SelectionFormProps> = (
  props: SelectionFormProps
) => {
  const { Option } = Select;
  const { onCreate } = props;
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };

  const onFinish = (values: any) => {
    onCreate(values);
    console.log(values);
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
          New Selection
        </h1>
        <></>
      </div>
      <Form {...layout} name="nest-messages" onFinish={onFinish}>
        <Form.Item name={["name"]} label="Name">
          <Input />
        </Form.Item>
        <Form.Item name={["slug_name"]} label="Slug">
          <Input />
        </Form.Item>
        <Form.Item name={["description"]} label="Description">
          <Input.TextArea autoSize={{ minRows: 5, maxRows: 6 }} />
        </Form.Item>
        <Form.Item name={["type"]} label="Type" initialValue="option">
          <Select defaultValue="option">
            <Option value="option">option</Option>
            <Option value="add-on">add-on</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Items">
          <Form.List name="selections">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space key={key} align="baseline">
                    <Form.Item
                      {...restField}
                      name={[name, "active"]}
                      initialValue={false}
                    >
                      <Switch defaultChecked={false} />
                    </Form.Item>

                    <Form.Item
                      {...restField}
                      name={[name, "name"]}
                      label="Name"
                    >
                      <Input placeholder="name" />
                    </Form.Item>

                    <Form.Item
                      {...restField}
                      name={[name, "price"]}
                      label="Price"
                    >
                      <InputNumber value={0} />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "remark"]}
                      label="Remark"
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
