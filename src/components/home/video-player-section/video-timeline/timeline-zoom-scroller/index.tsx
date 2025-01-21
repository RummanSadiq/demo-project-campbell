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
      <Slider.Thumb className='bg-blue-light flex h-8 w-44 cursor-pointer items-center gap-1 rounded-lg p-1 text-sm font-medium outline-none'>
        <Button variant={'outline'} className={'bg-blue-gradient mr-0.5 size-6 border-teal !p-1'}>
          <img src={BlueZoomIn} alt={'zoom-in'} className={'size-full'} />
        </Button>
        <p className={'text-blue-mild'}>Zoom</p>
        <p className={'text-blue-extra-light'}>2s</p>
      </Slider.Thumb>
    </Slider.Root>
  );
};
