import { Button, Form, Input, InputNumber, Table } from "antd";
import type { ColumnsType } from "antd/lib/table";

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};

interface EditProps {
  data: any;
  onEdit: (rec: any) => void;
}
interface DataType {
  current_Qty: string;
  qty: number;
  action: string;
  name: string;
  role: string;
  created_at: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Current Qty",
    dataIndex: "current_qty",
    render: (currentQty: string) => (currentQty === "" ? "-" : currentQty),
  },
  {
    title: "Qty",
    dataIndex: "qty",
    render: (qty: number) => (qty === 0 ? "-" : qty),
  },
  {
    title: "Action",
    dataIndex: "action",
    render: (action: string) => (action === "" ? "-" : action),
  },
  {
    title: "Name",
    dataIndex: "name",
    render: (name: string) => (name === "" ? "-" : name),
  },
  {
    title: "Role",
    dataIndex: "role",
    render: (role: string) => (role === "" ? "-" : role),
  },
  {
    title: "Date",
    dataIndex: "created_at",
    render: (date: string) => (date === "" ? "-" : date),
  },
];

export const Edit: React.FC<EditProps> = (props: EditProps) => {
  const { data, onEdit } = props;
  const onFinish = (values: any) => {
    onEdit(values);
  };

  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 820 }}
    >
      Inventory Edit
      <Form {...layout} name="nest-messages" onFinish={onFinish}>
        <Form.Item
          name={["updateAt"]}
          label="Update At"
          initialValue={data.updated_at}
          // rules={[{ required: true }]}
        >
          <Input disabled />
        </Form.Item>
        <Form.Item name={["sku"]} label="SKU" initialValue={data.sku}>
          <Input />
        </Form.Item>
        <Form.Item name={["name"]} label="Name" initialValue={data.name}>
          <Input disabled />
        </Form.Item>

        <Form.Item
          name={["variantCode"]}
          label="Variant Code"
          initialValue={data.variant_code}
        >
          <Input disabled />
        </Form.Item>
        <Form.Item name={["qty"]} label="Qty">
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          name={["currentRemainQty"]}
          label="Current Remain Qty"
          initialValue={data.remain_qty}
        >
          <Input disabled />
        </Form.Item>
        <Form.Item
          name={["reserveQty"]}
          label="Reserve Qty"
          initialValue={data.reserve_qty}
        >
          <Input disabled />
        </Form.Item>
        <Form.Item
          name={["branchName"]}
          label="Branch Name"
          initialValue={data.branch_name}
        >
          <Input disabled />
        </Form.Item>
        <Form.Item
          name={["log_inventorires"]}
          label="Log Inventories"
          initialValue={data.branch_name}
        >
          <Table
            columns={columns}
            dataSource={data.log_inventories}
            rowKey={"id"}
            pagination={{ pageSize: 50 }}
            scroll={{ y: 240 }}
          ></Table>
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
