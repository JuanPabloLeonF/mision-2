import { FormControl, Validators } from "@angular/forms"
import { LabelInputInterface } from "./label-input/typeLabelInput"

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