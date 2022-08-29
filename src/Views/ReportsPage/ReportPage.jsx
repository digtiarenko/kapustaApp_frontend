import { Summary } from './Summary/Summary';
import s from './reportPage.module.css';

export default function ReportPage() {
  return (
    <>
      <section className={s.section}>
        <Summary></Summary>
        <h1>Page for working with the reports</h1>
        <p>Welcome to the best resource for see how much you earn and spend</p>
      </section>
    </>
  );
}
