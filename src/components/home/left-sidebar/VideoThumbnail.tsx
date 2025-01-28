import { FunctionComponent } from 'react';

type Props = {
  count: number;
  duration: string;
  src: string;
  selected?: boolean;
};

export const VideoThumbnail: FunctionComponent<Props> = ({ count, duration, src, selected }) => {
  return (
    <div
      className={`relative cursor-pointer rounded-md transition ${selected ? 'ring-2 ring-primary ring-offset-2' : ''}`}
    >
      <img src={src} alt={'video-placeholder'} className={'rounded-md'} />
      <p
        className={
          'absolute bottom-1 left-1 z-10 flex size-[18px] flex-col items-center justify-center rounded-full bg-foreground-secondary/60 text-xxs font-medium text-white backdrop-blur-sm'
        }
      >
        {count}
      </p>
      <p
        className={
          'absolute bottom-1 right-1 z-10 flex h-5 flex-col items-center justify-center rounded-full bg-foreground-secondary/60 px-1.5 text-xxs font-medium text-white backdrop-blur-sm'
        }
      >
        {duration}
      </p>
    </div>
  );
};
