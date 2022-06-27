import type { ColumnsType, TableProps } from "antd/lib/table";
import { Button, message, Popconfirm, Table } from "antd";
import {
  CheckCircleTwoTone,
  DeleteOutlined,
  FormOutlined,
} from "@ant-design/icons";

interface PreOrdersTableProps {
  onDelete: (id: any) => void;
  data: any;
}

export const PreOrdersTable: React.FC<PreOrdersTableProps> = (
  props: PreOrdersTableProps
) => {
  const { data, onDelete } = props;

  interface DataType {
    active: boolean;
    date: string;
    time: string;
  }

  const cancel = () => {
    return true;
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Active",
      dataIndex: "active",
      render: (active: boolean) =>
        active === true ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : "-",
    },
    {
      title: "Date",
      dataIndex: "date",
      render: (date: string) => (date === "" ? "-" : date),
    },
    {
      title: "Time",
      dataIndex: "time",
      render: (time: string) => (time === "" ? "-" : time),
    },
    {
      render: (record: any) => (
        <div>
          <Button
            style={{ color: "#286efb" }}
            href={`./preorders/${record.id}/edit`}
            icon={<FormOutlined />}
            type="link"
          ></Button>
          <Popconfirm
            title={`Are you sure to delete ${record.id}?`}
            onConfirm={() => {
              onDelete(record);
              message.success("Cliked on Yes");
            }}
            onCancel={cancel}
            okText="Yes"
            cancelText="NO"
          >
            <Button
              icon={<DeleteOutlined />}
              type="link"
              style={{ color: "#FF4141" }}
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
        Pre-Orders
        <Button
          style={{
            fontWeight: "bold",
            float: "right",
            color: "white",
            backgroundColor: "#24CE2A",
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
          }}
          type="link"
          href="/preorders/new"
        >
          New
        </Button>
      </h1>
      <Table
        columns={columns}
        dataSource={data.preOrders.items}
        rowKey={"id"}
        onChange={onChange}
      />
    </div>
  );
};
