import { MinusCircleOutlined, UploadOutlined } from "@ant-design/icons";
import {
  Affix,
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Space,
  Switch,
  Tree,
  Upload,
} from "antd";

import React from "react";
import { useState } from "react";

interface ProductFormProps {
  branches: any;
  tags: any;
  categories: any;
  selections: any;
  attributes: any;
}

export const ProductForm: React.FC<ProductFormProps> = (
  props: ProductFormProps
) => {
  const { branches, tags, categories, selections, attributes } = props;
  const BRANCHES = branches;
  const TAGS = tags;
  const { Option } = Select;
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };
  const [bottom, setBottom] = useState(10);

  const [selectedItems1, setSelectedItems1] = useState<string[]>([]);
  const [selectedItems2, setSelectedItems2] = useState<string[]>([]);
  const [node, setNode] = useState([]);
  const filteredOptions1 = BRANCHES.filter(
    (o: any) => !selectedItems1.includes(o)
  );

  const filteredOptions2 = TAGS.filter((o: any) => !selectedItems2.includes(o));

  console.log(categories);

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

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 820 }}
    >
      <div>
        <h1
          style={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          New Products
        </h1>
        <></>
      </div>
      <Form {...layout} name="nest-messages" onFinish={onFinish}>
        <Form.Item name={["active"]} label="Active" initialValue={false}>
          <Switch
            defaultChecked={false}
            style={{ backgroundColor: "#57D953" }}
          />
        </Form.Item>

        <Form.Item
          name={["include_ivt"]}
          label="Include Inventory"
          initialValue={false}
        >
          <Switch
            defaultChecked={false}
            style={{ backgroundColor: "#57D953" }}
          />
        </Form.Item>
        <Form.Item
          name={["sell_on_preorder"]}
          label="Sell On Pre-Order Only"
          initialValue={false}
        >
          <Switch
            defaultChecked={false}
            style={{ backgroundColor: "#57D953" }}
          />
        </Form.Item>

        <Form.Item name={["taxable"]} label="Taxable" initialValue={true}>
          <Switch
            defaultChecked={true}
            style={{ backgroundColor: "#57D953" }}
          />
        </Form.Item>

        <Form.Item name={["name"]} label="Name" initialValue="">
          <Input />
        </Form.Item>

        <Form.Item
          name={["ch_line"]}
          label="Online (LIFF)"
          initialValue={false}
        >
          <Switch
            defaultChecked={false}
            style={{ backgroundColor: "#57D953" }}
          />
        </Form.Item>

        <Form.Item name={["ch_pos"]} label="POS" initialValue={false}>
          <Switch
            defaultChecked={false}
            style={{ backgroundColor: "#57D953" }}
          />
        </Form.Item>

        <Form.Item name={["ch_preorder"]} label="Preorder" initialValue={false}>
          <Switch
            defaultChecked={false}
            style={{ backgroundColor: "#57D953" }}
          />
        </Form.Item>

        <Form.Item name={["ch_wc"]} label="WC" initialValue={false}>
          <Switch
            defaultChecked={false}
            style={{ backgroundColor: "#57D953" }}
          />
        </Form.Item>

        <Form.Item name={["order"]} label="Order">
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item name="photo_key" label="Photo" valuePropName="fileList">
          <Upload name="photo_key" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          name="thumnail_key"
          label="Thumnail"
          valuePropName="fileList"
        >
          <Upload name="thumnail_key" action="/upload.do" listType="picture">
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

        <Form.Item name={["branch_id"]} label="Branches">
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

        <Form.Item name={["categories"]} label="Categories">
          <Tree checkable treeData={node} />
        </Form.Item>

        <Form.Item name={["tag_name"]} label="Tags">
          <Select
            mode="multiple"
            value={selectedItems2}
            onChange={setSelectedItems2}
            style={{ width: "100%" }}
          >
            {filteredOptions2.map((item: any) => (
              <Select.Option key={item} value={item.id}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Seletions">
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
                      name={[name, "select_id"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}
                    >
                      <Select>
                        {selections.map((item: any) => (
                          <Option key={item} value={item.name}>
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

        <Form.Item label="Attributes">
          <Form.List name="attribute">
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
                      name={[name, "attribute_id"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}
                    >
                      <Select>
                        {attributes.map((item: any) => (
                          <Option key={item} value={item.name}>
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

        <Form.Item name={["price"]} label="Regular Price">
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name={["sale_price"]} label="Sale Price">
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name={["description"]} label="Desciption" initialValue="">
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
