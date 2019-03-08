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
    }
  };