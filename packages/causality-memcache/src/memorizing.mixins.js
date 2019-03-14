
const MemorizingMixins = (BaseMemCacheClass)=> class extends BaseMemCacheClass{
    /**
     * 
     * @experiment
     * @param { String|Number } memorySlotIndex - memory slot index
     * @returns
     */
    async read(memorySlotIndex){
        const GetFromMemory = (memorySlotIndex)=>{
            return this.getItem(memorySlotIndex)
                        .then(data=>data[memorySlotIndex])
                        .catch(err => null);
        };
        return await GetFromMemory(memorySlotIndex);
    }
    /**
     *
     *
     * @param {*} memorySlotIndex
     * @param {*} value
     * @returns
     */
    async write(memorySlotIndex, value){
        return await this.setItem(memorySlotIndex, value);
    }
    /**
     *
     *
     * @param {*} slotIdxs
     * @returns
     */
    async recall(slotIdxs){
        let memory = [];
        for(let slotIdx of slotIdxs){
            memory.push(await this.read(slotIdx));
        }
        return memory;
    }
};
export default MemorizingMixins;