
let initialState = {
   counter: 5
}

function reducer(state, action) {
   switch (action.type) {
      case 'INCREMENT':
         return { ...state, counter: state.counter + 1 }

      case 'DECREMENT':
         return { ...state, counter: state.counter - 1 }
   
      default:
         return state
   }
}

const store = Redux.createStore(reducer, initialState);


function updateView(){
   document.querySelector('#counter').innerText = store.getState.counter
}

store.subscribe(updateView)


document.querySelector('#inc').onclick = () => {
   store.dispatch({ type: 'ICREMENT' })
}

document.querySelector('#dec').onclick = () => {
   store.dispatch({ type: 'DECREMENT' })
}
