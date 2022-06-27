import { Button, Form, Input } from "antd";
import { Switch } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

interface EditProps {
  data: any;
}

export const Edit: React.FC<EditProps> = (props: EditProps) => {
  const { data } = props;

  return (
    <div>
      Order Edit
      <Form {...layout} name="nest-messages">
        <Switch
          defaultChecked
          // onClick={() => (data.active === true ? false : true)}
          style={{ color: "lightgreen", backgroundColor: "mediumspringgreen" }}
        />

        <Switch defaultChecked />
        <Form.Item
          name={["rbh_pos_provider_id"]}
          label="Robinhood Pos Provider Id"
          initialValue={data.order_ref}
          // rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={["robinhood_api_key"]} label="Robinhood Api Key">
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
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
