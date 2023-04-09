const fileReducer = ( file_state, action ) => {
   switch (action.type) {
      case 'ADDFILE':
         let new_file = {
            name: action.name,
            folder: action.folder
         }
         return file_state.concat(new_file);
   
      default:
         return state;
   }
}

const folderReducer = ( folder_state, action ) => {
   switch ( action.type ) {
      case 'ADDFOLDER':
         let new_folder = {
            name: action.name,
            depth: action.depth
         }
         return folder_state.concat( new_folder ) 

      default:
         return state;
   }
}


const reducer = ( state, action ) => {
   return Object.assign({}, state, {
      folder: folderReducer( state.folder, action ),
      file: fileReducer( state.file, action ) 
   })
};

export default reducer;