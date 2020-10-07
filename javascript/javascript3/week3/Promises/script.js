//////////////////////////////////////////////////////Getting into promises



// Promise.all(requests)
//     .then(responses => {
//         // all responses are resolved successfully
//         responses.forEach(response => response.jcon())
//     })
const ul = document.querySelector('ul');


class Classmates {
    constructor(classmate1, classmate2, classmate3) {
        this.classmate1 = classmate1,
            this.classmate2 = classmate2,
            this.classmate3 = classmate3
    }
    promis() {
        let names = [this.classmate1, this.classmate2, this.classmate3];
        let requests = names.map(name => fetch(`https://api.github.com/search/repositories?q=user:${name}`));
        Promise.all(requests).then((responses) => responses)
            .then(responses => Promise.all(responses.map(r => r.json())))
            .then(users => {
                users.forEach(user => {
                    let userName = user.items[0].owner.login;
                    let div = document.createElement('div')
                    div.style.fontSize = '20px';
                    div.style.fontStyle = 'italic';
                    div.style.margin = '20px 0 20px 0';
                    div.style.textShadow = '7px 2px 10px blue';
                    div.style.fontWeight = 'bold';

                    div.innerHTML = `${userName}'s repositories: `;
                    ul.appendChild(div)
                    let items1 = user.items;
                    items1.forEach(x => {
                        let classmatesName = document.createElement('li')
                        ul.appendChild(classmatesName)
                        classmatesName.innerHTML = `${x.name}: ${x.url}`

                    });
                })
            })
    }

}


let myClassmates = new Classmates('hamedveloper', 'arya56', 'valmdz');
myClassmates.promis()