// A SIMPLE REDUX FRAMEWORK DEMONSTRATION

// The dispatch and subscribe functions will idealy be supplied by the redux Api

let listeners = [] // The listeners can be an array of functions which will run after the dispatch function is called

function dispatch(action) {
 let newState = reducer(state, action)

 if (newState !== state){
   state = newState
   listeners.forEach( listener =>  listener() );   
 }

}

function subscribe(callback){
   listeners.push(callback)
}




// THE FRONTEND IMPLEMENTATION

let state = {
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


function updateView(){
   document.querySelector('#counter').innerText = state.counter
}

subscribe(updateView)


document.querySelector('#inc').onclick = () => {
   dispatch({ type: 'ICREMENT' })
}

document.querySelector('#dec').onclick = () => {
   dispatch({ type: 'DECREMENT' })
}
