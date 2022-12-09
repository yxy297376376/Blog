import React from "react";
import { SelectOutlined } from "@ant-design/icons";

const Ga = ({
  children,
  href = "#",
  style,
  icon = <SelectOutlined />
}: {
  children?: React.ReactChild;
  href?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
}) => {
  return (
    <a style={style} onClick={() => window.open(href)}>
      {" "}
      {icon} {children}
    </a>
  );
};

export default Ga;
