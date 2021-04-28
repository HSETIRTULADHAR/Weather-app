import React, {useState} from 'react';
import axios from 'axios'
const Pokemon =  () => {
    const [data,setData] = useState();
    const [name,setName] = useState( {firstName: '', secondName: ''});
    return (
        <>
        <h1> You chose {data}</h1>
           <select value={data} onChange={ (event) => {setData(event.target.value)} }>
               <option value="1">1</option>
               <option value="3">3</option>
               <option value="4">4</option>

               
           </select> 
            <form>
           
           <input 
             type='text'
             value={name.firstName}
             onChange = { e => setName({...name, firstName: e.target.value})}
           />
           <input type='text' value={name.secondName} onChange={ e => setName({...name, secondName: e.target.value})}/>

           <h1> Your first name is {name.firstName} </h1>
           <h1> and your surname is {name.secondName}</h1>
            </form>
      </>
        
    )
}

export default Pokemon
