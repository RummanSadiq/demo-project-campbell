import { FunctionComponent } from 'react';
import { LeftSidebar } from '@/components/home/left-sidebar';
import { VideoPlayerSection } from '@/components/home/video-player-section';

export const Home: FunctionComponent = () => {
  return (
    <div className={'flex h-full'}>
      <LeftSidebar />
      <VideoPlayerSection />
    </div>
  );
};
