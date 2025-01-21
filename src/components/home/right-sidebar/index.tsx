import { FunctionComponent } from 'react';
import { RightSidebarIcons } from '@/data/right-sidebar-icons';
import { Button } from '@/components/atom/button';
import { Drawer } from '@/components/atom/drawer';
import { DrawerContent } from './drawer-content';

type Props = {
  openDrawer: boolean;
  toggleDrawer: () => void;
};

export const RightSidebar: FunctionComponent<Props> = ({ openDrawer, toggleDrawer }) => {
  return (
    <div className={'flex'}>
      {openDrawer && (
        <Drawer isOpen={openDrawer} onClose={toggleDrawer} title='Media'>
          <DrawerContent />
        </Drawer>
      )}
      <div className='flex h-full w-12 flex-col items-center gap-1.5 overflow-auto border-l bg-foreground p-2'>
        {RightSidebarIcons.map((icon) => (
          <Button key={icon.alt} variant='icon' className='!size-8' onClick={toggleDrawer}>
            <img src={icon.src} alt={icon.alt} />
          </Button>
        ))}
      </div>
    </div>
  );
};
