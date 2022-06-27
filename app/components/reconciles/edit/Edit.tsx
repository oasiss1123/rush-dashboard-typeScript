import { Button, Form, Input } from "antd";

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
      ReconcileEdit
      <Form {...layout} name="nest-messages">
        <Form.Item
          name={["branches"]}
          label="Branches"
          initialValue={data.name}
        >
          <Input />
        </Form.Item>
        <Form.Item name={["shippingMethod"]} label="Shipping Method">
          <Input />
        </Form.Item>
        <Form.Item name={["date"]} label="Date">
          <Input />
        </Form.Item>

        <Form.Item name={["time"]} label="Time">
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
