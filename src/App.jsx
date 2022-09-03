import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from './redux/auth/auth-operations';
import authSelectors from './redux/auth/auth-selectors';

import AppBar from './modules/navigation/components/AppBar';
import Spinner from './modules/Spinner';
import { ToastContainer, toast } from 'react-toastify';

const AuthPage = lazy(() => import('./Views/AuthPage/AuthPage'));
const HomePage = lazy(() => import('./Views/HomePage'));
const ReportsPage = lazy(() => import('./Views/ReportsPage'));

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
              />
              <Route
                path="google-redirect"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    {
                      <div>
                        <p> Google redirect page</p>
                        <Spinner />
                      </div>
                    }
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
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          ;{/* Same as */}
          <ToastContainer />;
        </>
      )}
    </>
  );
};
