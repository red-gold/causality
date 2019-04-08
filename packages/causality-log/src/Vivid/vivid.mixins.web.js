const VividWebMixins = (LogClass)=> class extends LogClass{
    connect(channel){
        this.currentBar = false;
    }
}
export default VividWebMixins;