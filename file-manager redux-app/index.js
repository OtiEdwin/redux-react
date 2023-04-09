import { addFolder } from './actions/addFolder';
import { addFile } from './actions/addFile';
import { store } from './store/store';


store.dispatch(addFolder('new folder', 'web-apps'));
store.dispatch(addFile('spry', 'web-apps'));

window.store = store;