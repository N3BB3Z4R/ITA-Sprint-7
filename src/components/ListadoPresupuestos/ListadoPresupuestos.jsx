import React, { useState, useMemo } from 'react';
// import Buscador from '../Buscador';
import { ListadoPresupuestosStyle } from './ListadoPresupuestos.styles';

export const ListadoPresupuestos = ({
  budgets,
  onCreateBudget,
  onDeleteBudget,
  onSelectBudget,
  selectedBudgetId
}) => {

  const [searchTerm, setSearchTerm] = useState('');
  const [sortingType, setSortingType] = useState(null);

  const resultBudgets = useMemo(() => {
    const filteredBudgets = budgets.filter(budget => {
      return budget.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    if (sortingType === 'alpha') {
      return filteredBudgets.sort((a, b) => {
        return a.name.localeCompare(b.name);
      })
    } else if (sortingType === 'date') {
      return filteredBudgets.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      })
    } else {
      return filteredBudgets;
    }
  }, [budgets, searchTerm, sortingType]);

  return (
    <ListadoPresupuestosStyle className="ListadoPresupuestosWrapper">
      {/* <Buscador searchTerm={searchTerm} /> */}
      <input type='search' className='SearchBox' placeholder='Buscar presupuesto...' onInput={(e) => setSearchTerm(e.target.value)}/>
      <div className='filterButtons'>
        <button onClick={() => setSortingType('alpha')}>
          <i className="fa-solid fa-arrow-down-a-z"></i>
          <span>Alfa</span>
        </button>
        <button onClick={() => setSortingType('date')}>
          <i className="fa-solid fa-arrow-up-1-9"></i>
          <span>Date</span>
        </button>
        <button onClick={() => setSortingType(null)}>
          <i className="fa fa-refresh" aria-hidden="true"></i>
          <span>Reset</span>
        </button>
      </div>      
      <ul className="innerShadow">
        <li>
          <button className='createNewButton' onClick={() => onCreateBudget()}>+ Crear nuevo</button>
        </li>
        {resultBudgets.map(budget => (
          <li
            key={budget.id}
          >
            <div 
              className={[
                'budgetButton',
                selectedBudgetId === budget.id ? 'selected' : ''
              ].join(' ')}
              onClick={() => onSelectBudget(budget.id)}
            >
              <span className="budgetName">{budget.name}</span>
              <button className='deleteButton' onClick={() => onDeleteBudget(budget.id)}>✖</button>
            </div>
          </li>
        ))}
      </ul>
    </ListadoPresupuestosStyle>
  );
}

export default ListadoPresupuestos;
