function addFile( name, location ) {
   return {
      type : 'ADDFILE',
      name : name,
      folder : location
   }      
}

export default addFile;