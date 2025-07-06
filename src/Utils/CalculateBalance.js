export const calculateBalances = (expenses) => {
  const balances = {};

 
  expenses.forEach((expense) => {
    const { amount, paidBy, splitWith } = expense;
    const perPersonShare = amount / splitWith.length;

   
    if (!balances[paidBy]) balances[paidBy] = 0;

   
    balances[paidBy] += amount;

   
    splitWith.forEach((person) => {
      if (!balances[person]) balances[person] = 0;
      balances[person] -= perPersonShare;
    });
  });

 
  const owes = [];
  const people = Object.keys(balances);


  const debtors = people
    .filter(p => balances[p] < 0)
    .map(p => ({ name: p, amount: -balances[p] }));

  const creditors = people
    .filter(p => balances[p] > 0)
    .map(p => ({ name: p, amount: balances[p] }));

  let i = 0, j = 0;

  while (i < debtors.length && j < creditors.length) {
    const debtor = debtors[i];
    const creditor = creditors[j];
    const amount = Math.min(debtor.amount, creditor.amount);

    owes.push({
      from: debtor.name,
      to: creditor.name,
      amount: parseFloat(amount.toFixed(2))
    });

    debtor.amount -= amount;
    creditor.amount -= amount;

    if (debtor.amount === 0) i++;
    if (creditor.amount === 0) j++;
  }

  return owes;
};
