import {default as JsonView} from './prettyJson';
const LogWebMixins = (LogClass)=> class extends LogClass{
    connect(target=null){
        
        let documentEl = target?document.getElementById(target.replace('#','')):document.body;
        this.target = target;
        let node = document.createElement("ul");
        node.style.cssText = "list-style-type: none;";
        documentEl.appendChild(node);
        this.frameEl = documentEl;
        this.loggerEl = documentEl.getElementsByTagName("ul")[0];
        this.colorCode = { debug: '#f1f1f1',
                             log: '#010101', 
                            warn: '#eae26e', 
                           error: '#ea6e78' };
    }
    scrollBottom(element=null){
        element = element || this.frameEl;
        element.scrollTop = element.scrollHeight - element.clientHeight;
    }

    plot(data){
        const Plot = this.Plot;
        if(!data.type){
            throw Error(`plot type is not defined in ${JSON.stringify(data)}`);
        }
        let node = document.createElement("li");
        node.style.cssText = 'border-bottom: 1px solid #dedede;';
        var date = new Date();
        node.innerHTML = `<p style="font-size: 12px; text-align:right">${date}</p>`;
        let { plotId } = data;
        if(!plotId){
            this.plotCounter = this.plotCounter!==undefined?this.plotCounter+1:0;
            plotId = `plot-${this.plotCounter}`;
            node.setAttribute("id", plotId);
            this.loggerEl.appendChild(node);
            Plot.connect('#'+plotId);
        }
        else{
            Plot.connect('#'+plotId);
        }
        Plot[data.type](data);
        return plotId;
    }

    async show(option={}){
        let {plotId} = option;
        return await this.Plot.show(option);
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
    log(message, style=''){
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
        jsonNode.style.cssText += ';'+style;
        node.appendChild(jsonNode);
        this.loggerEl.appendChild(node);
        this.scrollBottom();
        console.log(message);
    }

    debug(message){
        if(this.level >= this.AcceptedLevels['debug']){
            return null;
        }
        
        let style = 'color:' + this.colorCode['debug'];
        this.log(message, style);      
    }

    warn(message){
        if(this.level >= this.AcceptedLevels['warn']){
            return null;
        }
        let style = 'color:' + this.colorCode['warn'];
        this.log(message, style);
    }

    error(message){
        if(this.level >= this.AcceptedLevels['error']){
            return null;
        }
        let style = 'color:' + this.colorCode['error'];
        this.log(message, style);
    }
};

export default LogWebMixins;