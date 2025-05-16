import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect, SvgProps } from "react-native-svg";
const EyeClose = (props:SvgProps) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 100 100"
    fill="none"
    {...props}
  >
    <G clipPath="url(#clip0_1116_203)">
      <Path
        d="M41.4097 17.9472C44.2466 17.2832 47.1511 16.9513 50.0647 16.9581C78.9145 16.9581 95.4001 49.9293 95.4001 49.9293C92.8983 54.6096 89.9148 59.0159 86.4979 63.0766M58.8021 58.6667C57.6701 59.8815 56.3051 60.8558 54.7884 61.5316C53.2718 62.2074 51.6345 62.5707 49.9744 62.6C48.3142 62.6293 46.6652 62.3239 45.1256 61.7021C43.5861 61.0802 42.1875 60.1547 41.0134 58.9806C39.8394 57.8065 38.9138 56.4079 38.2919 54.8684C37.6701 53.3288 37.3647 51.6798 37.394 50.0196C37.4233 48.3595 37.7866 46.7222 38.4624 45.2056C39.1382 43.6889 40.1125 42.3239 41.3273 41.192M74.5458 74.4105C67.5006 79.7807 58.922 82.7557 50.0647 82.9006C21.2149 82.9006 4.72925 49.9293 4.72925 49.9293C9.85582 40.3755 16.9663 32.0285 25.5835 25.4482L74.5458 74.4105Z"
        stroke="#1656AD"
        strokeWidth={8.24281}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.72925 4.59375L95.4001 95.2646"
        stroke="#1656AD"
        strokeWidth={8.24281}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1116_203">
        <Rect
          width={98.9137}
          height={98.9137}
          fill="white"
          transform="translate(0.60791 0.47168)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default EyeClose;
