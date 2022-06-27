import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/lib/table";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Age",
    dataIndex: "age",

    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
    sorter: (a, b) => a.address.length - b.address.length,
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

export const AnalyticsTable: React.FC = () => {
  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 700 }}
    >
      <h1 style={{ fontSize: "30px" }}>Analytics</h1>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
};
