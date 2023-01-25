import React from 'react';
import { Typography } from 'antd';
import clsx from 'clsx';

import UiCard from '@ui/UiCard/UiCard';

const { Title } = Typography;

type CardProps = {
  title?: string;
  isScrollable?: boolean;
  wrapperClass?: string;
} & React.ComponentProps<'div'>;

const Card = ({
  title = '',
  children,
  className,
  wrapperClass = '',
  isScrollable = false,
}: CardProps) => {
  const wrapperClasses = clsx(
    'w-full min-w-0 py-4',
    isScrollable && 'pl-4 pr-2',
    !isScrollable && 'px-4',
    wrapperClass
  );
  const innerClasses = clsx(isScrollable && 'overflow-auto scrollbar', className);

  return (
    <UiCard className={wrapperClasses}>
      <div className={innerClasses}>
        {title && (
          <Title level={5} className="font-bold">
            {title}
          </Title>
        )}
        {children}
      </div>
    </UiCard>
  );
};
export default Card;
