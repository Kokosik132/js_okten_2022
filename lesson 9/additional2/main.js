
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//
let newArr = []
for (const user of users) {
    newArr.push(user.address)
}
console.log(newArr)

for (const userElement of users) {

    let allDiv = document.createElement(`div`)

    let userDiv = document.createElement(`div`);
    userDiv.innerText = `${userElement.name} ${userElement.age} ${userElement.status} ${userElement.address.city} ${userElement.address.country} ${userElement.address.street} ${userElement.address.houseNumber}`

    document.body.append(allDiv)

    allDiv.append(userDiv);
}

for (const userElement of users) {

    let allDiv = document.createElement(`div`)

    let nameDiv = document.createElement(`div`);
    nameDiv.innerText = `${userElement.name}`;

    let ageDiv = document.createElement(`div`);
    ageDiv.innerText = `${userElement.age}`

    let statusDiv = document.createElement(`div`)
    statusDiv.innerText = `${userElement.status}`

    let cityDiv = document.createElement(`div`)
    cityDiv.innerText = `${userElement.address.city}`

    let countryDiv = document.createElement(`div`)
    countryDiv.innerText = `${userElement.address.country}`

    let streetDiv = document.createElement(`div`)
    streetDiv.innerText = `${userElement.address.street}`

    let houseDiv = document.createElement(`div`)
    houseDiv.innerText = `${userElement.address.houseNumber}`

    allDiv.append(nameDiv)
    allDiv.append(ageDiv)
    allDiv.append(statusDiv)
    allDiv.append(cityDiv)
    allDiv.append(countryDiv)
    allDiv.append(streetDiv)
    allDiv.append(houseDiv)
    document.body.append(allDiv)

}




