import { FormControl, Validators } from "@angular/forms"
import { LabelInputInterface } from "./label-input/typeLabelInput"
import { ButtonInterface } from "../button/typeButton"
import { EventEmitter } from "@angular/core"
import { PstrongInterface } from "../pstrong/typePstrong"
import { FormularyInterface } from "./typeFormulary"

export const pstrongInit: PstrongInterface = {
    valueP: "",
    valueStrong: "",
    clickEvent: () => {}
}

export const pStrongLoginSavePassword: PstrongInterface = {
    valueP: "¿olvidaste tu contrasena?:",
    valueStrong: "Recuperar",
    clickEvent: () => {alert("voy para guardar contraseña")}
}

export const pStrongLoginRegister: PstrongInterface = {
    valueP: "¿no tienes cuenta?:",
    valueStrong: "Registrate",
    clickEvent: () => {alert("voy para registrarme")}
}

export const buttonInit: ButtonInterface = {
    valueButton: "",
    typeButton: "",
    clickEvent: new EventEmitter<void>()
}

export const buttonLogin: ButtonInterface = {
    valueButton: "iniciar sesion",
    typeButton: "submit",
    clickEvent: new EventEmitter<void>()
}

export const labelInputInit: LabelInputInterface = {
    valueLabel: "",
    valueSpan: "",
    typeInput: "",
    nameInput: "",
    idInput: "",
    formControl: new FormControl('')
}

export const labelInitPasswordClass: LabelInputInterface = {
    valueLabel: "password",
    valueSpan: "password",
    typeInput: "password",
    nameInput: "password",
    idInput: "password",
    formControl: new FormControl('', [
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{5,15}$')
    ])
}

export const labelInitEmailClass: LabelInputInterface = {
    valueLabel: "email",
    valueSpan: "email",
    typeInput: "email",
    nameInput: "email",
    idInput: "email",
    formControl: new FormControl('', [
        Validators.required,
        Validators.email
    ])
} 

export const formularyInit: FormularyInterface = {
    inputs: [
        labelInitEmailClass,
        labelInitPasswordClass,
        buttonLogin,
        pStrongLoginRegister,
        pStrongLoginSavePassword
    ],
    onSubmit: onSubmit
}

function onSubmit(event: any, labelInputEmail: LabelInputInterface, labelInputPassword: LabelInputInterface) {
    event.preventDefault();

    if (labelInputEmail.formControl.valid &&   labelInputPassword.formControl.valid) {
      alert("Formulario válido: " + JSON.stringify({
        email: labelInputEmail.formControl.value,
        password: labelInputPassword.formControl.value
      }));
      labelInputEmail.formControl.reset();
      labelInputPassword.formControl.reset();
    } else {
      alert("Formulario inválido");
    }
}