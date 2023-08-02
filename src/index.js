import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// 导入antd样式文件
import "antd/dist/antd.min.css";
// 引入index.less文件
import "./index.less";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
