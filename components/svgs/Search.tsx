import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const Search = (props:SvgProps) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 100 100"
    fill="none"
    {...props}
  >
    <Path
      d="M46.0201 79.2794C64.2296 79.2794 78.9913 64.5176 78.9913 46.3081C78.9913 28.0986 64.2296 13.3369 46.0201 13.3369C27.8105 13.3369 13.0488 28.0986 13.0488 46.3081C13.0488 64.5176 27.8105 79.2794 46.0201 79.2794Z"
      stroke="#1656AD"
      strokeWidth={8.24281}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M87.2338 87.5238L69.3057 69.5957"
      stroke="#1656AD"
      strokeWidth={8.24281}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Search;
