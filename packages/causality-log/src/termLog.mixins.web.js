import {default as JsonView} from './prettyJson';
const WebNodeMixins = (LogClass)=> class extends LogClass{
    connect(documentEl=null){
        documentEl = documentEl||document.body;
        let node = document.createElement("ul");
        node.style.cssText = "list-style-type: none;";
        documentEl.appendChild(node);
        this.frameEl = documentEl;
        this.loggerEl = documentEl.getElementsByTagName("ul")[0];
    }
    scrollBottom(element=null){
        element = element || this.frameEl;
        element.scrollTop = element.scrollHeight - element.clientHeight;
    }
    progress(processMessage){
        // let node = this.loggerEl.getElementsByTagName("li:nth-last-of-type(1)");
        let LINodes = this.loggerEl.getElementsByTagName("li");
        let node = LINodes[LINodes.length-1];
        if(!node || node.classList.contains("logger-progress")){
            //create new el
            node = document.createElement("li");
            node.classList.add("logger-progress");
            this.loggerEl.appendChild(node);
        }
        let jsonNode = JsonView.JSONDisplay(processMessage);
        var date = new Date();
        node.innerHTML = `<p style="font-size: 12px; text-align:right">${date}</p>`;
        node.appendChild(jsonNode);
        this.scrollBottom();
    }
    log(message){
        if(this.level >= this.AcceptedLevels['log']){
            return null;
        }
        if(!this.loggerEl || !this.loggerEl.appendChild){
            this.connect();
        }
        let node = document.createElement("li");
        node.style.cssText = 'border-bottom: 1px solid #dedede;';       
        let jsonNode = JsonView.JSONDisplay(message);
        var date = new Date();
        node.innerHTML = `<p style="font-size: 12px; text-align:right">${date}</p>`;
        node.appendChild(jsonNode);
        this.loggerEl.appendChild(node);
        this.scrollBottom();
        console.log(message);
    }

    debug(message){
        if(this.level >= this.AcceptedLevels['debug']){
            return null;
        }
        //no show on web screen;        
        console.debug(message);
    }
};

export default WebNodeMixins;