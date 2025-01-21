import { Button } from '@/components/atom/button.tsx';
import { Monitor } from '@/assets/icons';
import { FunctionComponent, useRef } from 'react';
import { useWavesurfer } from '@wavesurfer/react';

export const VideoWave: FunctionComponent = () => {
  const videoContainerRef = useRef(null);

  useWavesurfer({
    container: videoContainerRef,
    height: 16,
    waveColor: 'rgba(13, 76, 225, 1)',
    progressColor: 'rgba(13, 76, 225, 1)',
    barWidth: 2,
    barGap: 1,
    barRadius: 2,
    url: 'https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3',
  });

  return (
    <div className={'bg-blue-subtle relative rounded-lg py-4'}>
      <Button
        variant={'outline'}
        className={
          'border-blue-dark bg-dark-blue-gradient absolute left-1 top-3 z-10 mr-0.5 size-6 !p-1'
        }
      >
        <img src={Monitor} alt={'monitor'} />
      </Button>
      <div ref={videoContainerRef} />
    </div>
  );
};
