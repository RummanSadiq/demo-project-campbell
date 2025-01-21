import { FunctionComponent } from 'react';
import { ToolBar } from '@/components/home/video-player-section/toolbar';
import { VideoPreview } from '@/components/home/video-player-section/video-preview';

export const VideoPlayerSection: FunctionComponent = () => {
  return (
    <div className={'flex size-full flex-col'}>
      <ToolBar />
      <VideoPreview />
      <div className={'flex justify-center border-b border-t px-4 py-2.5'}>
        <p className={'font-medium'}>08:32</p>
        <div className={'flex'}></div>
      </div>
    </div>
  );
};
