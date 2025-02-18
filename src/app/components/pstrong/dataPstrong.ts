import { EventEmitter } from "@angular/core";

export interface PstrongInterface {
    valueP: string;
    valueStrong: string;
    clickEvent:  Function
}

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