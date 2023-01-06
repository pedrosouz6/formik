import { useField } from "formik"

interface CustomCheckbox {
    label: string,
    name: string,
    type: string,
    id: string
}

export function CustomCheckbox({ label, ...props }: CustomCheckbox) {

    const [ field, meta ] = useField(props.name);

    return (
        <div className="customFiled">
            <input { ...props } { ...field } />
            <label htmlFor={props.id}>{ label }</label>
            <span> { meta.touched && meta.error && meta.error } </span> 
        </div>
    )
}