const {Toolkit} = require("actions-toolkit");
const childProcess = require("child_process");

Toolkit.run(async tools => {
    const dir = process.env.DOCS_DIRECTORY;
    const dictionary = process.env.DICTIONARY == null ? "/app/default_dictionary.txt" : process.env.DICTIONARY;
    childProcess.execSync(`cp ${dictionary} ./${dir}`);    
    childProcess.exec(`cd ./${dir} && spellchecker --no-suggestions -f '**/*.md' -l en-US -q -d ${dictionary} --plugins spell syntax-mentions syntax-urls`, (exception,out,err)=>{        
        tools.log.info(err);        
        if(out || exception){
            tools.exit = 1
        }
        tools.log.info(out);
        tools.log.info(exception)
    });    
})