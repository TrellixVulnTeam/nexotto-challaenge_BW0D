const validateEmail = (email) => {
    let atSymbol = email.indexOf('@');
    let dot = email.lastIndexOf('.');
    if (email === "") {
        return false;
    } else if (atSymbol === -1) {
        return false
    } else if (dot === -1) {
        return false
    } else if (atSymbol !== email.lastIndexOf('@')) {
        return false;
    } else if (dot - atSymbol <= 3) {
        return false;
    } else if (atSymbol <= 2) {
        return false;
    } else {
        return true;
    }
}

const validatePsw = (psw) => {
    if (psw.length <= 7 || psw.length >= 16) { return false; } else { return true; }
}

export default validateEmail;
export { validatePsw };