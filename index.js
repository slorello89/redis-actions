const {Toolkit} = require("actions-toolkit");
const childProcess = require("child_process");

Toolkit.run(async => {
    const dir = process.env.DOCS_DIRECTORY;
    childProcess.execSync(`cp dictionary.txt ./${dir}`);
    childProcess.exec(`cd ${dir} && spellchecker --no-suggestions -f '**/*.md' -l en-US -q -d dictionary.txt --plugins spell syntax-mentions syntax-urls`, (exception,out,err)=>{        
        console.log(err);
        console.log(out);
        console.log(exception)
    });
    
})