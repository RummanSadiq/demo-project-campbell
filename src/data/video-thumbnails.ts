import VideoPlaceholder from '@/assets/images/video-placeholder.svg';

type VideoThumbnail = {
  count: number;
  duration: string;
  src: string;
};

export const VideoThumbnails: VideoThumbnail[] = [
  { count: 1, duration: '00:21', src: VideoPlaceholder },
  { count: 2, duration: '00:21', src: VideoPlaceholder },
  { count: 3, duration: '00:21', src: VideoPlaceholder },
];
