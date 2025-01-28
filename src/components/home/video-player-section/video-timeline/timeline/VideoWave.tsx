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
    <div className={'relative rounded-lg bg-blue-subtle py-4'}>
      <div className={'bg-blue-blur-gradient absolute top-0 z-10 h-12 w-20 rounded-l-lg'}>
        <Button
          variant={'outline'}
          className={
            'my-3 ml-1 mr-0.5 flex size-6 items-center justify-center border-blue-dark/40 bg-dark-blue-gradient !p-0'
          }
        >
          <div className={'flex size-3 items-center justify-center'}>
            <img src={Monitor} alt={'monitor'} />
          </div>
        </Button>
      </div>
      <div ref={videoContainerRef} />
    </div>
  );
};
