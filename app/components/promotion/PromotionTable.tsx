import { FormOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import type { ColumnsType, TableProps } from "antd/lib/table";

interface PromotionsTableProps {
  data: any;
}

interface DataType {
  key: React.Key;
  coupon_code: string;
  coupon_type: number;
  min_spend: number;
  discount_type: string;
  discount_amount: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Coupon Code",
    dataIndex: "coupon_code",
    render: (couponCode: string) => (couponCode === "" ? "-" : couponCode),
  },
  {
    title: "Coupon Type",
    dataIndex: "coupon_type",
    render: (couponType: string) => (couponType === "" ? "-" : couponType),
  },
  {
    title: "Min Spend",
    dataIndex: "min_spend",
    render: (minSpend: number) => (minSpend === 0 ? "-" : minSpend),
  },
  {
    title: "Discount Type",
    dataIndex: "discount_type",
    render: (discountType: string) =>
      discountType === "" ? "-" : discountType,
  },
  {
    title: "Discount Amount",
    dataIndex: "discount_amount",
    render: (discountAmount: number) =>
      discountAmount === 0 ? "-" : discountAmount,
  },
  {
    render: (record: any) => (
      <Button
        style={{ color: "#286efb" }}
        href={`./promotion/${record.id}/edit`}
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

export const PromotionTable: React.FC<PromotionsTableProps> = (
  props: PromotionsTableProps
) => {
  const { data } = props;
  console.log(data);

  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 620 }}
    >
      <h1 style={{ fontSize: "30px" }}>
        Promotion
        <Button
          style={{
            color: "white",
            backgroundColor: "#24CE2A",
            float: "right",
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            fontWeight: "bold",
          }}
          type="link"
          href="/promotion/new"
        >
          New
        </Button>
      </h1>
      <Table
        columns={columns}
        dataSource={data.promotions.items}
        rowKey={"id"}
        onChange={onChange}
      />
    </div>
  );
};
