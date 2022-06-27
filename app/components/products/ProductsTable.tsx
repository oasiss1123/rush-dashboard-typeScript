import type { ColumnsType, TableProps } from "antd/lib/table";
import { Button, message, Popconfirm, Table } from "antd";
import { DeleteOutlined, FormOutlined } from "@ant-design/icons";

interface ProductsTableProps {
  onDelete: (rec: any) => void;
  data: any;
}

export const ProducsTable: React.FC<ProductsTableProps> = (
  props: ProductsTableProps
) => {
  const { data, onDelete } = props;

  interface DataType {
    id: number;
    active: boolean;
    name: string;
    order: number;
    branch_name: string;
    category: string;
    sku: string;
    price: number;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
      render: (id: number) => (id === 0 ? "-" : id),
    },
    {
      title: "Active",
      dataIndex: "active",
      render: (active: boolean) => (active === true ? "1" : "-"),
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (name: string) => (name === "" ? "-" : name),
    },
    {
      title: "Order",
      dataIndex: "order",
      sorter: (a, b) => a.order - b.order,
      render: (order: number) => (order === 0 ? "-" : order),
    },
    {
      title: "Branches",
      dataIndex: "branch_name",
      render: (branchName: string) => (branchName === "" ? "-" : branchName),
    },
    {
      title: "Categories",
      dataIndex: "category",
      render: (category: string) => (category === "" ? "-" : category),
    },
    {
      title: "Selections",
      dataIndex: "sku",
      render: (sku: string) => (sku === "" ? "-" : sku),
    },
    {
      title: "Regular Price",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
      render: (price: number) => (price === 0 ? "-" : price),
    },
    {
      render: (record: any) => (
        <div>
          <Button
            style={{ color: "#286efb", textAlign: "center" }}
            href={`./products/${record.id}/edit`}
            icon={<FormOutlined />}
            type="link"
          ></Button>
          <Popconfirm
            title={`Are you sure to delete ${record.name}`}
            okText="Yes"
            cancelText="No"
            onConfirm={() => {
              onDelete(record);
              message.success("Clicked on Yes");
            }}
          >
            <Button
              href={`/products/${record.id}/delete`}
              style={{ color: "#FF4141", textAlign: "right" }}
              icon={<DeleteOutlined />}
              type="link"
            ></Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {};

  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 700 }}
    >
      <h1 style={{ fontSize: "30px" }}>
        Products{" "}
        <Button
          style={{
            fontWeight: "bold",
            float: "right",
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            color: "white",
            backgroundColor: "#24CE2A",
          }}
          type="link"
          href="/products/new"
        >
          New
        </Button>
      </h1>
      <Table
        columns={columns}
        dataSource={data.products.items}
        rowKey={"id"}
        onChange={onChange}
      />
    </div>
  );
};
