import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppBar from './modules/navigation/components/AppBar';

const AuthPage = lazy(() => import('./Views/AuthPage/AuthPage'));
const HomePage = lazy(() => import('./Views/HomePage'));
const ReportsPage = lazy(() => import('./Views/ReportsPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route
          index
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <AuthPage />
            </Suspense>
          }
        />
        <Route
          path="home"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="reports"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ReportsPage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <AuthPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};
