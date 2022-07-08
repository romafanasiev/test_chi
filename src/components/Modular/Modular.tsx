import React, { useState } from 'react';
import classNames from 'classnames';
import { Loan } from '../../react-app-env';
import './Modular.scss';

type Props = {
  loan: Loan,
  changeAmount: (id: string, value: number) => void,
  isVisible: string,
  handleModular: (e: React.MouseEvent<HTMLButtonElement>) => void,
};

export const Modular: React.FC<Props> = (
  {
    loan, changeAmount, isVisible, handleModular,
  },
) => {
  const [investment, setInvestment] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvestment(e.currentTarget.value);
  };

  const reset = () => {
    setInvestment('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    changeAmount(loan.id, +investment);
    reset();
  };

  return (
    <div
      className={
        classNames(
          'Modular',
          { 'Modular--active': isVisible === loan.id },
        )
      }
    >
      <div className="Modular__content">
        <h2 className="Modular__title">Invest in Loan</h2>
        <p className="Modular__text Modular__text--section">{loan.title}</p>
        <p className="Modular__text Modular__text--section">
          Amount available: $
          {loan.available}
        </p>
        <p className="Modular__text">{`Loan ends in: ${Math.floor(+loan.term_remaining / 86400)} days`}</p>
        <label
          htmlFor="invest"
          className="Modular__label"
        >
          Investment amount
        </label>
        <form
          className="Modular__actions"
          onSubmit={handleSubmit}
        >
          <input
            type="number"
            id="amount"
            className="Modular__input"
            onChange={handleChange}
            value={investment}
          />
          <button
            className="button"
            type="submit"
            onClick={handleModular}
            id="0"
          >
            invest
          </button>
          <button
            aria-label="Exit"
            type="button"
            className="Modular__button"
            onClick={handleModular}
            id="0"
          />
        </form>
      </div>
    </div>
  );
};
