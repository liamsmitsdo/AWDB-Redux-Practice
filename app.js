const inc = document.getElementById("increment");
const dec = document.getElementById("decrement");
const counter = document.getElementById("counter");

const INC = 'INCREMENT';
const DEC = 'DECREMENT';

const initialState = {
    count: 0
}

function rootReducer(state=initialState, action) {
    switch(action.type){
        case INC:
            var newState = Object.assign({}, state);
            newState.count++;
            return newState;
        case DEC:
            var newState = Object.assign({}, state);
            newState.count--;
            return newState;
        default:
            return state
    }
}

const increment = () => {
    return {
        type: INC
    }
}

const decrement = () => {
    return {
        type: DEC
    }
}

inc.addEventListener("click", () =>{
    store.dispatch(increment());
    let state = store.getState();
    counter.innerText = state.count;
})

dec.addEventListener("click", () =>{
    store.dispatch(decrement());
    let state = store.getState();
    counter.innerText = state.count;
})

const store = Redux.createStore(rootReducer);