import { default as CausalNetEmbedding } from '../src/causalNetEmbedding';
/** @test { CausalNetEmbedding } */
test('UniversalEmbedding instance should be okay', async ()=>{
    expect(CausalNetEmbedding).toBeDefined();
})
