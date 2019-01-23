const StorageMixins = (BaseClass)=> class extends BaseClass{
    async storageSummary(){
        return await this.storage.getFileList();
    }
    set Storage(storage){
        this.storage = storage;
    }

    get Storage(){
        return this.storage;
    }
};
export default StorageMixins;