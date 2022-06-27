import { FormOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import type { ColumnsType, TableProps } from "antd/lib/table";

interface InventoriesTableProps {
  data: any;
}

interface DataType {
  updated_at: string;
  sku: string;
  name: string;
  variant_code: string;
  remain_qty: number;
  branch_name: string;
  sell_outstock: boolean;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Update At",
    dataIndex: "updated_at",
    render: (updatedAt: string) => (updatedAt === "" ? "-" : updatedAt),
  },
  {
    title: "SKU",
    dataIndex: "sku",
    render: (sku: string) => (sku === "" ? "-" : sku),
  },
  {
    title: "Name",
    dataIndex: "name",
    render: (name: string) => (name === "" ? "-" : name),
  },
  {
    title: "Variant Code",
    dataIndex: "variant_code",
    render: (variantCode: string) => (variantCode === "" ? "-" : variantCode),
  },
  {
    title: "Current Remain Qty",
    dataIndex: "remain_qty",
    sorter: (a, b) => a.remain_qty - b.remain_qty,
    render: (remainQty: number) => (remainQty === 0 ? "-" : remainQty),
  },
  {
    title: "Branch Name",
    dataIndex: "branch_name",
    render: (branchName: string) => (branchName === "" ? "-" : branchName),
  },
  {
    title: "Sell Outstock",
    dataIndex: "sell_outstock",
    render: (sellOutstock: boolean) => (sellOutstock === false ? "-" : "1"),
  },
  {
    render: (record: any) => (
      <Button
        style={{ color: "#286efb" }}
        href={`./inventories/${record.id}/edit`}
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

export const InventoriesTable: React.FC<InventoriesTableProps> = (
  props: InventoriesTableProps
) => {
  const { data } = props;
  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 620 }}
    >
      <h1 style={{ fontSize: "30px" }}>Inventories</h1>

      <Table
        columns={columns}
        dataSource={data.inventories.items}
        rowKey={"id"}
        onChange={onChange}
      />
    </div>
  );
};
