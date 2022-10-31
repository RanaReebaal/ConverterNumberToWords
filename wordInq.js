"use strict";
exports.__esModule = true;
var inquirer = require('inquirer');
var converter = require('number-to-words');
inquirer
    .prompt([
    {
        type: 'number',
        name: 'user_no',
        message: 'Enter the required number...'
    }
])
    .then(function (answers) {
    var user = answers.user_no;
    var conv = converter.toWords(user);
    console.log(conv);
});
