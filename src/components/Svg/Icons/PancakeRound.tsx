import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <div style={{'marginRight': '15px'}}>
      <img alt="logo" style={{width: "35px"}} src="/images/logo-with-circle.png" />
    </div>
  );
};

export default Icon;
