import React from 'react';

export default function App() {
  return (<div>
    <h1>Root component </h1>
    <ComponentA  x="100"/>
  </div>);
}
 function ComponentA(props){
  
  return(
    <div>
      <h1>A component</h1>
      <p>data from root component is {props.x}</p>
      <ComponentB y={props.x} />
    </div>
  )
 }

 function ComponentB(props){
  
  return(
    <div>
      <h2>B component</h2>
      <p>data from component A is {props.y}</p>
      <ComponentC z={props.y}/>
    </div>
  )
 }

 function ComponentC(props){
  
  return(
    <div>
      <h3>C component</h3>
      <p>data from component B is {props.z}</p>
    </div>
  )
 }