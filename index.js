// Задача 1
// Создать поиск кандидатов в массиве candidateArr по номеру телефона. 
// Номер телефона может быть указан не полностью и в любом формате.

const searchCandidatesByPhoneNumber = phone => {
    let result = [];
    phone = phone.replace(/\D/g, '');
    for (let i = 0; i < condidateArr.length; i++) {
        condidateArr[i].phone.replace(/\D/g, '').includes(phone) ? result.push(condidateArr[i]) : null;
    }
    return result;
}

console.log(searchCandidatesByPhoneNumber('+1(869) 40'));
console.log(searchCandidatesByPhoneNumber('43'));

// Задача 2
// Создать функию которая найдет кандидата по  _id и вернет его из массива candidatesArr c
// отформатированной датой регистрации (поле registred). Дата должна иметь формат DD/MM/YY.

const getCandidateById = id => {
    const obj = condidateArr.find((obj) => obj._id = id);
    const date = new Date(obj.registered);
    const day = date.getDay().toString().padStart(2, '0');
    const month = date.getMonth().toString().padStart(2, '0');
    obj.registered = day + '/' + month + '/' + date.getFullYear();
    return obj;
}
console.log(getCandidateById('5e216bc9a6059760578aefa4'));


// Задача 3
// Написать функцию которая будет сортировать массив canidatesArr по количеству денег лежащих 
// на балансе (смотрим свойство balance)   в том порядке, в котором ей укажут в аргементе sortBy. 
// Если параметр не был передан, то вернет массив в первоначальном состоянии.

const sortCandidatesArr = sortBy => {
    if (sortBy === 'asc') {
        condidateArr.sort((obj1, obj2) => {
            return obj1.balance.slice(1).split(',').join('') - obj2.balance.slice(1).split(',').join(''); 
        }); 
    }
    if (sortBy === 'desc') {
        condidateArr.sort((obj1, obj2) => {
            return obj2.balance.slice(1).split(',').join('') - obj1.balance.slice(1).split(',').join(''); 
        });
    }
    return condidateArr;
}

console.log(sortCandidatesArr('asc'));
console.log(sortCandidatesArr('desc'));


// Задача 4
// Написать функцию, которая вернет объект в котором название ключей будут цвета глаз, а значением - 
// массив с кандидатами имеющие такой цвет глаз. При этом нельзя самому указывать первоначальный 
// объект с возможными вариантами цветами глаз, а сгенерировать их на основе массива с кандидатами, 
// то есть gройтись по массиву candidatesArr и смотреть на свойство eyeColor и добавлять значение 
// цвета глаз кандидата как ключ объекта, если такого ключа не существует, ну и не добавлять - 
// если  одноименный ключ уже существует

const getEyeColorMap = () => {
    let result = {};
    for (let i = 0; i < condidateArr.length; i++) {
        const color = condidateArr[i].eyeColor;
        Object.keys(result).includes(color) ? null : result[color] = [];
        result[color].push(condidateArr[i]);
    }
    return result;
}

console.log(getEyeColorMap());