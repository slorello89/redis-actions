const {Toolkit} = require("actions-toolkit");
const childProcess = require("child_process");

Toolkit.run(async tools => {
    const dir = process.env.DOCS_DIRECTORY;
    const dictionary = process.env.DICTIONARY;
    let ls = childProcess.execSync('ls -l')
    tools.log.info(ls.toString());
    ls = childProcess.execSync('ls -l /app')
    tools.log.info(ls.toString());
    childProcess.execSync(`cp /app/${dictionary} /app/${dir}`);
    childProcess.exec(`cd /app/${dir} && spellchecker --no-suggestions -f '**/*.md' -l en-US -q -d ${dictionary} --plugins spell syntax-mentions syntax-urls`, (exception,out,err)=>{        
        console.log(err);
        console.log(out);
        console.log(exception)
    });
    
})