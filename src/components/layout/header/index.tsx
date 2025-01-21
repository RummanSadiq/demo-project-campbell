import { Button } from '@/components/atom/button.tsx';
import ChevronLeft from '@/assets/icons/chevron-left.svg';
import BlankPage from '@/assets/icons/blank-page.svg';
import { FunctionComponent } from 'react';

type Props = object;

export const Header: FunctionComponent<Props> = () => {
  return (
    <div className={'flex items-center justify-between border-b px-4 py-3.5'}>
      <Button variant={'outline'} className={'flex items-center gap-1.5'}>
        <img src={ChevronLeft} alt={'chevron-left'} />
        <span>Back</span>
      </Button>
      <div className={'flex gap-2 font-medium'}>
        <img src={BlankPage} alt={'black-page'} />
        <p>Starter Project</p>
      </div>
      <div className={'flex gap-3'}>
        <Button variant={'outline'} className={'!rounded-lg !p-1'}>
          <div
            className={'text-md bg-teal flex size-6 flex-col justify-center rounded-lg text-white'}
          >
            <p>C</p>
          </div>
        </Button>
        <Button>Export</Button>
      </div>
    </div>
  );
};
