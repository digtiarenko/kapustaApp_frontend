// import React, { useState } from 'react';
// import IncomeExpense from '../IncomeExpense/IncomeExpense';
// import TransactionTable from '../TransactionTable/TransactionTable';
// import Summary from '../Summary/Summary';
// import s from './Page.module.css';
// import moment from 'moment';
// import ReportLink from '../../../modules/reports/components/ReportsLink/ReportsLink';
// import Balance from 'modules/balance/components/Balance';
// import { useMediaQuery } from 'react-responsive';

// import TransactionForm from '../TransactionForm/TransactionForm';
// import MobileForm from '../../MobileModal/MobileForm';

// export default function Page() {
//   const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
//   const [type, setType] = useState('expenses');
//   const [showForm, setShowForm] = useState(false);
//   const notMobile = useMediaQuery({ minWidth: 768 });
//   const isDesktop = useMediaQuery({ minWidth: 1280 });
//   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279.98 });

//   const handleShowForm = value => {
//     setShowForm(value);
//   };
//   return (
//     <div className={s.container}>
//       {showForm ? (
//         <MobileForm onClick={handleShowForm} date={date} />
//       ) : (
//         <>
//           {/* <ReportLink /> */}
//           {/* <Balance type="home" /> */}
//           {notMobile && (
//             <TransactionForm
//               date={date}
//               setDate={setDate}
//               type={type}
//               setType={setType}
//             />
//           )}
//           <div className={s.stats}>
//             <div className={s.tables}>
//               <TransactionTable date={date} type={type} />

//               {isDesktop && <Summary />}
//             </div>
//           </div>

//           {isTablet && <Summary />}
//           <IncomeExpense />
//           {/* </div> */}
//         </>
//       )}
//     </div>
//   );
// }
