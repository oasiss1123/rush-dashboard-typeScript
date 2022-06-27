import { Button } from "antd";
import { Content } from "antd/lib/layout/layout";

interface DeleteProps {
  data: any;
}

export const Delete: React.FC<DeleteProps> = (props: DeleteProps) => {
  const { data } = props;
  return (
    <div>
      <Content
        className="site-layout-background"
        style={{
          margin: "60px 100px",
          padding: 24,
          minHeight: 200,
          textAlign: "center",
        }}
      >
        <div style={{ marginTop: 30, fontWeight: "bold" }}>
          Are you sure you want to delete {data.name}?
        </div>
        <div style={{ fontWeight: "bold", fontSize: 12, marginTop: 8 }}>
          Delete selection will impact into your Product, Selection <br />
          detail and Inventory, view product in POS or LINE.
        </div>
        <div style={{ fontWeight: "bold", marginTop: "10px" }}>
          <Button
            size={"middle"}
            type="danger"
            style={{
              borderTopRightRadius: 4,
              borderTopLeftRadius: 4,
              borderBottomRightRadius: 4,
              borderBottomLeftRadius: 4,
              fontWeight: "bold",
            }}
          >
            Confirm
          </Button>
          <Button
            style={{
              borderTopRightRadius: 4,
              borderTopLeftRadius: 4,
              borderBottomRightRadius: 4,
              borderBottomLeftRadius: 4,
              color: "white",
              backgroundColor: "black",
              marginLeft: 8,
              fontWeight: "bold",
            }}
            href="/selections"
          >
            Cancel
          </Button>
        </div>
      </Content>
    </div>
  );
};
