export const calculateBalances = (expenses) => {
  const balances = {};

  // Step 1: Go through each expense
  expenses.forEach((expense) => {
    const { amount, paidBy, splitWith } = expense;
    const perPersonShare = amount / splitWith.length;

    // Initialize balances if needed
    if (!balances[paidBy]) balances[paidBy] = 0;

    // The payer gave money, so we add to their balance
    balances[paidBy] += amount;

    // Each person (including payer) owes their share
    splitWith.forEach((person) => {
      if (!balances[person]) balances[person] = 0;
      balances[person] -= perPersonShare;
    });
  });

  // Step 2: Convert balances into a list of "A owes B"
  const owes = [];
  const people = Object.keys(balances);

  // Split into payers and payees
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
