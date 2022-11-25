import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const FilterIcon = (props: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" {...props}>
    <Path
      d="M4.25 5.61C6.27 8.2 10 13 10 13v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6s3.72-4.8 5.74-7.39A1 1 0 0 0 18.95 4H5.04a1 1 0 0 0-.79 1.61z"
      transform="translate(-5 -4)"
      fill="currentColor"
    />
  </Svg>
);

export default FilterIcon;
