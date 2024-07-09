const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

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
    handler(argv){
        notes.addNote(argv.title, argv.body); }
    })

//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
})

//create a list command
yargs.command({
    command: 'list',
    describe: 'notes list',
    handler(argv) {
        notes.listNote();
        
        
    }
})

//create a read command
yargs.command({
    command: 'read',
    describe: 'Read note',
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse();
