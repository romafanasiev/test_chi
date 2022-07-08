import React, { useState } from 'react';
import { Loan } from '../../react-app-env';
import { Modular } from '../Modular';
import './LoanItem.scss';

type Props = {
  loan: Loan,
  changeAmount: (id: string, value: number) => void,
  isActive: string[],
};

export const LoanItem: React.FC<Props> = (
  { loan, changeAmount, isActive },
) => {
  const [isVisible, setIsVisible] = useState('');

  const handleModular = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsVisible(e.currentTarget.id);
  };

  return (
    <div className="LoanItem">
      <div className="LoanItem__description">
        <h2>{loan.title}</h2>
        <ul className="LoanItem__list">
          <li className="LoanItem__item">
            <span className="LoanItem__category">Tranche: </span>
            {loan.tranche}
          </li>
          <li className="LoanItem__item">
            <span className="LoanItem__category">Available amount: </span>
            {`$ ${loan.available}`}
          </li>
          <li className="LoanItem__item">
            <span className="LoanItem__category">Annualised return: </span>
            {`${loan.annualised_return} %`}
          </li>
          <li className="LoanItem__item">
            <span className="LoanItem__category">Term remaining: </span>
            {`${Math.floor(+loan.term_remaining / 86400)} `}
            days
          </li>
          <li className="LoanItem__item">
            <span className="LoanItem__category">Ltv: </span>
            {`$ ${loan.ltv}`}
          </li>
          <li className="LoanItem__item">
            <span className="LoanItem__category">Amount: </span>
            {`$ ${loan.amount}`}
          </li>
        </ul>
      </div>
      <Modular
        loan={loan}
        changeAmount={changeAmount}
        isVisible={isVisible}
        handleModular={handleModular}
      />
      <button
        type="button"
        className="button"
        id={loan.id}
        onClick={handleModular}
      >
        invest
      </button>
      {isActive.includes(loan.id) && (
        <p className="LoanItem__status">Invested</p>
      )}
    </div>
  );
};
