import React from "react";
import CardContent from "./card";
import Loadingcomponent from "./LoadingComponent";
import Nav from "./nav";

const Layout = (props) => (
  <>
    <Nav />
    {props.children}
  </>
);
export { Layout, CardContent, Nav, Loadingcomponent };
