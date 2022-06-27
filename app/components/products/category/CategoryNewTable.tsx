import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  InputNumber,
  message,
  Select,
  Upload,
} from "antd";

interface CategoryNewTableProps {
  onCreate: (rec: any) => void;
}

export const CategoryNewTable: React.FC<CategoryNewTableProps> = (
  props: CategoryNewTableProps
) => {
  const { onCreate } = props;
  const { Option, OptGroup } = Select;
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };

  const onFinish = (values: any) => {
    console.log(values);
    onCreate(values);
    message.success("Created");
  };

  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 620 }}
    >
      <Form {...layout} name="nest-messages" onFinish={onFinish}>
        <Form.Item name={["name"]} label="Name">
          <Input />
        </Form.Item>
        <Form.Item name={["order"]} label="Order">
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name={["child"]} label="Parent">
          <Select placeholder="select" style={{ width: "100%" }}>
            <Option value="">None</Option>
            <Option value="New Cat">New Cat</Option>
            <Option value="Italian Soda">Italian Soda</Option>
            <Option value="Hot">Hot</Option>
            <Option value="Smoothie">Smoothie</Option>
            <Option value="Soft Drink">Soft Drink</Option>
            <Option value="Iced">Iced</Option>
            <Option value="Frappe">Frappe</Option>
            <Option value="Ice Cream">Ice Cream</Option>
            <OptGroup label="Check">
              <Option value="gg">gg</Option>
            </OptGroup>
          </Select>
        </Form.Item>
        <Form.Item name="photo_key" label="Picture" valuePropName="fileList">
          <Upload name="picture" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          name="thumnail_key"
          label="Thumnail"
          valuePropName="fileList"
        >
          <Upload name="thumnail" action="/upload.do" listType="picture">
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
