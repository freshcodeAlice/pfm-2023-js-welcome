class AuthUserError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
    }
}





try {
 
        throw new AuthUserError();

} catch(error) {
    if (error instanceof AuthUserError) {
       // якщо ця помилка дійсно того типу, який нам треба - обробити її особливим чином
    }
}


console.log('code working')