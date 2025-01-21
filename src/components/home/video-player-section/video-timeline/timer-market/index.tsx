import { FunctionComponent, useMemo } from 'react';
import classNames from 'classnames';

type Props = {
  openDrawer: boolean;
  intervalSeconds?: number;
  totalDuration?: number;
};

export const TimeMarkers: FunctionComponent<Props> = ({
  intervalSeconds = 2,
  totalDuration = 80,
  openDrawer,
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
      className={classNames(
        `no-scrollbar flex w-full gap-x-3.5 overflow-auto border-b bg-foreground px-4 py-1.5 text-xxs transition`,
        openDrawer ? 'max-w-[calc(100vw-480px)]' : 'max-w-[calc(100vw-180px)]',
      )}
    >
      {timeMarkers.map((time, index) => (
        <div key={time} className='flex items-center'>
          <p>{time}</p>
          {index < timeMarkers.length - 1 && <div className={'ml-3.5 h-2 w-[2px] bg-muted'} />}
        </div>
      ))}
    </div>
  );
};
