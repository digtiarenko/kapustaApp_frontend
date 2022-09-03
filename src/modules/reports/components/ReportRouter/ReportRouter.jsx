import LoaderSection from 'modules/LoaderSection';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const ReportChartMobile = lazy(() =>
  import('../ReportChart/ReportChartMobile')
);

const data = [
  {
    transactionDescription: 'meet',
    totalSum: 500,
  },
  {
    transactionDescription: 'bread',
    totalSum: 300,
  },
  {
    transactionDescription: 'water',
    totalSum: 100,
  },
  {
    transactionDescription: 'poor',
    totalSum: 50,
  },
  {
    transactionDescription: 'vegitables',
    totalSum: 200,
  },
];

const ReportRouter = () => {
  <Routes>
    <Route
      path="cast"
      element={
        <Suspense fallback={<LoaderSection />}>
          <ReportChartMobile data={data} />
        </Suspense>
      }
    />
  </Routes>;
};

export default ReportRouter;
