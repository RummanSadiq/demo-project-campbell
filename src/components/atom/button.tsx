import {
  ButtonHTMLAttributes,
  FunctionComponent,
  MouseEventHandler,
  PropsWithChildren,
} from 'react';
import classNames from 'classnames';

type ButtonVariant = 'default' | 'outline' | 'text' | 'ghost' | 'icon';

type Props = {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: ButtonVariant;
  disabled?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
};

export const Button: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  type,
  className,
  variant = 'default',
  disabled,
  onClick,
}) => {
  const variantClasses = {
    default:
      'bg-primary px-2.5 py-2 text-white hover:bg-opacity-100 font-medium bg-opacity-90 transition',
    outline:
      'border font-medium hover:bg-gray-100 transition disabled:opacity-50 px-2.5 py-1.5 text-sm',
    text: 'font-semibold hover:bg-light-foreground',
    ghost: 'bg-white p-2 hover:bg-gray-100 shadow-sm border border-light',
    icon: 'rounded-md p-1.5 hover:bg-muted transition',
  };

  return (
    <button
      type={type ?? 'button'}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        'rounded-md disabled:cursor-not-allowed',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </button>
  );
};
