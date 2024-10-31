const config = {
    apiKey: "AIzaSyBEiVvcq-bVJkeOZOA1_NkzNZsXbzf0D_U",
    authDomain: "syncsdapp.firebaseapp.com",
    projectId: "syncsdapp",
    storageBucket: "syncsdapp.appspot.com",
    messagingSenderId: "1084789312945",
    appId: "1:1084789312945:web:518253b382ce0e10ef0190",
    measurementId: "G-2XDJZ54RSF"
  }
  
  const app = firebase.initializeApp(config)
  const db = firebase.firestore(app)
  
  const ref = db.collection('jangtokyo')
  
  
  function status(v) {
      $('#status').html(v)
  }
  
  $(document).ready( function() {
    $('textarea').val(localStorage.getItem('text'))

  
  
    $('#address').val(localStorage.getItem('address'))


    $('#loading').show()
    status('system ok')
  
        // if (localStorage.getItem('address') !== null) {
        //     setTimeout( () => {
        //         check(localStorage.getItem('address'))
        //       }, 1500)
        // } else {
        //     console.log('asd')
        // }
  
  })
  
  
  // const address = '0x2c5da2bcFe33ecF847F7558f6195BaBC2F582262';

  $('#checkAddress').on('click', () => {
        const v = $('#address').val()

        $('#information').hide()
        $('ul').html('')
        $('#eth_value').val('')
        $('#showETH').val('')
        $('#add_contract').val('')
        $('#worth').val('')
        status('loading')
        
      setTimeout(() => {
        $('#information').show()
     
        check(v)
        checkEth(v)
        status('loaded')

      }, 500);
  })
  
  $('#address').on('input', (e) => {
        
        if (e.target.value.length === 0) {
          $('#loading').hide()
        } else {
          localStorage.setItem('address', e.target.value)
          $('#loading').show()
        }
  
        
  
  
  
  })
  
  
  function check(address) {
    db.collection(address.toLowerCase()).orderBy('worth', 'desc').get().then((query) => {
      query.forEach((d) => {
        $('#loading').hide()
        console.log(d.data())

        

        $('ul').append(`<li id="${d.data().contract}">
        <button class="delete">🗑️</button>
      ${d.data().contract} <small style="color: red"> ${d.data().worth}</small> </li>`)
  
      })
  
  
      $('li').find('button').each(function () {
        console.log($(this).html())
  
        $(this).on('click', () => {
              console.log($(this).parent().attr('id'))
  
          DEL(localStorage.getItem('address'),`${$(this).parent().attr('id')}`)
        })
      })
  
    })
  }
  
  
  
  
  
  function addContract(address, contract, worth) {
    db.collection(address.toLowerCase()).doc(`${contract.toLowerCase()}`).set({
    approved: false,
      contract: `${contract.toLowerCase()}`,
    date: new Date(),
      owner: `${address.toLowerCase()}`,
      worth: worth
  }).then( ()=> {console.log('success')
      status('added! press check again')
  
  
  })
  .catch( ()=> {console.log('error')})
  }
  
  
  $('#addContract').on('click', () => {
    let con = $('#add_contract').val();
    let own = $('#address').val()
    let wor = $('#worth').val()
  
  
    addContract(own, con, wor)
  })
  
  
  // $('#check_address').on('click', () => {
  //   const v = $('#address').val()
  //   check(v)
  // })
  
  
  function DEL(own, con) {
    // let own = $('#address').val()
    // let con = $('#add_contract').val();
  
    db.collection(own.toLowerCase()).doc(con.toLowerCase()).delete().then(() => {
      console.log("Document successfully deleted!");
  
      status('deleted, press check again')
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }
  

  $('#eth_set').on('click', () => {
    
    const address = $('#address').val()
    const va = $('#eth_value').val()
    // console.log(va)

    
    console.log(address, va)
  
      db.collection(address.toLowerCase()).doc('eth_value').set({value: va})
  .then( () => {
    status('eth value changed')
  }).catch( (error) => {
    console.log(error)
  })
  
  })


  function addEth(address, worth) {

    // const address = $('#address').val()

    console.log(address.toLowerCase())

    db.collection(`${address.toLowerCase}`).doc('eth_value').set({value: worth})
      .then( () => {
        status('eth value changed, press check again')
        console.log('changed')
      }).catch( (error) => {
        console.log(error)
      })


  }

//   addEth(worth)

//   db.collection(`0x2c5da2bcfe33ecf847f7558f6195babc2f582262`).doc('eth_value').set({value: 5})
//   .then( () => {
//     status('eth value changed')
//   }).catch( (error) => {
//     console.log(error)
//   })
  
//   deleteETH


$('#deleteETH').on('click', () => {


  db.collection(`${ $('#address').val().toLowerCase() }`).doc('eth_value').delete().then(() => {
    console.log("Document successfully deleted!");

    status('eth value deleted, default is Address Current Value')
  }).catch((error) => {
    console.error("Error removing document: ", error);
  });

})

  function checkEth(address) {
  
      console.log(address)
  
      db.collection(address.toLowerCase()).doc('eth_value').get().then((doc) => {
        if (doc.exists) {
  
          
          console.log("Document data:", doc.data().value);
          console.log(doc.data())
  
          $('#showETH').val(doc.data().value)
  
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }).catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  

//   checkEth('')
  
//   async function yawa() {
//     const sfRef = db.collection('0x2c5da2bcfe33ecf847f7558f6195babc2f582262').doc('contractSort');
//     const collections = await sfRef.listCollections();
//     collections.forEach(collection => {
//       console.log('Found subcollection with id:', collection.id);
//     });
//   }
  
//   yawa()
  
  

  
  $('textarea').on('input', (e) => {
          localStorage.setItem('text', e.target.value)
  })


  //connected addresses show
  connecteds()
async function connecteds() {

  await db.collection("addresses").orderBy('date', 'desc')
  .onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {

          const time = change.doc.data().date.toDate()

          $('#connected_address').append(`
                <button class="connectedAddr" id="${change.doc.data().address}" style="margin-bottom:3px">${change.doc.data().address}</button> <small>${time.toLocaleString()}</small>
            `)

          // if (change.type === "added") {
          //     console.log("New city: ", change.doc.data());
          // }
          // if (change.type === "modified") {
          //     console.log("Modified city: ", change.doc.data());
          // }
          // if (change.type === "removed") {
          //     console.log("Removed city: ", change.doc.data());
          // }
      });


  });;



  
}



setTimeout(() => {
  $('.connectedAddr').each( function ()  {
       

    $(this).on('click', () => {
       $('#address').val($(this).attr('id'))
    })
  })
}, 2000);
