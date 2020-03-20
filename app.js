
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

// yargs version
yargs.version('1.1.0')

// add, remove, read ,list
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:"string"
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
         notes.addNote(argv.title,argv.body)

    }
})

// create remove command
yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'Remove the note by title',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        notes.removeNotes(argv.title)
    }
})


yargs.command({
    command:'list',
    describe:'list note',
    handler:function() {
        notes.listNotes()
    }
})

// parses the arguments 
yargs.parse()