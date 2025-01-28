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
    <div className={'relative rounded-lg bg-pink/10 py-2'}>
      <div className={'bg-pink-blur-gradient absolute top-0 z-10 h-8 w-20 rounded-l-lg'}>
        <Button
          variant={'outline'}
          className={'my-1 ml-1 mr-0.5 size-6 border-pink-dark bg-pink-gradient !p-1'}
        >
          <div className={'flex size-3 items-center justify-center'}>
            <img src={MusicNote} alt={'music-note'} />
          </div>
        </Button>
      </div>
      <div ref={videoContainerRef} />
    </div>
  );
};
