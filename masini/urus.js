
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, instances);
  });

  


  let details = [];
  let imagine = document.querySelector('.imagineconfigurator')
  let culoare =  document.querySelector('.selectcolor');

  culoare.addEventListener('change',function() {
    console.log(culoare.value);

  })
  
  
  
  let interior =  document.querySelector('.selectinterior');

  interior.addEventListener('change',function() {
    console.log(interior.value);

  })
  
  
  let rims =  document.querySelector('.selectrim');

  rims.addEventListener('change',function() {
    console.log(rims.value);

  })
  
  

  

  let button = document.querySelector('.buynow');
  
  button.addEventListener('click', function(){
    let carSpec = {
      rim:rims.value ,
      color:culoare.value ,
      int:interior.value ,

    }

    details[0] =carSpec;
    console.log(details);

    Genereaza();



    function Genereaza(){

   
    if( details[0].rim ==="routhman" && details[0].int === "1" && details[0].color==="black"){
        imagine.src = "https://s3-eu-west-1.amazonaws.com/lamborghini.live.2dod.eu-west-1/AD_Personam/lamborghini/urus/2018/763fd336480227a2/c5efdc289dbc086e567b4b74922610405570883d_1920x1080.jpg";
    }
    if( details[0].rim ==="routhman" && details[0].int === "2" && details[0].color==="black"){
        imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/urus/2018/763fd336480227a2/42e5864135a9b5c4eb190684f5c0a7775d7fc212_1920x1080.jpg";
    }
    if(  details[0].rim ==="majestic" && details[0].int === "1" && details[0].color==="black"){
        imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/urus/2018/763fd336480227a2/6068dcf6e2547361a822c5349a9d53c62deeeca3_1920x1080.jpg";
    }
    if(  details[0].rim ==="majestic" && details[0].int === "2" && details[0].color==="black"){
        imagine.src = "https://s3-eu-west-1.amazonaws.com/lamborghini.live.2dod.eu-west-1/AD_Personam/lamborghini/urus/2018/763fd336480227a2/2741afa2e714095208c8592eab7532f1c25a09b3_1920x1080.jpg";
    }
    if(  details[0].rim ==="routhman" && details[0].int === "1" && details[0].color==="verde"){
        imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/urus/2018/763fd336480227a2/691ab677415db914ad01afd90fb6d5a5a37ce964_1920x1080.jpg";
    }
    if(  details[0].rim ==="routhman" && details[0].int === "2" && details[0].color==="verde"){
        imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/urus/2018/763fd336480227a2/f999afcfaf7da92b01f476f812eb0c854966d585_1920x1080.jpg";
    }
    if(  details[0].rim ==="majestic" && details[0].int === "1" && details[0].color==="verde"){
        imagine.src = "https://s3-eu-west-1.amazonaws.com/lamborghini.live.2dod.eu-west-1/AD_Personam/lamborghini/urus/2018/763fd336480227a2/21c295b96bb30ab4f6dc1edfaa5c844d2ac54844_1920x1080.jpg";
    }
    if(  details[0].rim ==="majestic" && details[0].int === "2" && details[0].color==="verde"){
        imagine.src = "https://s3-eu-west-1.amazonaws.com/lamborghini.live.2dod.eu-west-1/AD_Personam/lamborghini/urus/2018/763fd336480227a2/afe3e5c95fe816d80e3d073d2aa2fa97b6cd56c4_1920x1080.jpg";
    }
    if(  details[0].rim ==="routhman" && details[0].int === "1" && details[0].color==="blue"){
        imagine.src = "https://s3-eu-west-1.amazonaws.com/lamborghini.live.2dod.eu-west-1/AD_Personam/lamborghini/urus/2018/763fd336480227a2/444db48f1725ebf353b378db3d6ed784c906328a_1920x1080.jpg";
    }
    if(  details[0].rim ==="routhman" && details[0].int === "2" && details[0].color==="blue"){
        imagine.src = "https://s3-eu-west-1.amazonaws.com/lamborghini.live.2dod.eu-west-1/AD_Personam/lamborghini/urus/2018/763fd336480227a2/88b1f1a2f4b7cc54941b1dec0dc921ea8f2602bd_1920x1080.jpg";
    }
    if(  details[0].rim ==="majestic" && details[0].int === "1" && details[0].color==="blue"){
        imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/urus/2018/763fd336480227a2/02e6519ce14d8495212fedb8dc9de1896c2275d1_1920x1080.jpg";
    }
    if(  details[0].rim ==="majestic" && details[0].int === "2" && details[0].color==="blue"){
        imagine.src = "https://s3-eu-west-1.amazonaws.com/lamborghini.live.2dod.eu-west-1/AD_Personam/lamborghini/urus/2018/763fd336480227a2/133df5a9b417f7330d2402076bfccc7bd587c950_1920x1080.jpg";
    }

    }
  })





  let order = document.querySelector('.order');
  
  order.addEventListener('click', function(){
    let carSpec = {
      rim:rims.value ,
      color:culoare.value ,
      int:interior.value ,

    }

    details[0] =carSpec;
    console.log(details);
    Cumpara();


    function Cumpara(){
        let price2 = 0;
        let rimpric = 0;
        let interiorpric = 0;
        let colorpric = 0;

        let carPrice = {
            carprice: price2.value,
            rimprice: rimpric.value,
            interiorprice: interiorpric.value,
            colorprice: colorpric.value,
        }


     /*   if(details[0].type === "huracan"){
            carPrice.carprice = 176936;
        }
        if(details[0].type === "aventador"){
            carPrice.carprice = 317500;
        }

        
        if(details[0].type === "urus"){
            carPrice.carprice = 207999;
        } */

        if(details[0].rim === "majestic"){
            carPrice.rimprice = 6500;
        }
        if(details[0].rim === "routhman"){
            carPrice.rimprice = 8000;
        }
        if(details[0].color === "black"){
            carPrice.colorprice = 9000;
        }
        if(details[0].color === "verde"){
            carPrice.colorprice = 5000;
        }
        if(details[0].color === "blue"){
            carPrice.colorprice = 7000;
        }
      
        if(details[0].int=== "1"){
            carPrice.interiorprice = 10000;
        }
        if(details[0].int === "2"){
            carPrice.interiorprice = 22000;
        }

        
        

        function Genereaza(){
      
      
          if(  details[0].rim ==="routhman" && details[0].int === "1" && details[0].color==="black"){
            imagine.src = "https://s3-eu-west-1.amazonaws.com/lamborghini.live.2dod.eu-west-1/AD_Personam/lamborghini/urus/2018/763fd336480227a2/c5efdc289dbc086e567b4b74922610405570883d_1920x1080.jpg";
        }
        if(  details[0].rim ==="routhman" && details[0].int === "2" && details[0].color==="black"){
            imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/urus/2018/763fd336480227a2/42e5864135a9b5c4eb190684f5c0a7775d7fc212_1920x1080.jpg";
        }
        if(  details[0].rim ==="majestic" && details[0].int === "1" && details[0].color==="black"){
            imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/urus/2018/763fd336480227a2/6068dcf6e2547361a822c5349a9d53c62deeeca3_1920x1080.jpg";
        }
        if(  details[0].rim ==="majestic" && details[0].int === "2" && details[0].color==="black"){
            imagine.src = "https://s3-eu-west-1.amazonaws.com/lamborghini.live.2dod.eu-west-1/AD_Personam/lamborghini/urus/2018/763fd336480227a2/2741afa2e714095208c8592eab7532f1c25a09b3_1920x1080.jpg";
        }
        if(  details[0].rim ==="routhman" && details[0].int === "1" && details[0].color==="verde"){
            imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/urus/2018/763fd336480227a2/691ab677415db914ad01afd90fb6d5a5a37ce964_1920x1080.jpg";
        }
        if(  details[0].rim ==="routhman" && details[0].int === "2" && details[0].color==="verde"){
            imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/urus/2018/763fd336480227a2/f999afcfaf7da92b01f476f812eb0c854966d585_1920x1080.jpg";
        }
        if(  details[0].rim ==="majestic" && details[0].int === "1" && details[0].color==="verde"){
            imagine.src = "https://s3-eu-west-1.amazonaws.com/lamborghini.live.2dod.eu-west-1/AD_Personam/lamborghini/urus/2018/763fd336480227a2/21c295b96bb30ab4f6dc1edfaa5c844d2ac54844_1920x1080.jpg";
        }
        if(  details[0].rim ==="majestic" && details[0].int === "2" && details[0].color==="verde"){
            imagine.src = "https://s3-eu-west-1.amazonaws.com/lamborghini.live.2dod.eu-west-1/AD_Personam/lamborghini/urus/2018/763fd336480227a2/afe3e5c95fe816d80e3d073d2aa2fa97b6cd56c4_1920x1080.jpg";
        }
        if(  details[0].rim ==="routhman" && details[0].int === "1" && details[0].color==="blue"){
            imagine.src = "https://s3-eu-west-1.amazonaws.com/lamborghini.live.2dod.eu-west-1/AD_Personam/lamborghini/urus/2018/763fd336480227a2/444db48f1725ebf353b378db3d6ed784c906328a_1920x1080.jpg";
        }
        if(  details[0].rim ==="routhman" && details[0].int === "2" && details[0].color==="blue"){
            imagine.src = "https://s3-eu-west-1.amazonaws.com/lamborghini.live.2dod.eu-west-1/AD_Personam/lamborghini/urus/2018/763fd336480227a2/88b1f1a2f4b7cc54941b1dec0dc921ea8f2602bd_1920x1080.jpg";
        }
        if(  details[0].rim ==="majestic" && details[0].int === "1" && details[0].color==="blue"){
            imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/urus/2018/763fd336480227a2/02e6519ce14d8495212fedb8dc9de1896c2275d1_1920x1080.jpg";
        }
        if(  details[0].rim ==="majestic" && details[0].int === "2" && details[0].color==="blue"){
            imagine.src = "https://s3-eu-west-1.amazonaws.com/lamborghini.live.2dod.eu-west-1/AD_Personam/lamborghini/urus/2018/763fd336480227a2/133df5a9b417f7330d2402076bfccc7bd587c950_1920x1080.jpg";
        }
      
          }

          const template1 = document.getElementById("buynowlabel");
          
          template1.innerHTML = ` <p class="smecher">TOTAL PRICE: ${207999 + carPrice.rimprice + carPrice.colorprice + carPrice.interiorprice} €<p> `
          Genereaza();
          

          

         
         
        
    }
    
  })
