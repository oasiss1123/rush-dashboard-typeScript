import { UploadOutlined } from "@ant-design/icons";
import { Affix, Button, DatePicker, Form, Input, Select, Upload } from "antd";
import { useState } from "react";

interface CustomerFormProps {
  onCreate: (rec: any) => void;
  tags: any;
}

export const CustomersForm: React.FC<CustomerFormProps> = (
  props: CustomerFormProps
) => {
  const { onCreate, tags } = props;

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };

  const onFinish = (values: any) => {
    // onCreate(values);
    console.log(values);
  };

  const { Option } = Select;

  const [bottom, setBottom] = useState(10);

  const TAGS = tags;

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const tagsOption = TAGS.filter((o: any) => !selectedItems.includes(o));

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
        <Form.Item name={["first_name"]} label="First Name">
          <Input />
        </Form.Item>
        <Form.Item name={["last_name"]} label="Last Name">
          <Input />
        </Form.Item>
        <Form.Item name={["sub"]} label="Sub">
          <Input disabled />
        </Form.Item>
        <Form.Item name={["phone"]} label="Phone">
          <Input />
        </Form.Item>
        <Form.Item name={["email"]} label="Email">
          <Input />
        </Form.Item>
        <Form.Item name={["date_of_birth"]} label="Date Of Birth">
          <DatePicker placeholder="Date" style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name={["address"]} label="Address">
          <Input />
        </Form.Item>
        <Form.Item name={["note"]} label="Note">
          <Input.TextArea autoSize={{ minRows: 5, maxRows: 6 }} />
        </Form.Item>
        <Form.Item name={["shipping_address"]} label="Shipping Address">
          <Input />
        </Form.Item>
        <Form.Item name={["shipping_zipcode"]} label="Shipping Zipcode">
          <Input />
        </Form.Item>
        <Form.Item name={["billing_name"]} label="Billing Name ">
          <Input />
        </Form.Item>
        <Form.Item name={["billing_tax"]} label="Billing Tax">
          <Input />
        </Form.Item>
        <Form.Item name={["billing_address"]} label="Billing Address">
          <Input />
        </Form.Item>
        <Form.Item
          name={["billing_branch_number"]}
          label="Billing Branch Number"
        >
          <Input />
        </Form.Item>

        <Form.Item name={["gender"]} label="Gender">
          <Select style={{ width: "100%" }} placeholder="Select">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="bigender">Bigender</Option>
            <Option value="androgyne">Androgyne</Option>
            <Option value="neutrois">Neutrois</Option>
            <Option value="genderless">Genderless</Option>
            <Option value="intergender">Intergender</Option>
            <Option value="demiboy">Demiboy</Option>
            <Option value="demigirl">Demigirl</Option>
            <Option value="third gender">Third Gender</Option>
            <Option value="genderqueer">Genderqueer</Option>
            <Option value="pangender">Pangender</Option>
            <Option value="epicene">Epicene</Option>
            <Option value="genderfluid">Genderfluid</Option>
            <Option value="transgender">Transgender</Option>
          </Select>
        </Form.Item>
        <Form.Item name={["tags"]} label="Tags">
          <Select
            mode="multiple"
            placeholder="Inserted are removed"
            value={selectedItems}
            onChange={setSelectedItems}
            style={{ width: "100%" }}
          >
            {tagsOption.map((item: any) => (
              <Select.Option key={item} value={item.id}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name="upload" label="Picture" valuePropName="fileList">
          <Upload name="picture" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item name={["display_name"]} label="Display Name">
          <Input disabled />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Affix offsetBottom={bottom} style={{ float: "right" }}>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Affix>
        </Form.Item>
      </Form>
    </div>
  );
};
