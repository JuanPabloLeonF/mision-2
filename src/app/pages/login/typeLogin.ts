export interface TypeLogin {
    isActivateLogin: boolean;
    isActivateRegister: boolean;
    isActivateSavePassword: boolean;
}

export const LoginInit: TypeLogin = {
    isActivateLogin: true,
    isActivateRegister: false,
    isActivateSavePassword: false,
}