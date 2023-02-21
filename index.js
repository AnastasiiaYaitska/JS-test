// 1

const movies = ["The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "12 Angry Men",
    "The Lord Of The Rings",
    "Pulp Fiction",
    "The Good, the Bad and the Ugly",
    "Forrest Gump"];

    for (let index = 0; index < movies.length; index++) {
        const element = movies[index];
        console.log(element);
       console.log(getWordCount(element))
    }

function getWordCount(str) {
        
     return str.trim().split(/\s+/).length;
}

// 2

const body = document.querySelector('body');
const btn = document.querySelector('.js-btn');

body.insertAdjacentHTML('beforeend', `<button class="js-btn">Click</button>`);


window.addEventListener('click', onClick);

function onClick(event) {
    body.insertAdjacentHTML('beforeend', `<h1>Javascript test</h1>`);
    body.style.backgroundColor = "red";
    event.target.disabled = true;
    
}

// 3

const API = 'https://reqres.in/api/users';

async function fetchApi() {
    const response = await fetch(API);
    const data = await response.json();
    console.log(data)
    return data;

}
fetchApi().then(data => renderMarkup(data.data)).catch(error=> console.log(error))

function renderMarkup(arr) {
    for (let index = 0; index <= 2; index++) {
          const element = arr[index];
        const { avatar, first_name } = element;
        const markup = `
        <div>
            <p>${first_name}</p>
            <img src="${avatar}" alt="">
        </div>`
        
        body.insertAdjacentHTML('afterbegin',markup)
 }
    return
}

// 4

class Person {
    constructor(firstname){
        this.firstname = firstname;
    }
    sayHello() {
        console.log(`Hello my name is ${this.firstname}`)
    }
}

const peter = new Person('peter');
peter.sayHello();