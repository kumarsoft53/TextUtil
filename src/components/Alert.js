import React from 'react'

export default function Alert(props) {
  return (
    props.alertNote && <div className={`alert alert-${props.alertNote.typ} alert-dismissible fade show`} role="alert">
       <p>{props.alertNote.typ}: {props.alertNote.msg}</p>
       <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}
