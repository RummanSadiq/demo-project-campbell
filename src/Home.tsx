import { FunctionComponent, useCallback, useState } from 'react';
import { LeftSidebar } from '@/components/home/left-sidebar';
import { VideoPlayerSection } from '@/components/home/video-player-section';
import { RightSidebar } from './components/home/right-sidebar';

export const Home: FunctionComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = useCallback(() => {
    setOpenDrawer((prev) => !prev);
  }, []);
  return (
    <div className={'flex h-full'}>
      <LeftSidebar />
      <VideoPlayerSection openDrawer={openDrawer} />
      <RightSidebar openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
    </div>
  );
};
