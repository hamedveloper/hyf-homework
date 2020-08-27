let todo = [];
let myName = '';
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function getReply(command) {

    if (command.includes('Hello my name is Hamed Hello my name is Hamed')) {
        return 'Please tell me just once your information';

    } else if (command === 'Hello my name is Hamed') {
        myName = command.split(' ');
        return 'nice to meet you ' + myName[4];

    } else if (command === 'Hello my name is') {
        return 'Please tell your name'

    } else if (command === 'What is my name?') {
        return myName[4];

    } else if (command === 'add fishing to my todo') {

        todo.push(command.substring(4, 11));
        return {
            todo,
            'firstTodo': 'fishing added to your todo'
        };
    } else if (command === 'add singing in the shower to my todo') {
        todo.push(command.substring(4, 11))
        return {
            todo,
            'secondTodo': 'singing added to your todo'
        }
    } else if (command === 'Remove fishing from my todo') {
        todo.splice(0, 1);
        return 'Removed fishing from your todo'

    } else if (command === 'What is on my todo ?') {
        return todo;

    } else if (command === 'What day is it today ?') {
        return (new Date().getDate()) + '. of ' + month[new Date().getMonth()] + ' ' + new Date().getFullYear()

    } else if (!isNaN(command.substring(8, 9))) {

        const n1 = parseInt(command.substring(8), 10);
        const n2 = parseInt(command.substring(10), 10);
        const n = command.substring(9, 10);
        let r = 0;
        switch (n) {
            case '+':
                r = n1 + n2
                break;
            case '-':
                r = n1 - n2
                break;
            case '*':
                r = n1 * n2
                break;
            default:
                r = n1 / n2
        };
        return r;

    } else if (command === 'Set a timer for 4 minutes') {

        const minute = command.match(/(\d+)/);
        const min = minute[0];

        setTimeout(function () {
            console.log('Timer done');
        }, (min * 60000));

        return 'Timer set for ' + min + ' minutes.';
    }
}


console.log(getReply('Hello my name is Hamed'));
console.log(getReply('What is my name?'));
console.log(getReply('add fishing to my todo'));
console.log(getReply('add singing in the shower to my todo'));
console.log(getReply('Remove fishing from my todo'));
console.log(getReply('What is on my todo ?'));
console.log(getReply('What day is it today ?'));
console.log(getReply('What is 4+3'));
console.log(getReply('Set a timer for 4 minutes'));