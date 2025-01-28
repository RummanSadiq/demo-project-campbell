import { FunctionComponent, PropsWithChildren } from 'react';
import { Cross } from '@/assets/icons';
import classNames from 'classnames';
import { Button } from '@/components/atom/button';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  title?: string;
};

export const Drawer: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  onClose,
  className,
  title,
}) => {
  return (
    <div
      className={classNames(
        'flex w-75 flex-col border-l bg-white transition-transform duration-300',
        className,
      )}
    >
      <div className='flex items-center justify-between border-b px-2 py-1.5'>
        <p className='text-sm font-medium'>{title}</p>
        <Button variant='icon' onClick={onClose} className='p-0'>
          <img src={Cross} alt='close' />
        </Button>
      </div>

      <div className='flex-1 overflow-y-auto'>{children}</div>
    </div>
  );
};
