export { }
var inquirer = require('inquirer');
var converter = require('number-to-words');
inquirer
    .prompt([
        {
            type: 'number',
            name: 'user_no',
            message: 'Enter the required number...',
        }
    ])
    .then((answers) => {
        var user = answers.user_no;
        var conv = converter.toWords(user);
        console.log(conv);
    });