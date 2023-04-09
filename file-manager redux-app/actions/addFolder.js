function addFolder( name, location ) {
   return {
      type : 'ADDFOLDER',
      name : name,
      folder : location
   }      
}

export default addFolder;