import React from 'react';
import { Header } from '../../components/Header';
import { LoanItem } from '../../components/LoanItem';
import { Loan } from '../../react-app-env';
import './HomePage.scss';

type Props = {
  loans: Loan[],
  amount: number,
  changeAmount: (id: string, value: number) => void,
  isActive: string[],
};

export const HomePage: React.FC<Props> = (
  {
    loans, amount, changeAmount, isActive,
  },
) => {
  return (
    <div className="HomePage">
      <Header />
      <ul className="HomePage__list wrapper">
        {loans.map((loan) => {
          return (
            <li key={loan.id} className="HomePage__item">
              <LoanItem
                loan={loan}
                changeAmount={changeAmount}
                isActive={isActive}
              />
            </li>
          );
        })}
      </ul>
      <div className="HomePage__total-amount">
        <p>Total amount available for investment:</p>
        <p>{` $${amount.toLocaleString()}`}</p>
      </div>
    </div>
  );
};
