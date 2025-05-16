import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from "react-native-svg";
const Map = (props:SvgProps) => (
  <Svg
    width={59}
    height={59}
    viewBox="0 0 59 59"
    fill="none"
    {...props}
  >
    <G clipPath="url(#clip0_1116_528)">
      <Path
        d="M3.29492 15.3852V53.8516L20.124 44.235L39.3572 53.8516L56.1863 44.235V5.76855L39.3572 15.3852L20.124 5.76855L3.29492 15.3852Z"
        stroke="#529501"
        strokeWidth={4.1214}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M39.3564 15.3838V53.8502"
        stroke="#529501"
        strokeWidth={4.1214}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.126 5.76855V44.235"
        stroke="#529501"
        strokeWidth={4.1214}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1116_528">
        <Rect
          width={57.6996}
          height={57.6996}
          fill="white"
          transform="translate(0.891602 0.958984)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Map;
