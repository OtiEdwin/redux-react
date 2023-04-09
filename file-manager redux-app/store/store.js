import { createStore } from 'redux';
import { reducer } from "../reducers/rootReducer";

/* We can provide a default state to the store. This is useful when
learning, but the real use of this feature is mainly with server rendering, where you precalculate the
state of the application on the server and then can create the store with the precalculated state on
the client. */

const initialState = {
   folder: [
      { 
         name : 'web-apps',
         location: 'root'
      },
      {
         name : 'mobile-apps',
         location : 'root'
      }

   ],
   file : [
      {
         name : 'spry',
         location: 'web-apps'
      },
      {
         name : 'cbym',
         location: 'root'
      }, 
   ]
}



const store = createStore( reducer, initialState );
export default store;