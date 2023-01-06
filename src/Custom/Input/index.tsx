import { useField } from "formik"

interface CustomInput {
    label: string,
    type: string,
    name: string,
    placeholder: string,
    id: string
}

export function CustomInput({ label, ...props }: CustomInput) {

    const [ field, meta ] = useField(props.name);

    return (
        <div className="customFiled">
            <label htmlFor={props.id}>{ label }</label>
            <input {...field} { ...props } />
            <span> { meta.touched && meta.error && meta.error } </span> 
        </div>
    )
}