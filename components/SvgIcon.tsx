import { FC, SVGProps } from "react";

import { Icons } from "@/types/icon.types";

interface ISvgProps extends SVGProps<SVGSVGElement> {
  name: Icons;
}

const SvgIcon: FC<ISvgProps> = ({ name, ...props }) => {
  return (
    <svg fill="currentColor" {...props}>
      <use xlinkHref={`/assets/sprite.svg#${name}`} />
    </svg>
  );
};

export default SvgIcon;
