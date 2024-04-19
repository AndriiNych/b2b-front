import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import { AppMainWindow } from 'interface';
import { HomePage, Page404 } from 'pages';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppMainWindow />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}
