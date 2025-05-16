import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from "react-native-svg";
const ShoppingCart = (props:SvgProps) => (
  <Svg
    width={100}
    height={100}
    viewBox="0 0 100 100"
    fill="none"
    {...props}
  >
    <G clipPath="url(#clip0_1116_269)">
      <Path
        d="M83.1983 91.0797C85.4745 91.0797 87.3197 89.2345 87.3197 86.9583C87.3197 84.6821 85.4745 82.8369 83.1983 82.8369C80.9221 82.8369 79.0769 84.6821 79.0769 86.9583C79.0769 89.2345 80.9221 91.0797 83.1983 91.0797Z"
        stroke="white"
        strokeWidth={8.24281}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M37.8629 91.0797C40.139 91.0797 41.9843 89.2345 41.9843 86.9583C41.9843 84.6821 40.139 82.8369 37.8629 82.8369C35.5867 82.8369 33.7415 84.6821 33.7415 86.9583C33.7415 89.2345 35.5867 91.0797 37.8629 91.0797Z"
        stroke="white"
        strokeWidth={8.24281}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.8916 4.53027H21.3772L32.4226 59.7159C32.7995 61.6133 33.8317 63.3178 35.3387 64.5309C36.8456 65.744 38.7312 66.3884 40.6654 66.3513H80.7254C82.6596 66.3884 84.5452 65.744 86.0521 64.5309C87.5591 63.3178 88.5913 61.6133 88.9682 59.7159L95.5625 25.1373H25.4986"
        stroke="white"
        strokeWidth={8.24281}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1116_269">
        <Rect
          width={98.9137}
          height={98.9137}
          fill="white"
          transform="translate(0.770264 0.40918)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ShoppingCart;
