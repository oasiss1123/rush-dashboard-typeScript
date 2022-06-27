import { FormOutlined } from "@ant-design/icons";
import { Button } from "antd";
import type { ColumnsType, TableProps } from "antd/lib/table";
import Table from "antd/lib/table";
interface UsersTableProps {
  data: any;
}

interface DataType {
  id: number;
  name: string;
  phone: number;
  email: string;
  branch: string;
  role: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "ID",
    dataIndex: "id",
    render: (id: number) => (id === 0 ? "-" : id),
  },
  {
    title: "Name",
    dataIndex: "name",
    render: (name: string) => (name === "" ? "-" : name),
  },
  {
    title: "phone",
    dataIndex: "phone",
    render: (phone: string) => (phone === "" ? "-" : phone),
  },
  {
    title: "Email",
    dataIndex: "email",
    render: (email: string) => (email === "" ? "-" : email),
  },
  {
    title: "Branch",
    dataIndex: "branch_name",
    render: (branchName: string) => (branchName === "" ? "-" : branchName),
  },
  {
    title: "Role",
    dataIndex: "role_name",
    render: (roleName: string) => (roleName === "" ? "-" : roleName),
  },
  {
    render: (rec: any) => (
      <Button
        style={{ color: "#286efb" }}
        href={`/users/${rec.id}/edit`}
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

export const UsersTable: React.FC<UsersTableProps> = (
  props: UsersTableProps
) => {
  const { data } = props;
  console.log(data);

  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 820 }}
    >
      <h1 style={{ fontSize: "30px" }}>
        Users
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
          href="/users/new"
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
