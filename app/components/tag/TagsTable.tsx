import { DeleteOutlined, FormOutlined } from "@ant-design/icons";
import { Button, message, Popconfirm } from "antd";
import type { ColumnsType, TableProps } from "antd/lib/table";
import Table from "antd/lib/table";

interface TagsTableProps {
  onDelete: (id: any) => void;
  data: any;
}

export const TagsTable: React.FC<TagsTableProps> = (props: TagsTableProps) => {
  const { data, onDelete } = props;

  interface DataType {
    name: string;
    id: number;
    phone: string;
  }

  const cancel = () => {};

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      render: (name: string) => (name === "" ? "-" : name),
    },
    {
      title: "Order",
      dataIndex: "order",
      render: (order: number) => (order === 0 ? "-" : order),
    },
    {
      title: "Label",
      dataIndex: "label",
      render: (label: string) => (label === "" ? "-" : label),
    },
    {
      title: "ID",
      dataIndex: "id",
      render: (id: number) => (id === 0 ? "-" : id),
    },
    {
      render: (rec: any) => (
        <div>
          <Button
            style={{ color: "#286efb" }}
            href={`/tags/${rec.id}/edit`}
            icon={<FormOutlined />}
            type="link"
          ></Button>
          <Popconfirm
            title={`Are you sure to delete?`}
            onConfirm={() => {
              onDelete(rec);
              message.success("click on Yes");
            }}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button
              style={{ color: "#FF4141" }}
              type="link"
              icon={<DeleteOutlined />}
              href={`/tags/${rec.id}/delete`}
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
      style={{ padding: 24, minHeight: 820 }}
    >
      <h1 style={{ fontSize: "30px" }}>
        Tags
        <Button
          style={{
            float: "right",
            color: "white",
            backgroundColor: "#24CE2A",
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            fontWeight: "bold",
          }}
          type="link"
          href="/tags/new"
        >
          New
        </Button>
      </h1>
      <div style={{ textAlign: "right" }}></div>
      <Table
        columns={columns}
        dataSource={data}
        rowKey={"id"}
        onChange={onChange}
      />
    </div>
  );
};
