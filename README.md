# Fun_react
React libray
<br/>
###Hook = allow function components to have access to state & other react features
<br/>
##usestate = let [counter,setcounter] = usestate[0]
```react
 let addvalue = () =>{
      if(counter < 20){
      setCounter(counter+1)
      console.log("clicked",counter)
      }
      
    }
    let removevalue = () =>{
      if(counter>0){
        setCounter(counter-1);
        console.log("clicked",counter)
        
      }
      
    }
  return (
    <>
      <h1>Chai aur code  | hitesh</h1>
      <h2>counter value : {counter}</h2>
      <button onClick = {addvalue}>add value : {counter}</button>
      <br />
      <button onClick = {removevalue} >remove value : {counter}</button>
    </>
  )
}

```
