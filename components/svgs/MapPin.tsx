import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from "react-native-svg";
const MapPin = (props:SvgProps) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 67 66"
    fill="none"
    {...props}
  >
    <G clipPath="url(#clip0_1113_378)">
      <Path
        d="M58.4866 27.4794C58.4866 46.7126 33.7582 63.1982 33.7582 63.1982C33.7582 63.1982 9.02979 46.7126 9.02979 27.4794C9.02979 20.921 11.6351 14.6312 16.2726 9.99376C20.91 5.35628 27.1998 2.75098 33.7582 2.75098C40.3166 2.75098 46.6064 5.35628 51.2438 9.99376C55.8813 14.6312 58.4866 20.921 58.4866 27.4794Z"
        stroke="#F8B683"
        strokeWidth={8.24281}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M33.7579 35.7219C38.3103 35.7219 42.0007 32.0315 42.0007 27.4791C42.0007 22.9268 38.3103 19.2363 33.7579 19.2363C29.2056 19.2363 25.5151 22.9268 25.5151 27.4791C25.5151 32.0315 29.2056 35.7219 33.7579 35.7219Z"
        stroke="#F8B683"
        strokeWidth={8.24281}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1113_378">
        <Rect
          width={65.9424}
          height={65.9424}
          fill="white"
          transform="translate(0.787109 0.00195312)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default MapPin;
