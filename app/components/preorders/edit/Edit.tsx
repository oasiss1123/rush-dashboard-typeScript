import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Space,
  TimePicker,
} from "antd";
import moment from "moment";
import { useState } from "react";

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};

interface EditProps {
  data: any;
  products: any;
  onEdit: (rec: any) => void;
}

export const Edit: React.FC<EditProps> = (props: EditProps) => {
  const { data, products, onEdit } = props;
  const { Option } = Select;
  console.log(data);

  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const OPTIONS = ["DineIn", "Pickup"];
  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

  const onFinish = (values: any) => {
    console.log(values);
    // onEdit(values);
  };

  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 820 }}
    >
      Pre-Order Edit
      <Form {...layout} name="nest-messages" onFinish={onFinish}>
        <Form.Item
          name={["branches"]}
          label="Branches"
          initialValue={data.branch_name}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["shipping_method"]}
          label="Shipping Method"
          initialValue={data.shipping_method}
        >
          <Select
            mode="multiple"
            value={selectedItems}
            onChange={setSelectedItems}
            style={{ width: "100%" }}
          >
            {filteredOptions.map((item: any) => (
              <Select.Option key={item} value={item}>
                {item}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name={["date"]} label="Date" initialValue={data.date}>
          <Input />
        </Form.Item>

        <Form.Item name={["time"]} label="Time">
          <TimePicker
            style={{ width: "100% " }}
            defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
          />
        </Form.Item>
        <Form.Item label="Product">
          <Form.List name="products" initialValue={data.products}>
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => {
                  console.log("restf", name, key, restField);
                  return (
                    <Space
                      key={key}
                      style={{ display: "flex", marginBottom: 8 }}
                      align="baseline"
                    >
                      <Form.Item
                        {...restField}
                        name={[name, "name.product.name"]}
                        rules={[
                          { required: true, message: "Missing first name" },
                        ]}
                      >
                        <Input />

                        {/* <Select style={{ width: "100%" }}>
                        {products.map((item: any) => (
                          <Option key={item} value={item.name}>
                            {item.name}
                          </Option>
                        ))}
                      </Select> */}
                      </Form.Item>

                      <Form.Item
                        {...restField}
                        name={[name, "qty"]}
                        rules={[
                          { required: true, message: "Missing last name" },
                        ]}
                      >
                        <InputNumber />
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Space>
                  );
                })}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    Add Products
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
