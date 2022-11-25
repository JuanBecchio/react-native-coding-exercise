import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const ArrowDownIcon = (props: SvgProps) => (
  <Svg width={props.width || 12} height={props.height || 13} {...props}>
    <Path
      d="M15.526 10.573 10.6 15.5a.984.984 0 0 1-1.392 0l-4.919-4.927A.984.984 0 0 1 5.681 9.18l3.242 3.242V2.985a.985.985 0 0 1 1.969 0v9.438l3.242-3.243a.984.984 0 1 1 1.392 1.392z"
      transform="translate(-4 -2)"
      fill="currentColor"
    />
  </Svg>
);

export default ArrowDownIcon;
