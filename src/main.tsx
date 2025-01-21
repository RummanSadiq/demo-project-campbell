import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@radix-ui/themes/styles.css';
import './index.css';
import AppLayout from '@/layouts/app-layout';
import { Theme } from '@radix-ui/themes';
import { Home } from '@/Home.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme className={'font-inter'}>
      <AppLayout>
        <Home />
      </AppLayout>
    </Theme>
  </StrictMode>,
);
