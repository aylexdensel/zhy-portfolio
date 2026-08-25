import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SiteLayout } from './components/layout/SiteLayout/SiteLayout';
import { HomePage } from './pages/HomePage/HomePage';
import { ProjectPage } from './pages/ProjectPage/ProjectPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="projects/:slug" element={<ProjectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;