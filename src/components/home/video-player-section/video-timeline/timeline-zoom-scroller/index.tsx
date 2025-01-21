import * as Slider from '@radix-ui/react-slider';
import { Button } from '@/components/atom/button.tsx';
import { BlueZoomIn } from '@/assets/icons';
import { FunctionComponent } from 'react';

export const TimelineZoomScroller: FunctionComponent = () => {
  return (
    <Slider.Root
      className={
        'relative flex h-8 w-full touch-none select-none items-center rounded-lg bg-foreground'
      }
      defaultValue={[50]}
      max={100}
      step={1}
    >
      <Slider.Thumb className='group flex h-8 w-44 cursor-pointer items-center justify-between rounded-lg border border-transparent bg-blue-light p-1 text-sm font-medium outline-none hover:border-teal'>
        <div className={'flex items-center gap-1'}>
          <Button variant={'outline'} className={'mr-0.5 size-6 border-teal bg-blue-gradient !p-1'}>
            <img src={BlueZoomIn} alt={'zoom-in'} className={'size-full'} />
          </Button>
          <p className={'text-blue-mild'}>Zoom</p>
          <p className={'text-blue-extra-light'}>2s</p>
        </div>
        <div className={'h-4 w-0.5 group-hover:bg-teal'} />
      </Slider.Thumb>
    </Slider.Root>
  );
};
