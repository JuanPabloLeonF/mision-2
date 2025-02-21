import { EventEmitter } from "@angular/core";
import { ButtonInterface } from "../button/typeButton";
import { LabelInputInterface } from "../label-input/typeLabelInput";
import { FormControl, Validators } from "@angular/forms";
import { TypeDivContainerSvg } from "../div-container-svg/type-div-container-svg";


export const divContainerSvgFormularySavePassword: TypeDivContainerSvg = {
    altValue: "cerrar",
    imgUrl: "/close.svg"
}

export const divContainerSvgFormularyInit: TypeDivContainerSvg = {
    altValue: "",
    imgUrl: ""
}

export const buttonPassword: ButtonInterface = {
    valueButton: "confirmar",
    typeButton: "submit",
    clickEvent: new EventEmitter<void>()
}

export const labelEmailPassword: LabelInputInterface = {
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

export const labelIdentificationPassword: LabelInputInterface = {
    valueLabel: "identification",
    valueSpan: "identificacion",
    typeInput: "text",
    nameInput: "identification",
    idInput: "identification",
    formControl: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{5,10}$')
    ])
}

export const labelNewPasswordPassword: LabelInputInterface = {
    valueLabel: "newPassword",
    valueSpan: "nueva contraseña",
    typeInput: "password",
    nameInput: "newPassword",
    idInput: "newPassword",
    formControl: new FormControl('', [
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{5,15}$')
    ])
}