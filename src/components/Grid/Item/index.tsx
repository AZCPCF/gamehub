import { FC, ReactNode } from "react";

interface GridItemProps {
  children: ReactNode;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  className?: string;
}

const GridItem: FC<GridItemProps> = ({
  children,
  xs = 12,
  sm,
  md,
  lg,
  xl,
  className = "",
}) => {
  const colSpanClasses = [
    `col-span-${xs}`,
    sm && `sm:col-span-${sm}`,
    md && `md:col-span-${md}`,
    lg && `lg:col-span-${lg}`,
    xl && `xl:col-span-${xl}`,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={`${colSpanClasses} ${className}`}>{children}</div>;
};

export default GridItem;
