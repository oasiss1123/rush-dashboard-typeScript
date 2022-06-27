import { DeleteOutlined, FormOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import type { ColumnsType, TableProps } from "antd/lib/table";
import React from "react";
import { message, Popconfirm } from "antd";

interface AttributesTableProps {
  onDelete: (id: number) => void;
  data: any;
}

export const AttributesTable: React.FC<AttributesTableProps> = (
  props: AttributesTableProps
) => {
  const { data, onDelete } = props;

  interface DataType {
    name: string;
    order: number;
    id: number;
  }

  const confirm = (record: any) => {
    console.log(record);
    onDelete(record.id);
    message.success("Click on Yes");
    return 0;
  };

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {};

  const cancel = () => {
    console.log();
    // message.error("Click on No");
    return true;
  };

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
      title: "ID",
      dataIndex: "id",

      render: (id: number) => (id === 0 ? "-" : id),
    },
    {
      render: (record: any) => (
        <div>
          <Button
            style={{ color: "#286efb" }}
            href={`./attributes/${record.id}/edit`}
            icon={<FormOutlined />}
            type="link"
          ></Button>
          <Popconfirm
            style={{ color: "#FF4141" }}
            icon={<DeleteOutlined />}
            title={`Are you sure to delete ${record.name} ?`}
            onConfirm={() => confirm(record)}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
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

  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 620 }}
    >
      <h1 style={{ fontSize: "30px" }}>
        Attributes
        <Button
          style={{
            fontWeight: "bold",
            float: "right",
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            backgroundColor: "#24CE2A",
            color: "white",
          }}
          href="/attributes/new"
          type="link"
        >
          New
        </Button>
      </h1>
      <Table
        columns={columns}
        dataSource={data.attributes.items}
        rowKey="id"
        onChange={onChange}
      />
    </div>
  );
};
