import { Outlet } from 'react-router-dom';
import { Summary } from './Summary/Summary';
import s from './ReportPage.module.css';

export default function ReportPage() {
  return (
    <>
      <section className={s.section}>
        <Summary></Summary>
        <Outlet />
        <h1>Page for working with the reports</h1>
        <p>Welcome to the best resource for see how much you earn and spend</p>
      </section>
    </>
  );
}
