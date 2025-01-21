import { Header } from '@/components/layout/header';
import { FunctionComponent, PropsWithChildren } from 'react';

const AppLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className={'flex h-screen flex-col'}>
      <Header />
      {children}
    </div>
  );
};

export default AppLayout;
