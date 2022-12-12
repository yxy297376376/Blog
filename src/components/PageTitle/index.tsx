import React from "react";
import styles from "./index.less";

export default ({
  title,
  style,
  isFocusMode = false
}: {
  title?: string | React.ReactNode;
  style?: React.CSSProperties;
  isFocusMode?: boolean;
}) => {
  function onFocusMode() {
    console.log("开启专注模式");
  }

  return (
    <div className={styles["pageHeader"]} style={style}>
      <h3>{title}</h3>
      <span
        style={{
          display: isFocusMode ? "inline-block" : "none"
        }}
        onClick={onFocusMode}
      >
        专注模式
      </span>
    </div>
  );
};
