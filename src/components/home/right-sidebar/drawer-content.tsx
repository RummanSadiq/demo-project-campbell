import { FunctionComponent, useState } from 'react';
import { UploadField } from '@/assets/icons';
import { Tabs, MediaItems } from '@/data/drawer-content';

export const DrawerContent: FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState('images');

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col gap-3 border-b px-3 py-4'>
        <p className='text-muted-secondary text-xs font-medium'>Upload Media</p>
        <div className='flex cursor-pointer flex-col items-center gap-2 rounded-md border border-dashed bg-foreground px-16 py-3.5 hover:border-blue-500 hover:bg-white'>
          <img src={UploadField} alt='upload' />
          <p className='text-sm font-medium'>Drag and drop File or click to browse files</p>
        </div>
      </div>

      <div className='flex gap-1 border-b bg-foreground px-3 py-2'>
        {Tabs.map((tab) => (
          <span
            key={tab.id}
            className={`cursor-pointer rounded-3xl border px-2 py-1 text-sm transition-all ${
              activeTab === tab.id
                ? 'bg-white'
                : 'text-muted-secondary hover:bg-muted border-transparent hover:border-border hover:text-black'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </span>
        ))}
      </div>

      <div className='flex flex-col gap-3 border-b px-3 py-4'>
        <p className='text-muted-secondary text-sm'>Media</p>
        <div className='grid grid-cols-2 gap-2'>
          {MediaItems.map((item) => (
            <img key={item.id} src={item.src} alt={item.alt} className='w-full rounded-md' />
          ))}
        </div>
      </div>
    </div>
  );
};
