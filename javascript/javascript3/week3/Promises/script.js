//////////////////////////////////////////////////////Getting into promises
const body = document.querySelector('body');
const ul = document.getElementById('uList');


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
                    div.style.cssText = "font-size:20px;font-style:italic;margin:20px 0 20px 0;font-weight:bold;text-shadow:7px 2px 10px blue";
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