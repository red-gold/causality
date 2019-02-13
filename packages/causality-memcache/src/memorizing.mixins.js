const MemorizingMixins = (BaseMemCacheClass)=> class extends BaseMemCacheClass{
    async read(memorySlotIndex){
        const GetFromMemory = (memorySlotIndex)=>{
            return this.getItem(memorySlotIndex)
                        .then(data=>data[memorySlotIndex])
                        .catch(err => null);
        };
        return await GetFromMemory(memorySlotIndex);
    }
    async write(memorySlotIndex, value){
        return await this.setItem(memorySlotIndex, value);
    }
};
export default MemorizingMixins;