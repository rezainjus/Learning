var Web3 = require('web3')

var url = 'https://1p7ENMTratsqhWuxVfnR63RhMZa:97dd35787a8e7aa649b9f6927f257ce4@eth2-beacon-mainnet.infura.io'

var web3 = new Web3(url)

var address = '0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8'
console.log(web3.fromWei(web3.eth.getBalance(web3.eth.address))) 
