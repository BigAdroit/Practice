import { AbstractControl } from "@angular/forms";

export function passwordCheck(control: AbstractControl) : {[key:string]: boolean} | null {
    const ConfirmPass = control.get('cpass');
    const password = control.get('password');
    if(password?.pristine || ConfirmPass?.pristine) {
        return null
    }
    return password && ConfirmPass && password.value !== ConfirmPass.value ? {'misMatch': true}: null;
}