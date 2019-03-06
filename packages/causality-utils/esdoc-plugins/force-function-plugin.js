module.exports = {
    onHandleDocs(event) {
      event.data.docs.forEach(doc => {
        if (doc.unknown && doc.unknown.find(t => t.tagName === "@function")) {
          console.log('.............................');
          doc.kind = "function";
        }
      });
    },
  };