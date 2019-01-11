
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description:'Rent', amount:100, createdAt:-21000 }));
const expnseTwo = store.dispatch(addExpense({description:'Coffee', amount:300, createdAt:-1000 }));
// const expenseThree = store.dispatch(addExpense({description:'Travel', amount:500, createdAt:21000 }));
// const expnseFour = store.dispatch(addExpense({description:'Food', amount:200, createdAt:1000 }));
// store.dispatch(removeExpense({id:expenseOne.expense.id}));
// store.dispatch(editExpense(expnseTwo.expense.id, {amount:5}));
// store.dispatch(setTextFilter('e'));

// store.dispatch(sortByAmount());
store.dispatch(sortByDate());

// store.dispatch(setStartDate(-200));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

// store.dispatch(setTextFilter());

const demoState={
    expenses:[{
        id:'fsfs',
        description:'January Rent',
        note:'This was the final payment for that address',
        amount:54500,
        createdAt:0
    }],
    filters:[{
        text:'rent',
        sortBy:'amount',//date or amount
        startDate:undefined,
        endDate:undefined
    }]
};

// const user={
//     name:'jen',
//     age:24
// };

// console.log({
//     age:27,
//     ...user,
//     location:'Sri Lanka'
// });