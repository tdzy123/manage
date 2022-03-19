
App = {
    web3Provider: null,
    contracts: {
      PotatoFarm: null
    },
    currentAddress: '',
    contractAddress: '0x73a3f115B4D6F210c5F27E046819d3ba7Db6Fad9',
    contractAbi: [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"AddComboLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"AddFarmTypeLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"intro","type":"address"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"AddUserLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"intro","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"indexed":false,"internalType":"uint256","name":"usdtPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"BuyComboLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"intro","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"indexed":false,"internalType":"uint256","name":"usdtPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"OpenBindBoxLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"value","type":"string"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"URI","type":"event"},{"inputs":[],"name":"USDT","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256[]","name":"_ids","type":"uint256[]"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_usdtPrice","type":"uint256"}],"name":"addCombo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"_name","type":"string"}],"name":"addFarmType","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"address","name":"_intro","type":"address"}],"name":"buyCombo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllCombo","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"uint256","name":"usdtPrice","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct PotatoFarm.Combo[]","name":"comboArr","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllFarmType","outputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct PotatoFarm.FarmType[]","name":"farmTypeArr","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getCombo","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"uint256","name":"usdtPrice","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct PotatoFarm.Combo","name":"combo","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getFarmType","outputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct PotatoFarm.FarmType","name":"farmType","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"intro","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"mintBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mintBear","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mintDog","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mintFox","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mintGun","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"_intro","type":"address"}],"name":"openBindBox","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"openBindUsdt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rootAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"setBindIds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setOpenBindUsdt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_receiveAddress","type":"address"}],"name":"setReceiveAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_sig","type":"uint256"}],"name":"setSig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newuri","type":"string"}],"name":"setURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userBoxIsBuy","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userComboAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userComboIsBuy","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}],
    initWeb3: async function () {
      if (window.ethereum) {
        App.web3Provider = window.ethereum
        web3 = new Web3(App.web3Provider);
        try {
          // await App.changeNetwork()
          await ethereum.enable()
        } catch (error) {
        }
      } else {
        if (window.web3) {
          App.web3Provider = web3.currentProvider
          web3 = new Web3(App.web3Provider);
        } else {
          App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
          web3 = new Web3(App.web3Provider);
        }
      }
      web3.eth.getAccounts((err, accounts) => {
        if (err) {
          return
        }
        App.currentAddress = accounts[0]
        return App.initContract();
      });
    },
    initContract: function () {
      App.contracts.PotatoFarm = new web3.eth.Contract(App.contractAbi, App.contractAddress);
      return App.bindEvents();
    },
    bindEvents: function () {
      $(document).on('change', '#select', App.selectFunction);
    },
    selectFunction: function () {
      let index = $('#select').val()
      let functionAbi = App.contractAbi[index]
      $('#' +functionAbi.name + 'Box').show().siblings().hide()

    },
    addCombo:async function (){
            let addCombo__id = $('#addCombo__id').val()
      let addCombo__ids = $('#addCombo__ids').val()
      let addCombo__amounts = $('#addCombo__amounts').val()
      let addCombo__amount = $('#addCombo__amount').val()
      let addCombo__usdtPrice = $('#addCombo__usdtPrice').val()
      
            let dataPotatoFarm = await App.contracts.PotatoFarm.methods.addCombo(addCombo__id,addCombo__ids,addCombo__amounts,addCombo__amount,addCombo__usdtPrice).send({from:App.currentAddress})
          },
          addFarmType:async function (){
            let addFarmType__id = $('#addFarmType__id').val()
      let addFarmType__name = $('#addFarmType__name').val()
      
            let dataPotatoFarm = await App.contracts.PotatoFarm.methods.addFarmType(addFarmType__id,addFarmType__name).send({from:App.currentAddress})
          },
          buyCombo:async function (){
            let buyCombo__id = $('#buyCombo__id').val()
      let buyCombo__intro = $('#buyCombo__intro').val()
      
            let dataPotatoFarm = await App.contracts.PotatoFarm.methods.buyCombo(buyCombo__id,buyCombo__intro).send({from:App.currentAddress})
          },
          initialize:async function (){
            
            let dataPotatoFarm = await App.contracts.PotatoFarm.methods.initialize().send({from:App.currentAddress})
          },
          mint:async function (){
            let mint_account = $('#mint_account').val()
      let mint_id = $('#mint_id').val()
      let mint_amount = $('#mint_amount').val()
      
            let dataPotatoFarm = await App.contracts.PotatoFarm.methods.mint(mint_account,mint_id,mint_amount).send({from:App.currentAddress})
          },
          mintBatch:async function (){
            let mintBatch_to = $('#mintBatch_to').val()
      let mintBatch_ids = $('#mintBatch_ids').val()
      let mintBatch_amounts = $('#mintBatch_amounts').val()
      
            let dataPotatoFarm = await App.contracts.PotatoFarm.methods.mintBatch(mintBatch_to,mintBatch_ids,mintBatch_amounts).send({from:App.currentAddress})
          },
          mintBear:async function (){
            let mintBear_account = $('#mintBear_account').val()
      let mintBear_amount = $('#mintBear_amount').val()
      
            let dataPotatoFarm = await App.contracts.PotatoFarm.methods.mintBear(mintBear_account,mintBear_amount).send({from:App.currentAddress})
          },
          mintDog:async function (){
            let mintDog_account = $('#mintDog_account').val()
      let mintDog_amount = $('#mintDog_amount').val()
      
            let dataPotatoFarm = await App.contracts.PotatoFarm.methods.mintDog(mintDog_account,mintDog_amount).send({from:App.currentAddress})
          },
          mintFox:async function (){
            let mintFox_account = $('#mintFox_account').val()
      let mintFox_amount = $('#mintFox_amount').val()
      
            let dataPotatoFarm = await App.contracts.PotatoFarm.methods.mintFox(mintFox_account,mintFox_amount).send({from:App.currentAddress})
          },
          mintGun:async function (){
            let mintGun_account = $('#mintGun_account').val()
      let mintGun_amount = $('#mintGun_amount').val()
      
            let dataPotatoFarm = await App.contracts.PotatoFarm.methods.mintGun(mintGun_account,mintGun_amount).send({from:App.currentAddress})
          },
          name:async function (){
            
            let dataPotatoFarm = await App.contracts.PotatoFarm.methods.name().send({from:App.currentAddress})
          },
          openBindBox:async function (){
            let openBindBox__intro = $('#openBindBox__intro').val()
      
            let dataPotatoFarm = await App.contracts.PotatoFarm.methods.openBindBox(openBindBox__intro).send({from:App.currentAddress})
          },
          renounceOwnership:async function (){
            
            let dataPotatoFarm = await App.contracts.PotatoFarm.methods.renounceOwnership().send({from:App.currentAddress})
          },
          safeBatchTransferFrom:async function (){
            let safeBatchTransferFrom_from = $('#safeBatchTransferFrom_from').val()
      let safeBatchTransferFrom_to = $('#safeBatchTransferFrom_to').val()
      let safeBatchTransferFrom_ids = $('#safeBatchTransferFrom_ids').val()
      let safeBatchTransferFrom_amounts = $('#safeBatchTransferFrom_amounts').val()
      let safeBatchTransferFrom_data = $('#safeBatchTransferFrom_data').val()
      
            let dataPotatoFarm = await App.contracts.PotatoFarm.methods.safeBatchTransferFrom(safeBatchTransferFrom_from,safeBatchTransferFrom_to,safeBatchTransferFrom_ids,safeBatchTransferFrom_amounts,safeBatchTransferFrom_data).send({from:App.currentAddress})
          },
          safeTransferFrom:async function (){
            let safeTransferFrom_from = $('#safeTransferFrom_from').val()
      let safeTransferFrom_to = $('#safeTransferFrom_to').val()
      let safeTransferFrom_id = $('#safeTransferFrom_id').val()
      let safeTransferFrom_amount = $('#safeTransferFrom_amount').val()
      let safeTransferFrom_data = $('#safeTransferFrom_data').val()
      
            let dataPotatoFarm = await App.contracts.PotatoFarm.methods.safeTransferFrom(safeTransferFrom_from,safeTransferFrom_to,safeTransferFrom_id,safeTransferFrom_amount,safeTransferFrom_data).send({from:App.currentAddress})
          },
          setApprovalForAll:async function (){
            let setApprovalForAll_operator = $('#setApprovalForAll_operator').val()
      let setApprovalForAll_approved = $('#setApprovalForAll_approved').val()
      
            let dataPotatoFarm = await App.contracts.PotatoFarm.methods.setApprovalForAll(setApprovalForAll_operator,setApprovalForAll_approved).send({from:App.currentAddress})
          },
          setBindIds:async function (){
            let setBindIds_ids = $('#setBindIds_ids').val()
      
            let dataPotatoFarm = await App.contracts.PotatoFarm.methods.setBindIds(setBindIds_ids).send({from:App.currentAddress})
          },
          setOpenBindUsdt:async function (){
            let setOpenBindUsdt__price = $('#setOpenBindUsdt__price').val()
      
            let dataPotatoFarm = await App.contracts.PotatoFarm.methods.setOpenBindUsdt(setOpenBindUsdt__price).send({from:App.currentAddress})
          },
          setReceiveAddress:async function (){
            let setReceiveAddress__receiveAddress = $('#setReceiveAddress__receiveAddress').val()
      
            let dataPotatoFarm = await App.contracts.PotatoFarm.methods.setReceiveAddress(setReceiveAddress__receiveAddress).send({from:App.currentAddress})
          },
          setSig:async function (){
            let setSig__sig = $('#setSig__sig').val()
      
            let dataPotatoFarm = await App.contracts.PotatoFarm.methods.setSig(setSig__sig).send({from:App.currentAddress})
          },
          setURI:async function (){
            let setURI_newuri = $('#setURI_newuri').val()
      
            let dataPotatoFarm = await App.contracts.PotatoFarm.methods.setURI(setURI_newuri).send({from:App.currentAddress})
          },
          symbol:async function (){
            
            let dataPotatoFarm = await App.contracts.PotatoFarm.methods.symbol().send({from:App.currentAddress})
          },
          transferOwnership:async function (){
            let transferOwnership_newOwner = $('#transferOwnership_newOwner').val()
      
            let dataPotatoFarm = await App.contracts.PotatoFarm.methods.transferOwnership(transferOwnership_newOwner).send({from:App.currentAddress})
          },
          
  };
  
  (function () {
     App.initWeb3();
  })();
  
  
