import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/lib/table";

interface DataType {
  key: React.Key;
  activeBranch: string;
  mainBranch: string;
  name: string;
  phone: string;
  operatingTime: string;
  contactPerson: string;
  holiday: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Active Branch",
    dataIndex: "activeBranch",
    sorter: (a, b) => a.activeBranch.length - b.activeBranch.length,
  },
  {
    title: "Main Branch",
    dataIndex: "mainBranch",
    sorter: (a, b) => a.mainBranch.length - b.mainBranch.length,
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Phone",
    dataIndex: "phone",
  },
  {
    title: "Operating Time",
    dataIndex: "operatingTime",
  },
  {
    title: "Contact Person",
    dataIndex: "contactPerson",
  },
  {
    title: "Holiday",
    dataIndex: "holiday",
  },
];

const data = [
  {
    key: "1",
    activeBranch: "-",
    mainBranch: "-",
    name: "New York",
    phone: "0152663254",
    operatingTime: "x",
    contactPerson: "x",
    holiday: "-",
  },
  {
    key: "2",
    activeBranch: "-",
    mainBranch: "-",
    name: "Siam",
    phone: "0856747898",
    operatingTime: "8.00-21.00",
    contactPerson: "Test",
    holiday: "-",
  },
  {
    key: "3",
    activeBranch: "-",
    mainBranch: "-",
    name: "CNX",
    phone: "0000000000",
    operatingTime: "00.00-00.00",
    contactPerson: "x",
    holiday: "-",
  },
  {
    key: "4",
    activeBranch: "-",
    mainBranch: "-",
    name: "Bangkok",
    phone: "00000000",
    operatingTime: "x",
    contactPerson: "x",
    holiday: "-",
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

export const CategoryTable: React.FC = () => {
  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 620 }}
    >
      <h1 style={{ fontSize: "30px" }}>Categories Sold</h1>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
};
