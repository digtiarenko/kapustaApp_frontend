import { useParams } from 'react-router-dom';
// import ReportChartMobile from './ReportChartMobile';

const ReportChart = () => {
  const data = [
    {
      date: '2022-8',
      arrOfTypes: [
        {
          type: 'expenses',
          arrOfCategories: [
            {
              category: 'products',
              totalSum: 1900,
              arrOfTransactions: [
                {
                  transactionDescription: 'meet',
                  value: 500,
                },
                {
                  transactionDescription: 'bread',
                  value: 300,
                },
                {
                  transactionDescription: 'water',
                  value: 100,
                },
                {
                  transactionDescription: 'poor',
                  value: 50,
                },
                {
                  transactionDescription: 'vegitables',
                  value: 200,
                },
              ],
            },
            {
              category: 'alcohol',
              totalSum: 750,
              arrOfTransactions: [
                {
                  transactionDescription: 'wine',
                  value: 600,
                },
                {
                  transactionDescription: 'beer',
                  value: 150,
                },
              ],
            },
          ],
        },
        {
          type: 'income',
          arrOfCategories: [
            {
              category: 'additional income',
              totalSum: 800,
              arrOfAdditionalIncome: [
                {
                  transactionDescription: 'loterey',
                  value: 500,
                },
                {
                  transactionDescription: 'buisness',
                  value: 300,
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const { category, type } = useParams();

  const getTotalSumToType = type => {
    return data
      .filter(item => item.date === '2022-8')[0]
      .arrOfTypes.filter(item => item.type === type)[0].arrOfCategories[0]
      .totalSum;
  };
  const totalIncome = getTotalSumToType('income');
  const totalExpenses = getTotalSumToType('expenses');

  const dateData = data.filter(item => item.date === '2022-8')[0];
  const typeData = dateData.arrOfTypes.filter(item => item.type === type)[0];
  const categoryData = typeData.arrOfCategories.filter(
    item => item.category === category
  )[0];
  const transactionsData = categoryData.arrOfTransactions;
  const log = categoryData;
  console.log(log);
  // return <ReportChartMobile data={data} />;
  return (
    <>
      <div>Chart</div>

      <div>{'totalExpenses:' + totalExpenses}</div>
      <div> {'totalIncome:' + totalIncome}</div>
      <div>{'Date:' + dateData.date}</div>
      <div>{'Type:' + typeData.type}</div>
      <ul></ul>

      {transactionsData.map(({ transactionDescription, value }, index) => (
        <li key={index}>
          {transactionDescription}:{value}
        </li>
      ))}
    </>
  );
};

export default ReportChart;
