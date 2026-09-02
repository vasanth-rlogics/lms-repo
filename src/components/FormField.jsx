import React from 'react';
import './FormField.css';

export default function FormField({label,name,error,valid,optional,children}){
  return <label className={`form-field ${error?'is-error':valid?'is-valid':''}`}>
    <span className="form-field-label">{label}{optional&&<em>Optional</em>}</span>
    <div className="form-field-control">{children}{(error||valid)&&<span className="form-field-state">{error?'!':'✓'}</span>}</div>
    {error&&<small className="form-field-message error">{error}</small>}
    {!error&&valid&&<small className="form-field-message success">Looks good</small>}
  </label>;
}
