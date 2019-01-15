import {default as JsonView} from './prettyJson';
const WebNodeMixins = (LogClass)=> class extends LogClass{
    connect(documentEl=null){
        documentEl = documentEl||document.body;
        let node = document.createElement("ul");
        node.style.cssText = "list-style-type: none;";
        documentEl.appendChild(node);
        this.documentEl = documentEl.getElementsByTagName("ul")[0];
    }
    log(message){
        if(!this.documentEl || !this.documentEl.appendChild){
            this.connect();
        }
        let node = document.createElement("li");
        node.style.cssText = 'border-bottom: 1px solid #dedede;';       
        let jsonNode = JsonView.JSONDisplay(message);
        var date = new Date();
        node.innerHTML = `<p style="font-size: 12px; text-align:right">${date}</p>`;
        node.appendChild(jsonNode);
        this.documentEl.appendChild(node);
        console.log(this.prefix.join('/'));
        console.log(message);
    }
};

export default WebNodeMixins;