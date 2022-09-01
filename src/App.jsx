import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from './redux/auth/auth-operations';
import authSelectors from './redux/auth/auth-selectors';
import AppBar from './modules/navigation/components/AppBar';

const AuthPage = lazy(() => import('./Views/AuthPage/AuthPage'));
const HomePage = lazy(() => import('./Views/HomePage'));
const ReportsPage = lazy(() => import('./Views/ReportsPage'));
const Expenses = lazy(() => import('./Views/ReportsPage/Expenses/Expenses'));
const Income = lazy(() => import('./Views/ReportsPage/Income/Income'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isFetchingCurrentUser ? (
        <p>loading...</p>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<AppBar position="fixed" />}>
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
              >
                <Route
                  path="expenses"
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <Expenses />
                    </Suspense>
                  }
                />
                <Route
                  path="income"
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <Income />
                    </Suspense>
                  }
                />
              </Route>
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
        </>
      )}
    </>
  );
};
