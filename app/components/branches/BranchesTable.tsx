import { CheckCircleTwoTone, FormOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import type { ColumnsType, TableProps } from "antd/lib/table";

interface BranchesTableProps {
  data: any;
}

interface DataType {
  active: boolean;
  main_branch: boolean;
  name: string;
  phone: string;
  operating_time: string;
  contact_person: string;
  holiday: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Active Branch",
    dataIndex: "active",
    // sorter: (a, b) => a.active - b.active.length,
    render: (active: boolean, record: any) =>
      active === true ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : "-",
  },
  {
    title: "Main Branch",
    dataIndex: "main_branch",
    // sorter: (a, b) => a.mainBranch.length - b.mainBranch.length,
    render: (active: boolean) =>
      active === true ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : "-",
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
    dataIndex: "operating_time",
  },
  {
    title: "Contact Person",
    dataIndex: "contact_person",
  },
  {
    title: "Holiday",
    dataIndex: "holiday",
    render: (holiday: string, record: any) => (holiday === "" ? "-" : holiday),
  },
  {
    dataIndex: "action",
    render: (holiday: string, recordd: any) => (
      <Button
        style={{ color: "#286efb" }}
        icon={<FormOutlined />}
        type="link"
        href={`./branches/${recordd.id}/edit`}
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

export const BrachesTable: React.FC<BranchesTableProps> = (
  props: BranchesTableProps
) => {
  const { data } = props;
  console.log(data);

  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 620 }}
    >
      <h1 style={{ fontSize: "30px" }}>
        Branches
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
          href="/branches/new"
        >
          New
        </Button>
      </h1>
      <Table
        columns={columns}
        dataSource={data.branches.items}
        rowKey={"id"}
        onChange={onChange}
      />
    </div>
  );
};
