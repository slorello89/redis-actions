const {Toolkit} = require("actions-toolkit");
const childProcess = require("child_process");

Toolkit.run(async tools => {
    const dir = process.env.DOCS_DIRECTORY;
    const dictionary = process.env.DICTIONARY;
    childProcess.execSync(`cp /app/${dictionary} ./${dir}`);    
    childProcess.exec(`cd ./${dir} && spellchecker --no-suggestions -f '**/*.md' -l en-US -q -d ${dictionary} --plugins spell syntax-mentions syntax-urls`, (exception,out,err)=>{        
        tools.info.log(err);
        tools.info.log(out);
        tools.info.log(exception)
    });
    
})