import { FormOutlined } from "@ant-design/icons";
import type { TableProps } from "antd";
import { Button } from "antd";
import { Table } from "antd";
import type { ColumnsType } from "antd/lib/table";

interface CustomersTableProps {
  data: any;
}

interface DataType {
  id: number;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  dateofbirth: string;
  address: string;
  displayName: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "ID",
    dataIndex: "id",
    render: (id: number) => (id === 0 ? "-" : id),
  },
  {
    title: "First Name",
    dataIndex: "first_name",
    render: (firstName: string) => (firstName === "" ? "-" : firstName),
  },
  {
    title: "Last Name",
    dataIndex: "last_name",
    render: (lastName: string) => (lastName === "" ? "-" : lastName),
  },
  {
    title: "Phone",
    dataIndex: "phone",
    render: (phone: string) => (phone === "" ? "-" : phone),
  },
  {
    title: "Email",
    dataIndex: "email",
    render: (email: string) => (email === "" ? "-" : email),
  },
  {
    title: "Date Of Birth",
    dataIndex: "date_of_birth",
    render: (dateOfBirth: string) => (dateOfBirth === "" ? "-" : dateOfBirth),
  },
  {
    title: "Address",
    dataIndex: "address",
    render: (address: string) => (address === "" ? "-" : address),
  },
  {
    title: "Display Name",
    dataIndex: "display_name",
    render: (displayName: string) => (displayName === "" ? "-" : displayName),
  },
  {
    render: (rec: any) => (
      <Button
        style={{ color: "#286efb" }}
        href={`/customers/${rec.id}/edit`}
        icon={<FormOutlined />}
        type="link"
      ></Button>
    ),
  },
];

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filter,
  sorter,
  extra
) => {};

export const CustomersTable: React.FC<CustomersTableProps> = (
  props: CustomersTableProps
) => {
  const { data } = props;

  console.log(data);

  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 820 }}
    >
      <h1 style={{ fontSize: "30px" }}>
        Customers
        <Button
          style={{
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            fontWeight: "bold",
            backgroundColor: "#24CE2A",
            color: "white",
            float: "right",
          }}
          href="/customers/new"
          type="link"
        >
          New
        </Button>
      </h1>
      <Table
        columns={columns}
        dataSource={data}
        rowKey={"id"}
        onChange={onChange}
      />
    </div>
  );
};
