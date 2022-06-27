import {
  MinusCircleOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  Affix,
  Button,
  Form,
  Input,
  InputNumber,
  message,
  Select,
  Space,
  Switch,
  Tree,
  Upload,
} from "antd";
import { DataNode } from "antd/lib/tree";
import React from "react";
import { useState } from "react";

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};

interface EditProps {
  onEdit: (rec: any) => void;
  data: any;
  branches: any;
  tags: any;
  categories: any;
  attributes: any;
}

export const Edit: React.FC<EditProps> = (props: EditProps) => {
  const [bottom, setBottom] = useState(10);
  const onFinish = (values: any) => {
    // onEdit(values);
    console.log(values);
    message.success("Seccess");
  };
  const { data, onEdit, branches, tags, categories, attributes } = props;

  const BRANCHES = branches;
  const TAGS = tags;
  const { Option } = Select;

  console.log(data);
  const [selectedItems1, setSelectedItems1] = useState<string[]>([]);
  const [selectedItems2, setSelectedItems2] = useState<string[]>([]);
  const [node, setNode] = useState([]);
  const filteredOptions1 = BRANCHES.filter(
    (o: any) => !selectedItems1.includes(o)
  );

  const filteredOptions2 = TAGS.filter((o: any) => !selectedItems2.includes(o));

  const treeData: DataNode[] = categories.map((item: any) => ({
    title: item.name,
    key: item.id,
  }));

  React.useEffect(() => {
    const newCategories = [] as any;
    categories.map((level1: any, index: number) => {
      newCategories.push({
        title: level1.name,
        key: level1.id,
      });

      if (level1.child && level1.child.length) {
        newCategories[index]["children"] = [];
        level1.child.map((level2: any, index2: number) => {
          newCategories[index].children.push({
            title: level2.name,
            key: level2.id,
          });

          if (level2.child && level2.child.length) {
            newCategories[index]["children"][index2]["children"] = [];
            level2.child.map((level3: any) => {
              newCategories[index]["children"][index2]["children"].push({
                title: level3.name,
                key: level3.id,
              });
            });
          }
        });
      }
    });
    console.log("node", newCategories);
    setNode(newCategories);
  }, []);

  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 820 }}
    >
      Product Edit
      <Form {...layout} name="nest-messages" onFinish={onFinish}>
        <Form.Item name={["active"]} label="Active" initialValue={data.active}>
          <Switch
            defaultChecked={data.active}
            style={{ backgroundColor: "#57D953" }}
          />
        </Form.Item>
        <Form.Item
          name={["include_ivt"]}
          label="Include Inventory"
          initialValue={data.include_ivt}
        >
          <Switch
            defaultChecked={data.include_ivt}
            style={{ backgroundColor: "#57D953" }}
          />
        </Form.Item>

        <Form.Item
          name={["sell_on_preoder"]}
          label="Sell On Pre-Order Only"
          initialValue={data.sell_on_preorder}
        >
          <Switch
            defaultChecked={data.sell_on_preoder}
            style={{ backgroundColor: "#57D953" }}
          />
        </Form.Item>
        <Form.Item
          name={["taxable"]}
          label="Taxable"
          initialValue={data.taxable}
        >
          <Switch
            defaultChecked={data.taxable}
            style={{ backgroundColor: "#57D953" }}
          />
        </Form.Item>

        <Form.Item name={["name"]} label="Name" initialValue={data.name}>
          <Input />
        </Form.Item>

        <Form.Item
          name={["ch_line"]}
          label="Online (LIFF)"
          initialValue={data.ch_line}
        >
          <Switch
            defaultChecked={data.ch_line}
            style={{ backgroundColor: "#57D953" }}
          />
        </Form.Item>
        <Form.Item name={["ch_pos"]} label="POS" initialValue={data.ch_pos}>
          <Switch
            defaultChecked={data.ch_pos}
            style={{ backgroundColor: "#57D953" }}
          />
        </Form.Item>
        <Form.Item
          name={["ch_preorder"]}
          label="Preorder"
          initialValue={data.ch_preorder}
        >
          <Switch
            defaultChecked={data.ch_preorder}
            style={{ backgroundColor: "#57D953" }}
          />
        </Form.Item>
        <Form.Item name={["ch_wc"]} label="WC" initialValue={data.ch_wc}>
          <Switch
            defaultChecked={data.ch_wc}
            style={{ backgroundColor: "#57D953" }}
          />
        </Form.Item>

        <Form.Item name={["order"]} label="Order" initialValue={data.order}>
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item name="photo_key" label="Photo" valuePropName="fileList">
          <Upload name="photo_key" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          name="thumbnail_key"
          label="Thumbnail"
          valuePropName="fileList"
        >
          <Upload name="thumbnail_key" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          name="custom_photo_key"
          label="Custom Photo"
          valuePropName="fileList"
        >
          <Upload
            name="custom_photo_key"
            action="/upload.do"
            listType="picture"
          >
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          name={["branch_id"]}
          label="Branches"
          initialValue={data.branch_id}
        >
          <Select
            mode="multiple"
            value={selectedItems1}
            onChange={setSelectedItems1}
            style={{ width: "100%" }}
          >
            {filteredOptions1.map((item: any) => (
              <Select.Option key={item.id} value={item.id}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name={["category"]} label="Categories">
          <Tree checkable treeData={node} />
        </Form.Item>

        <Form.Item name={["tag"]} label="Tags">
          <Select
            mode="multiple"
            value={selectedItems1}
            onChange={setSelectedItems1}
            style={{ width: "100%" }}
          >
            {filteredOptions1.map((item: any) => (
              <Select.Option key={item} value={item.id}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name={["selection"]} label="Seletions">
          <Form.List name="selection">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    style={{ display: "flex", marginBottom: 8 }}
                    align="baseline"
                  >
                    <Form.Item
                      {...restField}
                      name={[name, "first"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}
                    >
                      <Input placeholder="First Name" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "last"]}
                      rules={[{ required: true, message: "Missing last name" }]}
                    >
                      <Input placeholder="Last Name" />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button type="dashed" onClick={() => add()} block>
                    Add field
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form.Item>

        <Form.Item label="Attributes">
          <Form.List name="attribute" initialValue={data.attribute}>
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    style={{ display: "flex", marginBottom: 8 }}
                    align="baseline"
                  >
                    <Form.Item
                      {...restField}
                      name={[name, "attribute"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}
                    >
                      <Select style={{ width: "100%" }}>
                        {attributes.map((item: any) => (
                          <Option key={item} value={item.id}>
                            {item.name}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>

                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button type="dashed" onClick={() => add()} block>
                    Add field
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form.Item>

        <Form.Item
          name={["price"]}
          label="Regular Price"
          initialValue={data.price}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name={["sale_price"]} label="Sale Price">
          <Input />
        </Form.Item>
        <Form.Item name={["description"]} label="Description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item name={["max_purchase"]} label="Max Purchase">
          <Input />
        </Form.Item>
        <Form.Item
          name={["low_stock_notification"]}
          label="Low Stock Notification"
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Affix offsetBottom={bottom} style={{ float: "right" }}>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Affix>
        </Form.Item>
      </Form>
    </div>
  );
};
