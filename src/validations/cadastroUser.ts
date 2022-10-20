
import * as yup from 'yup';
export const validacaoCadastro = yup.object().shape({
    bio: yup.string().required("Preenchimento da bio obrigatório"),
    contact: yup.string().required("Preenchimento do contato obrigatório"),
    email: yup
        .string()
        .required("Preenchimento do email obrigatório")
        .email("Email inválido"),
    course_module: yup.string().required("Preenchimento do módulo obrigatório"),
    name: yup.string().required("Preenchimento do nome obrigatório"),
    password: yup
        .string()
        .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
        .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
        .matches(/(\d)/, "Deve conter ao menos um número")
        .matches(/(\W)|_/, "Deve conter um caracter especial")
        .required("Preenchimento da senha obrigatório")
        .min(8, "no mínimo 8 caracteres"),
    confirmPassword: yup
        .string()
        .required("Preenchimento da confirmação de senha obrigatório")
        .oneOf([yup.ref("password")], "senhas não iguais")
});