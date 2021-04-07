import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <div {...props} style={{"marginRight": "8px"}}>
      <img style={{"width": "25px"}} src="/images/icons/home-60x60.png"/>
    </div>
  );
};

export default Icon;
