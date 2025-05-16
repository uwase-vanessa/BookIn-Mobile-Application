import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const Check = (props:SvgProps) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 100 100"
    fill="none"
    {...props}
  >
    <Path
      d="M82.8589 25.3555L37.5235 70.6909L16.9165 50.0839"
      stroke="#1656AD"
      strokeWidth={8.24281}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Check;
