import React, { useRef } from 'react';
import './App.css';

function App() { 
  const userRef = useRef()
  const inputFirstName = useRef<HTMLInputElement>(null)
  const inputLastName = useRef<HTMLInputElement>(null)
  const inputClass = useRef<HTMLInputElement>(null)

  interface FormDataType {firstName:string, lastName: string, age: string}
  const student: FormDataType = {firstName: "", lastName: "", age: ""}
  const createStudent = (event: React.FormEvent<HTMLFormElement>)=> {
    event.preventDefault();
    student.firstName = inputFirstName?.current?.value||""
    student.lastName = inputLastName?.current?.value||""
    student.age = inputClass?.current?.value||""
    return student    
  }
  return (
    <div className="App">
      <form onSubmit={createStudent}>
        <label htmlFor="name">
          name
        </label>
        <div><label htmlFor="first_name">First Name</label></div>
            <div><input id="first_name" ref={inputFirstName} type="text"/></div>
            <div><label htmlFor="last_name">Last Name</label></div>
            <div><input id="last_name" ref={inputLastName} type="text"/></div>
            <div><label htmlFor="class">Class</label></div>
            <div><input id="class" ref={inputClass} type="number"/></div>
          <input type="submit"/>
                </form>
    </div>
  );
}

export default App;
