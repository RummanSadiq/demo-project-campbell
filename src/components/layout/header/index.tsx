import { Button } from '@/components/atom/button.tsx';
import { ChevronLeft, BlankPage } from '@/assets/icons';
import { FunctionComponent } from 'react';

type Props = object;

export const Header: FunctionComponent<Props> = () => {
  return (
    <div className={'flex items-center justify-between border-b px-4 py-3.5'}>
      <Button variant={'outline'} className={'shadow-custom-2 flex items-center gap-0.5'}>
        <div className={'flex size-4 items-center justify-center'}>
          <img src={ChevronLeft} alt={'chevron-left'} />
        </div>
        <span className={'text-md px-1 font-semibold'}>Back</span>
      </Button>
      <div
        className={
          'flex cursor-pointer gap-2 rounded-md p-1.5 font-medium transition hover:bg-gray-100'
        }
      >
        <img src={BlankPage} alt={'black-page'} />
        <p>Starter Project</p>
      </div>
      <div className={'flex gap-3'}>
        <Button
          variant={'outline'}
          className={'flex size-8 items-center justify-center !rounded-lg !p-0'}
        >
          <div
            className={'text-md flex size-6 flex-col justify-center rounded-lg bg-teal text-white'}
          >
            <p>C</p>
          </div>
        </Button>
        <Button className={'!px-2.5 !py-1 !text-sm'}>Export</Button>
      </div>
    </div>
  );
};
