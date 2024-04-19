import * as React from 'react';
import { Outlet } from 'react-router-dom';

export default function AppMainWindow() {
  return (
    <div>
      <div>
        <p>This is header</p>{' '}
      </div>
      <Outlet />
      <div>
        <p>This is footer</p>{' '}
      </div>
    </div>
  );
}
