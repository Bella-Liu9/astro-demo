import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "./css/font.css";
import "./css/base.css";
import "./css/animate.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import SettingProvider from "./utils/providers/SettingProvider";
// import "rc-texty/assets/index.css";

// ReactDOM.render(
//   <SettingProvider>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </SettingProvider>,
//   document.getElementById("root")
// );

const Index: React.FC = () => {
  return (
    // <SettingProvider>
    //   <BrowserRouter>
        <App />
    //   </BrowserRouter>
    // </SettingProvider>
  );
};

export default Index;
