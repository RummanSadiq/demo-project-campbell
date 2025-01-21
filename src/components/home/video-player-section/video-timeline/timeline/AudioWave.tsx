import { Button } from '@/components/atom/button.tsx';
import { MusicNote } from '@/assets/icons';
import { FunctionComponent, useRef } from 'react';
import { useWavesurfer } from '@wavesurfer/react';

export const AudioWave: FunctionComponent = () => {
  const videoContainerRef = useRef(null);

  useWavesurfer({
    container: videoContainerRef,
    height: 16,
    waveColor: 'rgba(238, 69, 188, 1)',
    progressColor: 'rgba(238, 69, 188, 1)',
    barWidth: 2,
    barGap: 1,
    barRadius: 2,
    url: 'https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3',
  });

  return (
    <div className={'bg-pink/10 relative rounded-lg py-2'}>
      <Button
        variant={'outline'}
        className={
          'border-pink-dark bg-pink-gradient absolute left-1 top-1 z-10 mr-0.5 size-6 !p-1'
        }
      >
        <img src={MusicNote} alt={'music-note'} />
      </Button>
      <div ref={videoContainerRef} />
    </div>
  );
};
