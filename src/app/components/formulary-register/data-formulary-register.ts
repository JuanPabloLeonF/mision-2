import { FormControl, Validators } from "@angular/forms";
import { LabelInputInterface } from "../label-input/typeLabelInput";
import { ButtonInterface } from "../button/typeButton";
import { EventEmitter } from "@angular/core";
import { TypeDivContainerSvg } from "../div-container-svg/type-div-container-svg";

export const labelNameRegister: LabelInputInterface = {
    valueLabel: "name",
    valueSpan: "nombre",
    typeInput: "text",
    nameInput: "name",
    idInput: "name",
    formControl: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]{3,30}$')
    ])
}

export const labelEmailRegister: LabelInputInterface = {
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

export const labelPasswordRegister: LabelInputInterface = {
    valueLabel: "password",
    valueSpan: "contraseña",
    typeInput: "password",
    nameInput: "password",
    idInput: "password",
    formControl: new FormControl('', [
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{5,15}$')
    ])
}

export const labelIdentificationRegister: LabelInputInterface = {
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

export const buttonSubmitRegister: ButtonInterface = {
    valueButton: "registrarse",
    typeButton: "submit",
    clickEvent: new EventEmitter<void>()
}

export const divContainerSvgRegister: TypeDivContainerSvg = {
    altValue: "cerrar",
    imgUrl: "/close.svg",
    stylePersonalized: {
        position: "absolute",
        width: "1.5rem",
        height: "1.5rem",
        top: "5%",
        right: "5%"
    }
}