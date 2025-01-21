import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDown } from '@/assets/icons';
import { Separator } from '@radix-ui/themes';
import { FunctionComponent } from 'react';
import { ToolbarOptions } from '@/data/toolbar.ts';

export const ToolBar: FunctionComponent = () => {
  return (
    <div className={'flex justify-center gap-1 border-b p-1'}>
      {ToolbarOptions.map((item, index) => (
        <div key={item.label} className='flex items-center'>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <div className='flex cursor-pointer items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-medium transition hover:bg-gray-100'>
                <img src={item.icon} alt={item.label.toLowerCase()} />
                <p>{item.label}</p>
                <img src={ChevronDown} alt='chevron-down' className={'px-1 py-1.5'} />
              </div>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className='w-32 rounded-md border bg-white font-inter text-sm shadow'
                sideOffset={5}
              >
                {item.options.map((option) => (
                  <DropdownMenu.Item
                    key={option}
                    className='cursor-pointer border-b p-1.5 transition last:border-none'
                  >
                    {option}
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
          {index < ToolbarOptions.length - 1 && <Separator orientation='vertical' size='2' />}
        </div>
      ))}
    </div>
  );
};
