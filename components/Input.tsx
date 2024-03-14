"use client"

import { ChangeEvent } from "react"

type InputPropsType = {
    divClass: string;
    inputLabel: string;
    labelClass: string;
    type: string;
    id: string;
    name: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    inputClass: string;
    placeholder: string;
}


export default function Input(props: InputPropsType) {
  return (
    <div className={props.divClass}>
     <label htmlFor={props.name} className={props.labelClass}>{props.inputLabel}</label>
     <input
      type={props.type}
      id={props.id}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      className={props.inputClass}
      placeholder={props.placeholder}
     />
    </div>
  )
}
