import { FunctionComponent } from 'react';
import { ToolBar } from '@/components/home/video-player-section/toolbar';
import { VideoPreview } from '@/components/home/video-player-section/video-preview';
import { VideoPlayerController } from '@/components/home/video-player-section/video-player-controller';
import { VideoTimeline } from '@/components/home/video-player-section/video-timeline';

type Props = { openDrawer: boolean };

export const VideoPlayerSection: FunctionComponent<Props> = ({ openDrawer }) => {
  return (
    <div className={'flex size-full flex-col'}>
      <ToolBar />
      <VideoPreview />
      <VideoPlayerController />
      <VideoTimeline openDrawer={openDrawer} />
    </div>
  );
};
