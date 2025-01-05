import clsx from 'clsx';
import { FC } from 'react';

interface BadgeProps {
  text: string;
  type?: 'success' | 'error' | 'warning';
}

const Badge: FC<BadgeProps> = ({ text, type = 'success' }) => {
  const badgeStyles = clsx(
    'px-2 py-1 text-sm font-medium rounded',
    type === 'success' && 'bg-green-100 text-green-800',
    type === 'error' && 'bg-red-100 text-red-800',
    type === 'warning' && 'bg-yellow-100 text-yellow-800'
  );

  return <span className={badgeStyles}>{text}</span>;
};

export default Badge;
