// const localStorageBudgets = {
//   budgets: [{
//     id: 1,
//     name: 'Budget 1',
//     date: '2019-01-01',
//     params: {
//       checkedWeb: false,
//       pages: 1,
//       lang: 1,
//       checkedSeo: false,
//       checkedAds: false,
//     }
//   }],
// }

export const createBudget = (budget) => {
  const resolvedBudget = {
    id: Date.now(),
    name: budget.name,
    client: budget.client,
    date: new Date().toISOString().slice(0, 10),
    params: budget.params
  }
  const currentLocalStorage = JSON.parse(localStorage.getItem('app-budgets')) || { budgets: [] };
  const newLocalStorage = {
    budgets: [...currentLocalStorage.budgets, resolvedBudget]
  }
  localStorage.setItem('app-budgets', JSON.stringify(newLocalStorage));
  return resolvedBudget;
}

export const getBudgets = () => {
  const currentLocalStorage = JSON.parse(localStorage.getItem('app-budgets')) || { budgets: [] };
  return currentLocalStorage.budgets;
}

export const updateBudget = (budget) => {
  const currentLocalStorage = JSON.parse(localStorage.getItem('app-budgets')) || { budgets: [] };
  const budgets = currentLocalStorage.budgets;
  const existingBudget = budgets.find(b => b.id === budget.id) || {};
  const modifiedBudget = {
    ...existingBudget,
    name: budget.name,
    params: budget.params
  }
  const newBudgets = budgets.map(b => b.id === budget.id ? modifiedBudget : b);
  localStorage.setItem('app-budgets', JSON.stringify({ budgets: newBudgets }));
}

export const deleteBudget = (budgetId) => {
  const currentLocalStorage = JSON.parse(localStorage.getItem('app-budgets')) || { budgets: [] };
  const budgets = currentLocalStorage.budgets;
  const newBudgets = budgets.filter(b => b.id !== budgetId);
  localStorage.setItem('app-budgets', JSON.stringify({ budgets: newBudgets }));
}