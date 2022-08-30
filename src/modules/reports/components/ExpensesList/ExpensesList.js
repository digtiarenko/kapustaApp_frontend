import s from './ExpensesList.module.css';
import ExpensesItem from '../ExpensesItem';

import { ReactComponent as AlcoholSVG } from '../../../../images/icons/category/Vector.svg';
import { ReactComponent as AppliancesSVG } from '../../../../images/icons/category/appliances.svg';
import { ReactComponent as EducationSVG } from '../../../../images/icons/category/education.svg';
import { ReactComponent as EntertainmentSVG } from '../../../../images/icons/category/entertainment.svg';
import { ReactComponent as HealthSVG } from '../../../../images/icons/category/health.svg';
import { ReactComponent as HomeSVG } from '../../../../images/icons/category/home.svg';
import { ReactComponent as OtherSVG } from '../../../../images/icons/category/other.svg';
import { ReactComponent as ProductsSVG } from '../../../../images/icons/category/products.svg';
import { ReactComponent as SportHobbySVG } from '../../../../images/icons/category/sport-hobby.svg';
import { ReactComponent as TransportSVG } from '../../../../images/icons/category/transport.svg';
import { ReactComponent as UtilityBillsSVG } from '../../../../images/icons/category/utility-bills.svg';

export default function ExpensesList() {
  return (
    <ExpensesItem category="Alcohol">
      <AlcoholSVG />
    </ExpensesItem>
  );
}
