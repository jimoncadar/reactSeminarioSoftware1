// import React from 'react'

async function ObtenerUsuarios(name = "") {
  
        let url = '';
        if (name != ''){
          url = `http://localhost:3000/usuarios/${name}`;        
        }
        else{
          // url = 'https://jsonplaceholder.typicode.com/users';        
          url = 'http://localhost:3000/usuarios';        
        }

        const resultado = await fetch(url);
        
        if (!resultado.ok){
          throw new Error("Problemas al mostrar los datos");
        }           
        const datosJson = await resultado.json();
        
        return datosJson;
}

export default ObtenerUsuarios;