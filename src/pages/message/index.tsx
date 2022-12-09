import PageTitle from "@/components/PageTitle";
import React, { useEffect } from "react";
import { withTranslation } from "react-i18next";

const Message = ({ t }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 16px)"
        // backgroundColor: '#efefef'
      }}
    ></div>
  );
};

export default withTranslation("translations")(Message);
