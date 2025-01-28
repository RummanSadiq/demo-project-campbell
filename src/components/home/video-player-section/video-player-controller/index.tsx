import { Button } from '@/components/atom/button.tsx';
import { ControlButtons, EditButtons } from '@/data/video-controller.ts';

export const VideoPlayerController = () => {
  return (
    <div className={'flex items-center justify-between border-b border-t px-4 py-2.5'}>
      <p className={'text-sm font-medium'}>08:32</p>
      <div className={'flex'}>
        {ControlButtons.map((control) => (
          <Button variant={'icon'} className={'!p-2'}>
            <img src={control.icon} alt={control.alt} />
          </Button>
        ))}
      </div>
      <div className={'flex'}>
        {EditButtons.map((edit) => (
          <Button variant={'icon'} className={'!p-2'}>
            <img src={edit.icon} alt={edit.alt} />
          </Button>
        ))}
      </div>
    </div>
  );
};
