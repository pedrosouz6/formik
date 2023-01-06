import { Form, Formik } from "formik"
import { CustomCheckbox } from "./Custom/Checkbox"
import { CustomInput } from "./Custom/Input"
import { CustomSelect } from "./Custom/Select"
import { basicSchema } from "./Schema"

import './App.css'

export function App() {

  function onSubmit() {}

  return (
    <Formik 
      initialValues={{
        usename: "",
        email: "",
        age: "",
        jobs: "",
        accepted: false
      }}
      validationSchema={basicSchema}
      onSubmit={onSubmit}
    >

      {({ isSubmitting }) => (
        <main>
          <section>
            <h1>Formulario usando formik</h1>
            <Form>
              <div className="styleField">
                <CustomInput label="Nome" type="text" id="username" name="username" placeholder="Digite seu nome" />
                <CustomInput label="Email" type="email" id="email" name="email" placeholder="Digite seu email" />
                <CustomInput label="Idade" type="number" id="age" name="age" placeholder="Sua idade" />

                <CustomSelect label="Cargo" id="jobs" name="jobs" />
              </div>

              <div className="styleCheckbox">
                <CustomCheckbox label="Aceitar os termos" type="checkbox" id="accepted" name="accepted"  />
              </div>

              <button type="submit" disabled={isSubmitting}>Enviar</button>
            </Form>
          </section>
        </main>
      )}

    </Formik>
  )
}