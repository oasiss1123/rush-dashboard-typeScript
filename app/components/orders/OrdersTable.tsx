import { FormOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import type { ColumnsType, TableProps } from "antd/lib/table";

interface OrdersTableProps {
  data: any;
}

interface DataType {
  order_no: string;
  order_ref: string;
  name: string;
  phone: string;
  total_without_delivery_fee: number;
  delivery_fee: number;
  payment_status: string;
  payment_method: string;
  status: string;
  shipping_method: string;
  shipping_status: string;
  type: string;
  channel: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Order No",
    dataIndex: "order_no",
  },
  {
    title: "Order Ref",
    dataIndex: "order_ref",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
    render: (name: string) => (name === "" ? "-" : name),
  },
  {
    title: "Phone",
    dataIndex: "phone",
    render: (phone: string) => (phone === "" ? "-" : phone),
  },
  {
    title: "Amount",
    dataIndex: "total_without_delivery_fee",
    render: (total: number) => (total === 0 ? "-" : total),
  },
  {
    title: "Delivery Fee",
    dataIndex: "delivery_fee",
    render: (deliveryFee: number) => (deliveryFee === 0 ? "-" : deliveryFee),
  },
  {
    title: "Pay Status",
    dataIndex: "payment_status",
    render: (paymentStatus: string) =>
      paymentStatus === "" ? "-" : paymentStatus,
  },
  {
    title: "Payment Method",
    dataIndex: "payment_method",
    render: (paymentMethod: string) =>
      paymentMethod === "" ? "-" : paymentMethod,
  },
  {
    title: "Status",
    dataIndex: "status",
    sorter: (a, b) => a.status.length - b.status.length,
    render: (status: string) => (status === "" ? "-" : status),
  },
  {
    title: "Ship Method",
    dataIndex: "shipping_method",
    render: (shippingMethod: string) =>
      shippingMethod === "" ? "-" : shippingMethod,
  },
  {
    title: "Ship Status",
    dataIndex: "shipping_status",
    render: (shippingStatus: string) =>
      shippingStatus === "" ? "-" : shippingStatus,
  },
  {
    title: "Type",
    dataIndex: "type",
    sorter: (a, b) => a.type.length - b.type.length,
    render: (type: string) => (type === "" ? "-" : type),
  },
  {
    title: "Channel",
    dataIndex: "channel",
    sorter: (a, b) => a.channel.length - b.channel.length,
    render: (channel: string) => (channel === "" ? "-" : channel),
  },
  {
    title: "Branches",
    dataIndex: "branch_name",
    sorter: (a, b) => a.channel.length - b.channel.length,
    render: (channel: string) => (channel === "" ? "-" : channel),
  },
  {
    title: "Ship Status",
    dataIndex: "shipping_status",
    sorter: (a, b) => a.channel.length - b.channel.length,
    render: (channel: string) => (channel === "" ? "-" : channel),
  },
  {
    title: "Date",
    dataIndex: "date",
    sorter: (a, b) => a.channel.length - b.channel.length,
    render: (channel: string) => (channel === "" ? "-" : channel),
  },
  {
    title: "Total",
    dataIndex: "total",
    sorter: (a, b) => a.channel.length - b.channel.length,
    render: (channel: string) => (channel === "" ? "-" : channel),
  },
  {
    title: "Grand Total",
    dataIndex: "rounded_total",
    sorter: (a, b) => a.channel.length - b.channel.length,
    render: (channel: string) => (channel === "" ? "-" : channel),
  },
  {
    render: (record: any) => (
      <Button
        style={{ color: "#286efb" }}
        href={`./orders/${record.id}/edit`}
        icon={<FormOutlined />}
        type="link"
      ></Button>
    ),
  },
];

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {};

export const OrdersTable: React.FC<OrdersTableProps> = (
  props: OrdersTableProps
) => {
  const { data } = props;

  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 620 }}
    >
      <h1 style={{ fontSize: "30px" }}>Orders</h1>
      <p>total: {data.orders.items.length} orders</p>

      <Table
        columns={columns}
        dataSource={data.orders.items}
        rowKey={"id"}
        onChange={onChange}
      />
    </div>
  );
};
