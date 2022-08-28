import Balance from '../../modules/balance/components/Balance';

export default function HomePage() {
  return (
    <>
      <section>
        <h1>Page for Revenue and Expenses</h1>
        <p>Welcome to the best resource for managing budget</p>
        <Balance />
      </section>
    </>
  );
}
