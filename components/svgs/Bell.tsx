import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const Bell = (props:SvgProps) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 100 99"
    fill="none"
    {...props}
  >
    <Path
      d="M74.3479 33.0116C74.3479 26.4532 71.7426 20.1635 67.1051 15.526C62.4676 10.8885 56.1779 8.2832 49.6195 8.2832C43.0611 8.2832 36.7713 10.8885 32.1338 15.526C27.4964 20.1635 24.8911 26.4532 24.8911 33.0116C24.8911 61.8614 12.5269 70.1042 12.5269 70.1042H86.7121C86.7121 70.1042 74.3479 61.8614 74.3479 33.0116Z"
      stroke="#191919"
      strokeWidth={8.24281}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M56.7493 86.5898C56.0247 87.8389 54.9847 88.8758 53.7334 89.5965C52.482 90.3173 51.0633 90.6966 49.6193 90.6966C48.1752 90.6966 46.7565 90.3173 45.5052 89.5965C44.2539 88.8758 43.2138 87.8389 42.4893 86.5898"
      stroke="#191919"
      strokeWidth={8.24281}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Bell;
