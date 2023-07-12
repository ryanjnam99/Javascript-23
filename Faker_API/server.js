const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        mongodbObjectId: faker.database.mongodbObjectId()
    };
    return newUser;
};

const brandNewUser = createUser();
console.log(brandNewUser);


app.get("/api/users/new", (req, res) => {
    res.json(createUser());
})


const createCompany = () => {
    const newCompany = {
        mongodbObjectId: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    };
    return newCompany;
}

const brandNewCompany = createCompany();
console.log(brandNewCompany);

app.get("/api/companies/new", (req,res) => {
    res.json(createCompany());
})

app.get('/api/user/company', (req,res) => {
    res.json(createCompany(), createUser())
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );