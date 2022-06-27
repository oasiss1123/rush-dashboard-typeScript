import { Button, Form, Input, InputNumber, Switch } from "antd";

interface BranchesFormProps {
  onCreate: (rec: any) => void;
}

export const BranchesForm: React.FC<BranchesFormProps> = (
  props: BranchesFormProps
) => {
  const { onCreate } = props;

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };

  const onFinish = (values: any) => {
    onCreate(values);
    console.log(values);
  };
  // branch
  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 820 }}
    >
      <Form {...layout} name="nest-messages" onFinish={onFinish}>
        <Form.Item
          name={["active_brach"]}
          label="Active Branch"
          initialValue={false}
        >
          <Switch
            defaultChecked={false}
            style={{ backgroundColor: "#57D953" }}
          />
        </Form.Item>

        <Form.Item
          name={["main_brach"]}
          label="Main Branch"
          initialValue={false}
        >
          <Switch
            defaultChecked={false}
            style={{ backgroundColor: "#57D953" }}
          />
        </Form.Item>

        <Form.Item name={["branch_uid"]} label="Branch Uid">
          <Input disabled />
        </Form.Item>
        <Form.Item
          name={["rbh_pos_provider_id"]}
          label="Robinhood Pos Provider Id"
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name={["rbh_api_key"]} label="Robinhood API Key">
          <Input />
        </Form.Item>
        <Form.Item name={["name"]} label="Name">
          <Input />
        </Form.Item>
        <Form.Item name={["phone"]} label="Phone">
          <Input />
        </Form.Item>
        <Form.Item name={["address"]} label="Address">
          <Input.TextArea />
        </Form.Item>
        <Form.Item name={["post_code"]} label="Post Code">
          <Input />
        </Form.Item>
        <Form.Item name={["operationg_time"]} label="Operationg Time">
          <Input />
        </Form.Item>
        <Form.Item name={["contact_person"]} label="Contact Person">
          <Input />
        </Form.Item>
        <Form.Item name={["holiday"]} label="Holiday">
          <Input />
        </Form.Item>
        <Form.Item name={["cover"]} label="Cover">
          <Input />
        </Form.Item>
        <Form.Item name={["location"]} label="Location">
          <Input />
        </Form.Item>
        <Form.Item
          name={["notify_online_ordder_access_token"]}
          label="Notify Online Order Access Token"
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item name={["lat"]} label="Latitude">
          <Input />
        </Form.Item>
        <Form.Item name={["lng"]} label="longitude">
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
