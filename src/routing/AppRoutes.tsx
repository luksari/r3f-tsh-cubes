import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Home } from 'app/home/Home';
import { About } from 'app/about/About';
import { Help } from 'app/help/Help';

import { AppRoute } from './AppRoute.enum';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={AppRoute.home} element={<Home />} />
      <Route path={AppRoute.about} element={<About />} />
      <Route path={AppRoute.help} element={<Help />} />
      <Route path="/" element={<Navigate to={AppRoute.home} />} />
    </Routes>
  );
};
