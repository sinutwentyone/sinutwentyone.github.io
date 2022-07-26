  alert("ASU")
    fetch("https://shopee.co.id/api/v4/product/get_shop_info?shopid=44240271", { 
      headers: {
        "Content-Type": "application/json"
      },
      referrerPolicy: 'no-referrer',
      mode: 'cors'
    })
    .then( ( response ) => console.log( response) )        
     .catch( ( response ) => console.log( response ) )
