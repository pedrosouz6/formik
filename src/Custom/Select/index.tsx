import { useField } from "formik"

interface CustomSelect {
    label: string,
    name: string,
    id: string
}

export function CustomSelect({ label, ...props }: CustomSelect) {

    const [ field, meta ] = useField(props.name);

    return (
        <div className="customFiled">
            <label htmlFor="">{ label }</label>
            <select { ...props } { ...field }>
                <option value="" disabled selected>Escolha o cargo</option>
                <option value="backend">Backend</option>
                <option value="frontend">Frontend</option>
            </select>

            <span> { meta.touched && meta.error && meta.error } </span> 
        </div>
    )
}