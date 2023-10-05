const fs = require('fs')
const path = require('path')

const logsDirectory = path.join(__dirname,'Logs')

if(fs.existsSync(logsDirectory)){
    let files = fs.readdirSync(logsDirectory)

    // provides an output of the file names inside the directory
    console.log('Files (in the \'Logs\' directory)')
    files.forEach((fileName) => {
        console.log(fileName)
    })

    // removes all files inside the directory
    files.forEach((fileName) => {
        let filePath = path.join(logsDirectory,fileName)
        fs.unlinkSync(filePath)
    })

    // remove the 'Logs' directory once all the files inside it has been remove
    fs.rmdirSync(logsDirectory)
    console.log('\'Logs\' directory has been removed')
}else{
    // creates a Logs directory
    fs.mkdirSync(logsDirectory)

    //moves to Logs directory
    process.chdir(logsDirectory)

    //creates 10 log files with some text in current working directory
    for(let i = 0; i < 10; i++){
        fs.writeFileSync(`log${i}.txt`,`Hello, this is log file ${i}`)
    }

    //outputs file names to console
    console.log('Log files created:')
    const newFiles = fs.readdirSync(logsDirectory)
    newFiles.forEach((fileName) => {
        console.log(fileName)
    })
}