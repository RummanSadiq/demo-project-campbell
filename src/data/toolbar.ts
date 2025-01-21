import HorizontalOrientation from '@/assets/icons/horizontal-orientation.svg';
import BackgroundGradient from '@/assets/icons/background-gradient.svg';
import Opacity from '@/assets/icons/opacity.svg';
import Vector from '@/assets/icons/vector.svg';

type ToolbarOption = {
  icon: string;
  label: string;
  options: string[];
};

export const ToolbarOptions: ToolbarOption[] = [
  {
    icon: HorizontalOrientation,
    label: 'Orientation',
    options: ['Horizontal', 'Vertical'],
  },
  {
    icon: BackgroundGradient,
    label: 'Background',
    options: ['Black', 'Blue'],
  },
  {
    icon: Opacity,
    label: 'Opacity',
    options: ['High', 'Low'],
  },
  {
    icon: Vector,
    label: 'Blur',
    options: ['High', 'Low'],
  },
];
