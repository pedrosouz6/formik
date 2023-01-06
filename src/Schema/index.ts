import * as yup from 'yup';

const emailValidation = /\S+@\S+\.\S+/

export const basicSchema = yup.object({
    username: yup.string()
    .min(2, "O nome deve ser maior que 2 caracteres")
    .max(50, "O nome deve ser menos que 50 caracters")
    .required("Campo obrigatório"),

    email: yup.string()
    .matches(emailValidation, "O email está errado")
    .required("Campo obrigatório"),

    age: yup.number()
    .positive("Idade negativa")
    .required("Campo obrigatório"),

    jobs: yup.string()
    .oneOf(["frontend", "backend"], "O cargo esá errado")
    .required("Campo obrigatório"),

    accepted: yup.boolean()
    .oneOf([true], "Aceite os termos")
})