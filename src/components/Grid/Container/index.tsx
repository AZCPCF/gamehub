import { FC, ReactNode } from 'react';

interface GridContainerProps {
  children: ReactNode;
  spacing?: number;
  className?: string;
}

const GridContainer: FC<GridContainerProps> = ({ children, spacing = 2, className = '' }) => {
  const gapClass = `gap-${spacing}`;

  return <div className={`grid ${gapClass} ${className}`}>{children}</div>;
};

export default GridContainer;
