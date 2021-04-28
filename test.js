const BlockClass = require('./src/block.js');
const SHA256 = require('crypto-js/sha256');
const Blockchain = require('./src/blockchain.js');

(async () => {    
    let blockchain = new Blockchain.Blockchain()
    await blockchain.initializeChain()
    console.log(`chainHeight: ${await blockchain.getChainHeight()}`)    
        
    await blockchain.submitStar(
        "mhiJzNTbqW3VVLPMfnWBHqM5h973fU6bXW",
        "mhiJzNTbqW3VVLPMfnWBHqM5h973fU6bXW:0:starRegistry",
        "IKW5urf8N38VtXVrMRvxVZ6IUIwW9I1vlOFP3NTLDJRCI1ib3ge6EMJSjnzkI0mH5NEw+TBz9HWp2cnzXrscxcc=",
        {
            "dec": "68 52 56.9",
            "ra": "16h 29m 1.0s",
            "story": "Testing the story 4"
        }
    )

    await blockchain.submitStar(
        "mhiJzNTbqW3VVLPMfnWBHqM5h973fU6bXW",
        "mhiJzNTbqW3VVLPMfnWBHqM5h973fU6bXW:1:starRegistry",
        "HybXCk2g5/u/Z4TaVKC9R/h54+8eDyvYlh2SN6H+toamFQsH7cekamnI1uF+LarWZTxLD35qoCVo4k3CAcagsy8=",
        {
            "dec": "68 52 56.9",
            "ra": "16h 29m 1.0s",
            "story": "Testing the story 5"
        }
    )
    //console.log(submitOutput)

    console.log(`chainHeight: ${await blockchain.getChainHeight()}`)
    console.log(await (await blockchain.getBlockByHeight(1)).getBData())
    console.log(`block valid: ${await (await blockchain.getBlockByHeight(1)).validate()}`)
    console.log(blockchain.chain)
    console.log(`chain valid: ${await blockchain.validateChain()}`)

    console.log(await blockchain.getStarsByWalletAddress('mhiJzNTbqW3VVLPMfnWBHqM5h973fU6bXW'))
    
})();
