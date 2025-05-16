import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const Shoppingbag = (props:SvgProps) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 100 100"
    fill="none"
    {...props}
  >
    <Path
      d="M25.1591 9.04199L12.7949 25.5276V83.2272C12.7949 85.4134 13.6634 87.51 15.2092 89.0558C16.755 90.6016 18.8516 91.47 21.0377 91.47H78.7374C80.9235 91.47 83.0201 90.6016 84.5659 89.0558C86.1117 87.51 86.9802 85.4134 86.9802 83.2272V25.5276L74.616 9.04199H25.1591Z"
      stroke="#1656AD"
      strokeWidth={8.24281}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M66.3731 42.0137C66.3731 46.3859 64.6362 50.5791 61.5446 53.6708C58.4529 56.7624 54.2597 58.4993 49.8875 58.4993C45.5152 58.4993 41.322 56.7624 38.2304 53.6708C35.1387 50.5791 33.4019 46.3859 33.4019 42.0137"
      stroke="#1656AD"
      strokeWidth={8.24281}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.7949 25.5273H86.9802"
      stroke="#1656AD"
      strokeWidth={8.24281}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Shoppingbag;
