import React, { useState } from "react";


function Form (props) {
  const [tarea, setTarea] = useState("");

 const formulario = (event) => {
  setTarea({label: event.target.value, done: false});
 };
console.log (tarea);

 const submit = (event) => {
  event.preventDefault();
  props.nuevaTarea(tarea);
  setTarea("");
 };
  return (
    <div className="form-div">
      <form className="form" onSubmit={submit}>
        <input className="form-input"
          type="text"
          onChange={formulario}
          placeholder="¿Qué debo hacer?" value={tarea.label}
        />
        <button className="todo-button"> Agregar</button>
      </form>
    </div>
  );
}

export default Form;