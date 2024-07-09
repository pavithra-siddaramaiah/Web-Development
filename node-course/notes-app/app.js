const getNotes = require('./notes')
const chalk = require('chalk')
const yargs = require('yargs')

//create add command
yargs.command({
    command: 'add',
    describe: 'Added new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            description: 'Body of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Adding the notes..\n'+ 'title: '+ argv.title +'\n'+ 'body: '+argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove note',
    handler: function () {
        console.log('Removing the notes..')
    }
})

//create a list command
yargs.command({
    command: 'list',
    describe: 'notes list',
    handler: function () {
        console.log('showing all the notes..')
    }
})

//create a read command
yargs.command({
    command: 'read',
    describe: 'Read note',
    handler: function () {
        console.log('Reading the notes..')
    }
})

yargs.parse();
console.log(yargs.argv)