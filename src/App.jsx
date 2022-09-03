import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from './redux/auth/auth-operations';
import authSelectors from './redux/auth/auth-selectors';

import AppBar from './modules/navigation/components/AppBar';
import Spinner from './modules/Spinner';
import GoogleRedirectPage from 'Views/GoogleRedirectPage/GoogleRedirectPage';
import { ProtectedRoute } from 'hoc/ProtectedRoute';

const AuthPage = lazy(() => import('./Views/AuthPage/AuthPage'));
const HomePage = lazy(() => import('./Views/HomePage'));
const ReportsPage = lazy(() => import('./Views/ReportsPage'));
const Expenses = lazy(() => import('./Views/ReportsPage/Expenses/Expenses'));
const Income = lazy(() => import('./Views/ReportsPage/Income/Income'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsRefreshing);
  const isAuth = !!useSelector(authSelectors.getAuthToken);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isFetchingCurrentUser ? (
        <Spinner />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<AppBar position="fixed" />}>
              <Route
                index
                element={
                  <ProtectedRoute redirectPath={'/home'} isAllowed={!isAuth}>
                    <Suspense fallback={<div>Loading...</div>}>
                      <AuthPage />
                    </Suspense>
                  </ProtectedRoute>
                }
              />
              <Route
                element={
                  <ProtectedRoute redirectPath={'/home'} isAllowed={!isAuth}>
                    <Suspense fallback={<div>Loading...</div>}>
                      <AuthPage />
                    </Suspense>
                  </ProtectedRoute>
                }
              />
              <Route
                path="home"
                element={
                  <ProtectedRoute redirectPath={'/'} isAllowed={isAuth}>
                    <Suspense fallback={<div>Loading...</div>}>
                      <HomePage />
                    </Suspense>
                  </ProtectedRoute>
                }
              />
              <Route
                path="reports"
                element={
                  <ProtectedRoute redirectPath={'/'} isAllowed={isAuth}>
                    <Suspense fallback={<div>Loading...</div>}>
                      <ReportsPage />
                    </Suspense>
                  </ProtectedRoute>
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
                path="google-redirect"
                element={
                  <ProtectedRoute redirectPath={'/home'} isAllowed={!isAuth}>
                    <Suspense fallback={<div>Loading...</div>}>
                      <GoogleRedirectPage />
                    </Suspense>
                  </ProtectedRoute>
                }
              />
              <Route
                path="*"
                element={
                  <ProtectedRoute redirectPath={'/'} isAllowed={!isAuth}>
                    <Suspense fallback={<div>Loading...</div>}>
                      <AuthPage />
                    </Suspense>
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </>
      )}
    </>
  );
};
