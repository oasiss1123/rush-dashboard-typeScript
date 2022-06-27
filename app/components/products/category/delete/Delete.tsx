import { Content } from "antd/lib/layout/layout";
import { Button } from "antd";

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
          Are you sure you want to delete Category {data.name}?
        </div>
        <div style={{ marginTop: 10 }}>
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
            href="/categories"
            style={{
              borderTopRightRadius: 4,
              borderTopLeftRadius: 4,
              borderBottomRightRadius: 4,
              borderBottomLeftRadius: 4,
              fontWeight: "bold",
              color: "white",
              backgroundColor: "black",
              marginLeft: 8,
            }}
          >
            Cancel
          </Button>
        </div>
      </Content>
    </div>
  );
};
