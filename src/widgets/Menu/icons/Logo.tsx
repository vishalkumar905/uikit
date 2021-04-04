import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <div {...props}>
      <img width="215" src={isDark ? '/images/egg/LogoTextNewDark.png' : '/images/egg/LogoTextNewWhite.png'}/>
    </div>
  )
};

export default Logo;
