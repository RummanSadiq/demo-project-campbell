import { FunctionComponent } from 'react';
import { ToolBar } from '@/components/home/video-player-section/toolbar';

export const VideoPlayerSection: FunctionComponent = () => {
  return (
    <div className={'flex size-full flex-col'}>
      <ToolBar />
    </div>
  );
};
