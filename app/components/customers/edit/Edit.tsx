import { Button, DatePicker, Form, Input, Select } from "antd";
import { useState } from "react";

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 10 },
};

interface EditProps {
  onEdit: (rec: any) => void;
  data: any;
  tags: any;
}

export const Edit: React.FC<EditProps> = (props: EditProps) => {
  const { data, onEdit, tags } = props;

  const OPTIONS = tags;

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const filteredOptions = OPTIONS.filter(
    (o: any) => !selectedItems.includes(o)
  );

  console.log("data", data);
  console.log(tags);
  const onFinish = (values: any) => {
    // onEdit(values);
    console.log(values);
  };

  const { Option } = Select;
  const dateFormat = "YYYY/MM/DD";
  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 820 }}
    >
      Branch Edit
      <Form {...layout} name="nest-messages" onFinish={onFinish}>
        <Form.Item
          name={["first_name"]}
          label="First Name"
          initialValue={data.first_name}

          // rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["last_name"]}
          label="Last Name"
          initialValue={data.last_name}

          // rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={["sub"]} label="Sub" initialValue={data.sub}>
          <Input disabled />
        </Form.Item>
        <Form.Item name={["phone"]} label="Phone" initialValue={data.phone}>
          <Input />
        </Form.Item>

        <Form.Item name={["email"]} label="Email" initialValue={data.email}>
          <Input />
        </Form.Item>
        <Form.Item name={["date_of_birth"]} label="Date Of Birth">
          <DatePicker
            name={"date_of_birth"}
            // defaultValue={moment("2022/02/01", dateFormat)}
            format={dateFormat}
            style={{ width: "100%" }}
            picker={"date"}
          />
        </Form.Item>
        <Form.Item
          name={["address"]}
          label="Address"
          initialValue={data.address}
        >
          <Input />
        </Form.Item>
        <Form.Item name={["note"]} label="Note" initialValue={data.note}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name={["shipping_address"]}
          label="Shipping Address"
          initialValue={data.shipping_address}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["shipping_zipcode"]}
          label="Shipping Zipcode"
          initialValue={data.shipping_zipcode}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["billing_name"]}
          label="Billing Name"
          initialValue={data.billing_name}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["billing_tax"]}
          label="Billing Tax"
          initialValue={data.billing_tax}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["billing_address"]}
          label="Billing Address"
          initialValue={data.billing_address}
        >
          <Input />
        </Form.Item>
        <Form.Item name={["gender"]} label="Gender" initialValue={data.gender}>
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
        <Form.Item name={["tag"]} label="Tag" initialValue={data.tag}>
          <Select
            mode="multiple"
            value={selectedItems}
            onChange={setSelectedItems}
            style={{ width: "100%" }}
          >
            {filteredOptions.map((item: any) => (
              <Select.Option key={item} value={item.id}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name={["display_name"]}
          label="Display Name"
          initialValue={data.display_name}
        >
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
