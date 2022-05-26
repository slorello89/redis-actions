const {Toolkit} = require("actions-toolkit");
const childProcess = require("child_process");

Toolkit.run(async tools => {
    const dir = process.env.DOCS_DIRECTORY;
    const dictionary = process.env.DICTIONARY == null ? "default_dictionary.txt" : process.env.DICTIONARY;
    childProcess.execSync(`cp /app/${dictionary} ./${dir}`);    
    childProcess.exec(`cd ./${dir} && spellchecker --no-suggestions -f '**/*.md' -l en-US -q -d ${dictionary} --plugins spell syntax-mentions syntax-urls`, (exception,out,err)=>{        
        tools.log.info(err);
        tools.log.info(out);
        tools.log.info(exception)
    });
    
})