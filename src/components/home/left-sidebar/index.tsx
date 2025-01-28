import { FunctionComponent } from 'react';
import { VideoThumbnails } from '@/data/video-thumbnails.ts';
import { VideoThumbnail } from '@/components/home/left-sidebar/VideoThumbnail.tsx';
import { Button } from '@/components/atom/button.tsx';
import { Plus } from '@/assets/icons';

export const LeftSidebar: FunctionComponent = () => {
  return (
    <div
      className={
        'flex h-full w-32 min-w-32 flex-col gap-3 overflow-auto border-r bg-foreground p-3'
      }
    >
      {VideoThumbnails.map((thumbnail) => (
        <VideoThumbnail
          key={thumbnail.count}
          count={thumbnail.count}
          duration={thumbnail.duration}
          src={thumbnail.src}
          selected={thumbnail.selected}
        />
      ))}
      <Button variant={'ghost'} className={'!shadow-custom-2 flex justify-center'}>
        <img src={Plus} alt={'plus'} />
      </Button>
    </div>
  );
};
