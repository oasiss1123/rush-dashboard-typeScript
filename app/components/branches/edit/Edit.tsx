import { Button, Form, Input } from "antd";

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
  };

  console.log(data);

  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 820 }}
    >
      Branch Edit
      <Form {...layout} name="nest-messages" onFinish={onFinish}>
        <Form.Item
          name={["branchUid"]}
          label="Branch Uid"
          initialValue={data.branch_uid}
          // rules={[{ required: true }]}
        >
          <Input disabled />
        </Form.Item>
        <Form.Item
          name={["disabled"]}
          label="Robinhood Pos Provider Id"
          initialValue={data.rbh_pos_provider_id}
          // rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["robinhood_api_key"]}
          label="Robinhood Api Key"
          initialValue={data.rbh_api_key}
        >
          <Input />
        </Form.Item>
        <Form.Item name={["name"]} label="Name" initialValue={data.name}>
          <Input />
        </Form.Item>

        <Form.Item name={["phone"]} label="Phone" initialValue={data.phone}>
          <Input />
        </Form.Item>
        <Form.Item
          name={["address"]}
          label="Address"
          initialValue={data.address}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name={["postCode"]}
          label="Post Code"
          initialValue={data.post_code}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["operating_time"]}
          label="Operating Time"
          initialValue={data.operating_time}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["contact_person"]}
          label="Contact Person"
          initialValue={data.contact_person}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["holiday"]}
          label="Holiday"
          initialValue={data.holiday}
        >
          <Input />
        </Form.Item>
        <Form.Item name={["cover"]} label="Cover">
          <Input />
        </Form.Item>
        <Form.Item
          name={["location"]}
          label="Location"
          initialValue={data.location}
        >
          <Input />
        </Form.Item>

        <Form.Item name={["lat"]} label="Latitude" initialValue={data.lat}>
          <Input />
        </Form.Item>
        <Form.Item name={["lng"]} label="Longitude" initialValue={data.lng}>
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
