import { FunctionComponent } from 'react';
import { TimelineZoomScroller } from '@/components/home/video-player-section/video-timeline/timeline-zoom-scroller';
import { TimeMarkers } from '@/components/home/video-player-section/video-timeline/timer-market';
import { VideoWave } from '@/components/home/video-player-section/video-timeline/timeline/VideoWave.tsx';
import { AudioWave } from '@/components/home/video-player-section/video-timeline/timeline/AudioWave.tsx';
import { Line } from '@/assets/icons';

export const VideoTimeline: FunctionComponent = () => {
  return (
    <div className={'flex flex-col gap-2'}>
      <TimeMarkers />
      <div className={'relative flex flex-col gap-2 p-3 pt-0'}>
        <img src={Line} alt={'line'} className={'absolute left-20 z-20 w-fit'} />
        <VideoWave />
        <TimelineZoomScroller />
        <AudioWave />
      </div>
    </div>
  );
};
