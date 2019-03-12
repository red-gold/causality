import { Assert } from 'causal-net.utils';
const RepresentationMixins = (BaseTensorClass)=> class extends BaseTensorClass{ 
    get Representation(){
        if(!this.representation){
            throw Error('representation is not set');
        }
        return this.representation;
    }
    set Representation(representation){
        if(!representation){
            throw Error(`expect representation instance, got ${embedding}`);
        }
        this.representation = representation;
    }

    async connect(){
        let configureLink = this.representationConfigureLink;
        if(super.connect){
            super.connect();
        }
        this.logger.log(`representation connect to ${configureLink}`);
        await this.Representation.connect(configureLink);
    }
    
    setRepresentationByConfig(netConfig){
        let configureLink = netConfig.Representation;
        Assert.beInstanceOf(configureLink, String);
        this.representationConfigureLink = configureLink;
    }
};
export default RepresentationMixins;    