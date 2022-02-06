import React, { useMemo, useState, useEffect } from 'react';
import ListadoPresupuestos from '../ListadoPresupuestos';
import ConfigMenu from '../ConfigMenu';
import { ContainerBlockStyle } from './ContainerBlock.styles';
import { createBudget, getBudgets, deleteBudget, updateBudget } from '../../services/budgetService';
import { useSearchParams } from 'react-router-dom';

const ContainerBlock = (props) => {

  // const [newBudget, setNewBudget] = useState(props.user + '_Proyecto_' + props.date);
  const [budgets, setBudgets] = useState(getBudgets());
  const [selectedBudgetId, setSelectedBudgetId] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const onSelectBudget = (budgetId) => {
    setSelectedBudgetId(budgetId);
  }
  
  const onCreateBudget = () => {
    const budgetName = prompt('Nombre del presupuesto');
    createBudget({
      name: `${props.user} - ${budgetName}`,
      client: '',
      params: {
        checkedWeb: false,
        pages: 1,
        langs: 1,
        checkedSeo: false,
        checkedAds: false,
      }
    })

    setBudgets(getBudgets());
  }

  const selectedBudget = useMemo(() => {
    return budgets.find(budget => budget.id === selectedBudgetId);
  }, [budgets, selectedBudgetId]);

  const onDeleteBudget = (budgetId) => {
    deleteBudget(budgetId);
    setBudgets(getBudgets());
  }

  const onUpdateBudget = (budgetParams) => {
    if (selectedBudget == null) {
      return;
    }
    const budget = selectedBudget;
    budget.params = {
      ...budget.params,
      ...budgetParams,
    };
    updateBudget(budget);
    // setBudgets(getBudgets());
  }
  // console.log(newBudget)

  useEffect(() => {
    console.log(searchParams.get('checkedWeb'));
    const paramsEntries = Array.from(searchParams.entries())

    if (paramsEntries.length > 0) {

      // if (
      //   paramsEntries.checkedWeb === 'false' &&
      //   paramsEntries.checkedSeo === 'false' &&
      //   paramsEntries.checkedAds === 'false'
      // ) {
      //   console.log('This url has no import data');
      // }

      const params = paramsEntries.reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});
      const name = prompt('Nombre del presupuesto importado');
      const importedBudget = createBudget({
        name: `[Importado] ${name}`,
        client: params.client === '',
        params: {
          checkedWeb: params.checkedWeb === 'true',
          pages: parseInt(params.pages),
          langs: parseInt(params.langs),
          checkedSeo: params.checkedSeo === 'true',
          checkedAds: params.checkedAds === 'true',
        }
      })
      setBudgets(getBudgets());
      setSelectedBudgetId(importedBudget.id);
    }
    console.log(paramsEntries);
  }, [])

  return (
    <ContainerBlockStyle className="ContainerWrapper">
      <ListadoPresupuestos
        budgets={budgets}
        onCreateBudget={onCreateBudget}
        onDeleteBudget={onDeleteBudget}
        onSelectBudget={onSelectBudget}
        selectedBudgetId={selectedBudgetId}
      />
      <ConfigMenu
        user={props.user}
        client={props.client}
        budget={selectedBudget}
        onUpdateBudget={onUpdateBudget}
      />
    </ContainerBlockStyle>
  );
}

export default ContainerBlock;
