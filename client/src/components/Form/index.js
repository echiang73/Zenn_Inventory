import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="10" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ marginBottom: 50, border: "1px solid black" }} className="btn btn-primary">
      {props.children}
    </button>
  );
}

export function ClearBtn(props) {
  return (
    <button {...props} style={{ marginBottom: 50, border: "1px solid black" }} className="btn btn-danger">
      {props.children}
    </button>
  );
}
