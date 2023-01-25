import React from 'react';
import clsx from 'clsx';

export type UiCardProps = React.ComponentProps<'div'>;

const UiCard = ({ children, className, ...rest }: UiCardProps) => {
  const classes = clsx('bg-white rounded-lg drop-shadow-md', className);
  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};

export default UiCard;
