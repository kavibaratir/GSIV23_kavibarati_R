import { FC } from "react";
import Header from "./Header";
import Views from "../Views/index";
import { css } from "@emotion/css";
import { Card } from "reactstrap";
import React from "react";

const layoutCSS = {
  container: css({
    display: "flex",
    height: "100vh"
  }),
  wrapper: css({
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    paddingLeft: 8,
    paddingRight: 16,
    overflow: "hidden"
  }),
  content: css({
    overflow: "auto",
    height: "100%"
  })
};

type ProtectedLayoutProps = {};
const Layout: FC<ProtectedLayoutProps> = () => {
  return (
    <div className={layoutCSS.container}>
      <div className={layoutCSS.wrapper}>
        <Header />
        <div className={layoutCSS.content}>
          <Card>
            <Views />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Layout;
