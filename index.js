/*  Деструктуризація */

/// Деструктуризація - це спосіб копіювання полів з об'єкту для зменшення кількості коду

const obj = {
    a: 'value1',
    b: {
        size: {
            uom: 'cm',
            width: 10
        }
    }
}

console.log(obj.b.size.width);

const user = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        country: 'Ukraine',
        location: {
            street: {
              number: 8929,
              name: "Valwood Pkwy",
            },
     }
    }
}

//const {firstName, address: {country, location, location: {street: {number}}}} = user;
// country: user.address.country

function getStreet({address: {location: {street}}}) {
    // const street = user.address.location.street;
    street.newkey = 'new value';
    console.log(`${street.name} ${street.number}`);
}


function getFullName({firstName, lastName}) {
    console.log(`${firstName} ${lastName}`);
}


getFullName(user);

const arr = [9, 8, 7, 6, 5];

const [first, second, , fourth] = arr;


/*
Дан об'єкт

Написати функцію, яка розрахує діагональ монітора
Формула: корінь квадратний з суми квадратів довшини та ширини
*/

const monitor = {
    name: {
        brand: 'Samsung',
        model: 'S10'
    },
    sizes: {
        width: {
            scale: 20,
            uom: 'inch'
        },
        height: {
            scale: 30,
            uom: 'inch'
        }
    }
}


 function getDiagonal({sizes: {width: {scale: wScale}}, height: {scale: hScale}}) {
   return Math.sqrt((wScale ** 2 ) + (hScale ** 2 ));
 }