import type { ColumnsType, TableProps } from "antd/lib/table";
import React from "react";
import { Button, message, Popconfirm, Table } from "antd";
import { DeleteOutlined, FormOutlined } from "@ant-design/icons";

interface SelectionsTableProps {
  onDelete: (id: number) => void;
  data: any;
}

export const SelectionsTable: React.FC<SelectionsTableProps> = (
  props: SelectionsTableProps
) => {
  const { data, onDelete } = props;

  interface DataType {
    name: string;
    description: string;
    type: string;
    id: number;
  }

  const confirm = (record: any) => {
    onDelete(record.id);
    message.success("Click on Yes");
  };

  const cancel = () => {
    return true;
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      render: (name: string) => (name === "" ? "-" : name),
    },
    {
      title: "Description",
      dataIndex: "description",
      render: (description: string) => (description === "" ? "-" : description),
    },
    {
      title: "Type",
      dataIndex: "type",
      render: (type: string) => (type === "" ? "-" : type),
    },
    {
      title: "ID",
      dataIndex: "id",
      render: (id: number) => (id === 0 ? "-" : id),
    },
    {
      render: (record: any) => (
        <div>
          <Button
            style={{ color: "#286efb" }}
            href={`./selections/${record.id}/edit`}
            icon={<FormOutlined />}
            type="link"
          ></Button>

          <Popconfirm
            title={`Are you sure to delete ${record.name}? `}
            onConfirm={() => confirm(record)}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button
              style={{ color: "#FF4141" }}
              type="link"
              icon={<DeleteOutlined />}
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
  console.log(data);
  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 620 }}
    >
      <h1 style={{ fontSize: "30px" }}>
        Selections
        <Button
          style={{
            fontWeight: "bold",
            color: "white",
            float: "right",
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            backgroundColor: "#24CE2A",
          }}
          type="link"
          href="/selections/new "
        >
          New
        </Button>
      </h1>
      <Table
        columns={columns}
        dataSource={data.selections.items}
        rowKey={"id"}
        onChange={onChange}
      />
    </div>
  );
};
