import { FormOutlined } from "@ant-design/icons";
import { Button } from "antd";
import type { ColumnsType, TableProps } from "antd/lib/table";
import Table from "antd/lib/table";

interface ReconcilesTableProps {
  data: any;
}

interface DataType {
  date: string;
  name: string;
  branch: string;
  initial_fund: number;
  closed_fund: number;
  gain: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Date",
    dataIndex: "created_at",
    render: (date: string) => (date === "" ? "-" : date),
  },
  {
    title: "Name",
    dataIndex: "name",
    render: (name: string) => (name === "" ? "-" : name),
  },
  {
    title: "Branch",
    dataIndex: "branch_name",
    render: (branchName: string) => (branchName === "" ? "-" : branchName),
  },
  {
    title: "Initial Fund",
    dataIndex: "initial_fund",
    render: (initialFund: number) => (initialFund === 0 ? "-" : initialFund),
  },
  {
    title: "Closed Fund",
    dataIndex: "closed_fund",
    render: (closedFund: number) => (closedFund === 0 ? "-" : closedFund),
  },
  {
    title: "Gain",
    dataIndex: "gain",
    render: (gain: number) => (gain === 0 ? "-" : gain),
  },
  {
    render: (rec: any) => (
      <Button
        style={{ color: "#286efb" }}
        href={`/reconciles/${rec.id}/edit`}
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

export const ReconcilesTable: React.FC<ReconcilesTableProps> = (
  props: ReconcilesTableProps
) => {
  const { data } = props;
  console.log(data);
  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 820 }}
    >
      <h1 style={{ fontSize: "30px" }}>Reconciles</h1>

      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
};
