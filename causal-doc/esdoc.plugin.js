const path = require("path");
const fs = require("fs");

const inject = (content, sourcePath, format) => {
  return content.replace(/\[EXAMPLE (.*)\]/g, (_, injectPath) => {
    const codePath = path.resolve(path.dirname(sourcePath), injectPath);
    console.log({ codePath });
    try {
      const code = fs.readFileSync(codePath).toString();
      return format(code);
    } catch (e) {
      console.error(`[ERROR] CANNOT INJECT EXAMPLE ${codePath}`);
      return `[EXAMPLE  ERROR! ${injectPath}]`;
    }
  });
};

module.exports = {
    onHandleConfig(event) {
      console.log("configuration", event.data.config);
    },
    onHandleCode(event){
      var code = event.data.code;
      /**
      * Since esdoc AST paser does not support mixins function which is widely used in this project, 
      * it is a quick and dirty solution for transpiling the mixins function to a class declaration.
      * origin code: const ABCMixins = ( BaseClass ) => class extends BaseClass {
      * transpiled code: class ABCMixins extends BasedClass {
      */
      const regex = /const\s*(.*)\s*=\s*\(\s*(.*)\s*\)\s*=>\s*class\s+extends\s+\2\s*{/gm;
      var m = regex.exec(code);
      if(m !== null){
        var matched =m.map( match => match.trim() );
        event.data.code = code.replace(regex, `class ${matched[1]} extends ${matched[2]} {`);
        // console.log(event.data.code);
      }
      
      /**
       * handle externel example code, 
       * origin from https://medium.com/trabe/having-fun-with-esdoc-plugins-49bd644b99e2
       */
      const commentsFormatter = code => {
        const lines = code.split("\n");
        return [lines[0], ...lines.slice(1).map(line => ` * ${line}`)].join("\n");
      };
      
      event.data.code = inject(event.data.code, event.data.filePath, commentsFormatter);
    },

    onHandleDocs(event) {
      event.data.docs.forEach(doc => {
        const fencesFormatter = code => `\`\`\`\n${code}\n\`\`\``;
              
        if (doc.longname.match(/\.md$/)) {
          doc.content = inject(doc.content, doc.longname, fencesFormatter);
        }
      });
    }
  };