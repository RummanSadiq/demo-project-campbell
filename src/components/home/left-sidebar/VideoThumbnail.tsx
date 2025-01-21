import { FunctionComponent } from 'react';

type Props = {
  count: number;
  duration: string;
  src: string;
};

export const VideoThumbnail: FunctionComponent<Props> = ({ count, duration, src }) => {
  return (
    <div
      className={
        'relative cursor-pointer rounded-md transition hover:ring-4 hover:ring-primary hover:ring-offset-2'
      }
    >
      <img src={src} alt={'video-placeholder'} className={'rounded-md'} />
      <p
        className={
          'bg-foreground-secondary/60 absolute bottom-1 left-1 z-10 flex size-5 flex-col items-center justify-center rounded-full text-xxs font-medium text-white backdrop-blur-sm'
        }
      >
        {count}
      </p>
      <p
        className={
          'bg-foreground-secondary/60 absolute bottom-1 right-1 z-10 flex h-5 flex-col items-center justify-center rounded-full px-1.5 text-xxs font-medium text-white backdrop-blur-sm'
        }
      >
        {duration}
      </p>
    </div>
  );
};
