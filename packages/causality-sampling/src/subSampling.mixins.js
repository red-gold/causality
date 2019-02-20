const SubSamplingMixins = (BaseSamplingClass) => class extends BaseSamplingClass{
    subSampling(samplingSize, candidateList, replacable=true){
        const R = this.R, Random = this.Random;
        let candidates = Array.isArray(candidateList)?R.clone(candidateList):R.range(0, candidateList);
        if(candidates.length === 0){
            throw Error('candidate length should be positive');
        }
        let samples = [], takenIdxs = R.clone(candidates);
        const GenNewCandidateIdx = ()=>Random.int(0, candidates.length-1);
        while(samples.length < samplingSize){
            let idx = GenNewCandidateIdx();
            if(!replacable && takenIdxs[idx]===null){
                continue;
            }
            samples = [...samples, candidates[idx]];
            if(!replacable){
                takenIdxs[idx]=null;//non replaceable
            }
        }    
        return samples;
    }
};
export default SubSamplingMixins;