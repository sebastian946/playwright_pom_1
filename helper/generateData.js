const { faker } = require('@faker-js/faker');

export function generateEmail(){
    return faker.internet.email();
}
export function generatePassword(){
    return "12345678";
}

export function generateNum(){
    return Math.floor(Math.random() * (16 - 3+1)) + 3;
}
export function generateAnswer(){
    return faker.company.buzzVerb();
}