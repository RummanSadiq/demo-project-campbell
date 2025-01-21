import { FunctionComponent, useMemo } from 'react';
import { Separator } from '@radix-ui/themes';

type Props = {
  intervalSeconds?: number;
  totalDuration?: number;
};

export const TimeMarkers: FunctionComponent<Props> = ({
  intervalSeconds = 2,
  totalDuration = 80,
}) => {
  const timeMarkers = useMemo(() => {
    const markers = [];
    for (let seconds = 0; seconds <= totalDuration; seconds += intervalSeconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      markers.push(
        `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`,
      );
    }
    return markers;
  }, [intervalSeconds, totalDuration]);

  return (
    <div
      className={`no-scrollbar flex w-full max-w-[calc(100vw-160px)] gap-x-3.5 overflow-auto border-b bg-foreground px-4 py-1.5 text-xxs transition`}
    >
      {timeMarkers.map((time, index) => (
        <div key={time} className='flex items-center'>
          <p>{time}</p>
          {index < timeMarkers.length - 1 && (
            <Separator orientation='vertical' className='ml-3.5' />
          )}
        </div>
      ))}
    </div>
  );
};
