import { FunctionComponent } from 'react';
import { ToolBar } from '@/components/home/video-player-section/toolbar';
import { VideoPreview } from '@/components/home/video-player-section/video-preview';

export const VideoPlayerSection: FunctionComponent = () => {
  return (
    <div className={'flex size-full flex-col'}>
      <ToolBar />
      <VideoPreview />
    </div>
  );
};
