const NegativeSamplingMixins = (BaseSamplingClass)=> class extends BaseSamplingClass{
    negSampling(negativeSize, positiveSamples, candidateProbs, replacable=true){
        const R = this.R, Random = this.Random;
        if(!candidateProbs || candidateProbs.length === 0){
            throw Error('candidate length should be positive');
        }
        let seletionProbs = R.reduce((selectionProbs, pidx)=>{
                                selectionProbs[pidx] = Infinity;//positive candidate never be choosed
                                return selectionProbs;
                            }, R.clone(candidateProbs), positiveSamples);
        let samples = [], takenIdxs = R.clone(seletionProbs);
        const GenNewCandidateIdx = ()=>Random.int(0, seletionProbs.length-1);
        const SelectIfHighProb = (prob)=>{
            let rand = Random.float();
            return rand>prob;
        };
        while(samples.length < negativeSize){
            let idx = GenNewCandidateIdx();
            let selected = SelectIfHighProb(seletionProbs[idx]);
            if(!selected){
                continue;
            }
            if(!replacable && takenIdxs[idx]===null){
                continue;
            }
            samples = [...samples, idx];
            if(!replacable){
                takenIdxs[idx]=null;//non replaceable
            }
        }    
        return samples;
    }
};
export default NegativeSamplingMixins;