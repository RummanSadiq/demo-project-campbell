import { File,Layout,Record,Type,Music,ColsedCaptioning,Upload } from "@/assets/icons";
export type RightSidebarIcon = {
  src: string;
  alt: string;
};

export const RightSidebarIcons: RightSidebarIcon[] = [
  {
    src: File,
    alt: 'file'
  },
  {
    src: Layout,
    alt: 'layout'
  },
  {
    src: Record,
    alt: 'record'
  },
  {
    src: Upload,
    alt: 'upload'
  },
  {
    src: Type,
    alt: 'type'
  },
  {
    src: ColsedCaptioning,
    alt: 'cc'
  },
  {
    src: Music,
    alt: 'music'
  }
];