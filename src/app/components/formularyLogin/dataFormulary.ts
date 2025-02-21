import { FormControl, Validators } from "@angular/forms"
import { LabelInputInterface } from "../label-input/typeLabelInput"
import { ButtonInterface } from "../button/typeButton"
import { EventEmitter } from "@angular/core"
import { PstrongInterface } from "../pstrong/typePstrong"

export const pstrongInit: PstrongInterface = {
    valueP: "",
    valueStrong: "",
    clickEvent: new EventEmitter<void>()
}

export const pStrongLoginSavePassword: PstrongInterface = {
    valueP: "¿olvidaste tu contrasena?:",
    valueStrong: "Recuperar",
    clickEvent: new EventEmitter<void>()
}

export const pStrongLoginRegister: PstrongInterface = {
    valueP: "¿no tienes cuenta?:",
    valueStrong: "Registrate",
    clickEvent: new EventEmitter<void>()
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