  alert("ASU")
    fetch("https://shopee.co.id/api/v4/product/get_shop_info?shopid=44240271", { 
      mode: 'cors'
    })
    .then( ( response ) => console.log( response) )        
     .catch( ( response ) => console.log( response ) )
