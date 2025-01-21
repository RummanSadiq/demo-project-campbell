import { Bin, Play, Scissors, SkipBackward, SkipForward } from '@/assets/icons';

type ControlButton = {
  icon: string;
  alt: string;
};

export const ControlButtons: ControlButton[] = [
  { icon: SkipBackward, alt: 'skip-backward' },
  { icon: Play, alt: 'play' },
  { icon: SkipForward, alt: 'skip-forward' },
];

export const EditButtons: ControlButton[] = [
  { icon: Bin, alt: 'bin' },
  { icon: Scissors, alt: 'scissors' },
];
