import React from 'react';
import { Sidebar } from '@/Components/organisms/Sidebar/Sidebar';
import { HeaderTitle } from '@/Components/molecules/HeaderTitle/HeaderTitle';

export default function MainTemplate({ title, children }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#181c23' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '2.5rem', color: '#fff' }}>
        <section className="main-layout">
          {title && <HeaderTitle title={title} />}
          <div className="main-layout-content">
            {children}
          </div>
        </section>
      </main>
    </div>
  );
}
