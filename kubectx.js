#!/usr/bin/env node

const execa = require('execa');
const inquirer = require('inquirer');

Promise.all([
  execa('kubectl', 'config current-context'.split(' ')),
  execa('kubectl', 'config get-contexts -o name'.split(' ')),
])
  .then(([{ stdout: currentContext }, { stdout: contexts }]) =>
    inquirer.prompt([
      {
        type: 'list',
        message: 'Select kubectl context',
        name: 'context',
        default: currentContext,
        choices: contexts.split('\n').sort(),
      },
    ])
  )
  .then(({ context: selectedContext }) =>
    execa('kubectl', 'config use-context'.split(' ').concat(selectedContext))
  )
  .then(({ stdout: result }) => console.log(result));
