const WebNodeMixins = (LogClass)=> class extends LogClass{
    connect(documentEl=null){
        documentEl = documentEl||document.body;
        documentEl.appendChild(document.createElement("UL"));
        this.documentEl = documentEl.getElementsByTagName("UL")[0];
    }
    log(message){
        if(!this.documentEl || !this.documentEl.appendChild){
            this.connect();
        }
        var node = document.createElement("LI");       
        var textnode = document.createTextNode(JSON.stringify(message));
        node.appendChild(textnode);      
        this.documentEl.appendChild(node);
        console.log(this.prefix.join('/'));
        console.log(message);
    }
    trace(message){
        console.log(this.prefix.join('/'));
        console.trace(message);
    }
};

export default WebNodeMixins;