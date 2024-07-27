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


# React fibre
<br>
   -The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.
   -key points:
         - In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
         - Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.
         -  A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.
         <br>
         <h1>fibre</h1>
         pause work and come back to it later.
assign priority to different types of work.
reuse previously completed work.
abort work if it's no longer needed.

# props = 
props stands for properties.
There are two ways to define props..
```react
function Car(props) {
console.log(props.brand)
  return <h2>I am a { props.brand }!</h2>;
}
```
```react
function Card({myname, btx_text = "visit me "}){
    console.log(myname)
return(
  <h1 className="text-lg font-semibold text-white">{myname}</h1>
  <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
            {btx_text} →
          </button>
)}
```
The on click method in React expects a function reference
You can't directly pass parameters inside the function, instead, you need to pass it as a reference or use arrow function syntax
Actually the initial state has color olive and the reload technically resets the state. So, it gets the olive color.
```
onClick={()=>setColor("red")}
```

