import { FunctionComponent } from 'react';
import { TimelineZoomScroller } from '@/components/home/video-player-section/video-timeline/timeline-zoom-scroller';

export const VideoTimeline: FunctionComponent = () => {
  return (
    <div className={'flex flex-col gap-2 p-2'}>
      <TimelineZoomScroller />
    </div>
  );
};
