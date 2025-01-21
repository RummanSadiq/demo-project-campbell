import { FunctionComponent, useCallback, useState } from 'react';
import { RightSidebarIcons } from '@/data/right-sidebar-icons';
import { Button } from '@/components/atom/button';
import { Drawer } from '@/components/atom/drawer';
import { DrawerContent } from './drawer-content';

export const RightSidebar: FunctionComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleClose = useCallback(() => {
    setOpenDrawer((prev) => !prev);
  }, []);

  return (
    <div className='flex h-full w-12 flex-col items-center gap-1.5 overflow-auto border-l bg-foreground p-2'>
      {RightSidebarIcons.map((icon) => (
        <Button
          key={icon.alt}
          variant='icon'
          className='!size-8'
          onClick={() => setOpenDrawer(true)}
        >
          <img src={icon.src} alt={icon.alt} />
        </Button>
      ))}

      <Drawer isOpen={openDrawer} onClose={handleClose} title='Media'>
        <DrawerContent />
      </Drawer>
    </div>
  );
};
