import {createStore} from 'redux';

// const add=(data)=>{
//     return data.a+data.b;
// };

// console.log(add({a:1, b:12}));

const incrementCount=({incrementBy=1}={})=>({
    type:'INCREMENT',
    incrementBy
});

const decrementCount=({decrementBy=1}={})=>({
    type:'DECREMENT',
    decrementBy
});

const resetCount=()=>({
    type:'RESET'
});

const setCount=({count})=>({
    type:'SET',
    count
});

//reducers



const countReducer=(state={count:0}, action)=>{
    switch(action.type){
        case 'INCREMENT':
        // const incrementBy=typeof action.incrementBy=='number'?action.incrementBy:1;
        return{
            count:state.count+action.incrementBy
        };
        case 'DECREMENT':
        // const decrementBy=typeof action.decrementBy=='number'?action.decrementBy:1;
        return{
            count:state.count-action.decrementBy
        };
        case 'RESET':
        return{
            count:state.count=0
        };
        case 'SET':
        return{
            count:state.count=action
        };
        default:
        return state;
    }
};

const store= createStore(countReducer);
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy:5}));

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy:10}));

store.dispatch(resetCount());

store.dispatch(setCount({count:-90 }));