import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import loans from './api/current-loans.json';

import { HomePage } from './pages/HomePage';
import { Loan } from './react-app-env';

import './App.scss';

function App() {
  const [loansList, setLoansList] = useState<Loan[]>(loans);
  const [totalAmount, setTotalAmoun] = useState(0);
  const [isActive, setIsActive] = useState<string[]>([]);

  function toNumber(element: string) {
    const digit = (element.replace(',', '.'));

    return Number(digit.toLocaleString());
  }

  useEffect(() => {
    const sum = loansList.reduce(
      (acc, curr) => acc + toNumber(curr.available),
      0,
    );

    setTotalAmoun(sum);
  }, [loansList]);

  const changeAmount = (id:string, value:number) => {
    const updatedLoans = loansList.map((loan) => {
      if (loan.id !== id) {
        return loan;
      }

      const updatedLoan = loan;
      let newAmount = toNumber(updatedLoan.amount);
      let newAvailable = toNumber(updatedLoan.available);

      if (
        newAvailable >= value
        && value > 0
        && +updatedLoan.term_remaining > 0
      ) {
        newAmount += value;
        newAvailable -= value;

        updatedLoan.amount = newAmount.toFixed(3);
        updatedLoan.available = newAvailable.toFixed(3);

        setIsActive([...isActive, updatedLoan.id]);
      }

      return updatedLoan;
    });

    setLoansList(updatedLoans);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={(
            <HomePage
              loans={loansList}
              amount={totalAmount}
              changeAmount={changeAmount}
              isActive={isActive}
            />
          )}
        />
        <Route
          path="*"
          element={(
            <HomePage
              loans={loansList}
              amount={totalAmount}
              changeAmount={changeAmount}
              isActive={isActive}
            />
          )}
        />
      </Routes>
    </div>
  );
}

export default App;
