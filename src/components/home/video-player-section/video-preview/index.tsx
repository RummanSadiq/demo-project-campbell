import VideoPlaceholder from '@/assets/images/video-placeholder.svg';
import { FunctionComponent } from 'react';

export const VideoPreview: FunctionComponent = () => {
  return (
    <div className={'flex h-3/5 justify-center'}>
      <img src={VideoPlaceholder} alt={'video-placeholder'} />
    </div>
  );
};
