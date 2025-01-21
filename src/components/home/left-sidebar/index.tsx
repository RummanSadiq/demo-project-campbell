import { FunctionComponent } from 'react';
import { VideoThumbnails } from '@/data/video-thumbnails.ts';
import { VideoThumbnail } from '@/components/home/left-sidebar/VideoThumbnail.tsx';

export const LeftSidebar: FunctionComponent = () => {
  return (
    <div className={'flex h-full w-32 flex-col gap-3 overflow-auto border-r bg-foreground p-3'}>
      {VideoThumbnails.map((thumbnail) => (
        <VideoThumbnail
          key={thumbnail.count}
          count={thumbnail.count}
          duration={thumbnail.duration}
          src={thumbnail.src}
        />
      ))}
    </div>
  );
};
