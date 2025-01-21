import { BackgroundGradient, Opacity, Vector, HorizontalOrientation } from '@/assets/icons';

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
