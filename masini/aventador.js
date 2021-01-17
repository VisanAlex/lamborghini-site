
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




    if(   details[0].rim ==="majestic" && details[0].int === "1" && details[0].color==="black"){
        imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/afddda6f74748394b4df7b317440806da4b0ba21_1920x1080.jpg";
    }
    if(   details[0].rim ==="majestic" && details[0].int === "2" && details[0].color==="black"){
        imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/c4f6a0b4781b9170579cd6bc93344b6bb7c6d8a9_1920x1080.jpg";
    }
    if(   details[0].rim ==="routhman" && details[0].int === "1" && details[0].color==="black"){
        imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/35f77f7af8d9abf8a05b09bf0559043c9f455c4a_1920x1080.jpg";
    }
    if(   details[0].rim ==="routhman" && details[0].int === "2" && details[0].color==="black"){
        imagine.src = "https://s3-eu-west-1.amazonaws.com/lamborghini.live.2dod.eu-west-1/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/ba1b45cd0f69ebae4c2d640a723a10e64711faf0_1920x1080.jpg";
    }
    if(   details[0].rim ==="majestic" && details[0].int === "1" && details[0].color==="verde"){
        imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/171244401a02609a61fb5b5950426eb55a680543_1920x1080.jpg";
    }
    if(   details[0].rim ==="majestic" && details[0].int === "2" && details[0].color==="verde"){
        imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/5f27abad9abd0cf6bef21036c0d19e647e0d272a_1920x1080.jpg";
    }
    if(   details[0].rim ==="routhman" && details[0].int === "2" && details[0].color==="verde"){
        imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/3321bea5c4df7fe3d16b7cd32e55f3076df7b484_1920x1080.jpg";
    }
    if(   details[0].rim ==="routhman" && details[0].int === "1" && details[0].color==="verde"){
        imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/59e7704dd811bad98b287e342f05254c5c042712_1920x1080.jpg";
    }
    if(   details[0].rim ==="majestic" && details[0].int === "1" && details[0].color==="blue"){
        imagine.src = "https://s3-eu-west-1.amazonaws.com/lamborghini.live.2dod.eu-west-1/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/80ffa56bc21cedbdc0a448617024d1ce1efc01cd_1920x1080.jpg";
    }
    if(   details[0].rim ==="majestic" && details[0].int === "2" && details[0].color==="blue"){
        imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/6f642ad8b0de1251bed93328aa64caa891003ab8_1920x1080.jpg";
    }
    if(   details[0].rim ==="routhman" && details[0].int === "1" && details[0].color==="blue"){
        imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/df4a58e1fc0aef6d6c7ad21bea6fc9ea5bec1ce8_1920x1080.jpg";
    }
    if(   details[0].rim ==="routhman" && details[0].int === "2" && details[0].color==="blue"){
        imagine.src = "https://s3-eu-west-1.amazonaws.com/lamborghini.live.2dod.eu-west-1/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/ee0f2348038e88abae11692d0933ac9b86f6c21d_1920x1080.jpg";
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
            
            rimprice: rimpric.value,
            interiorprice: interiorpric.value,
            colorprice: colorpric.value,
        }


      /*  if(details[0].type === "huracan"){
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

        
      
      
      
          if(   details[0].rim ==="majestic" && details[0].int === "1" && details[0].color==="black"){
              imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/afddda6f74748394b4df7b317440806da4b0ba21_1920x1080.jpg";
          }
          if(   details[0].rim ==="majestic" && details[0].int === "2" && details[0].color==="black"){
              imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/c4f6a0b4781b9170579cd6bc93344b6bb7c6d8a9_1920x1080.jpg";
          }
          if(   details[0].rim ==="routhman" && details[0].int === "1" && details[0].color==="black"){
              imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/35f77f7af8d9abf8a05b09bf0559043c9f455c4a_1920x1080.jpg";
          }
          if(   details[0].rim ==="routhman" && details[0].int === "2" && details[0].color==="black"){
              imagine.src = "https://s3-eu-west-1.amazonaws.com/lamborghini.live.2dod.eu-west-1/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/ba1b45cd0f69ebae4c2d640a723a10e64711faf0_1920x1080.jpg";
          }
          if(   details[0].rim ==="majestic" && details[0].int === "1" && details[0].color==="verde"){
              imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/171244401a02609a61fb5b5950426eb55a680543_1920x1080.jpg";
          }
          if(   details[0].rim ==="majestic" && details[0].int === "2" && details[0].color==="verde"){
              imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/5f27abad9abd0cf6bef21036c0d19e647e0d272a_1920x1080.jpg";
          }
          if(   details[0].rim ==="routhman" && details[0].int === "2" && details[0].color==="verde"){
              imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/3321bea5c4df7fe3d16b7cd32e55f3076df7b484_1920x1080.jpg";
          }
          if(   details[0].rim ==="routhman" && details[0].int === "1" && details[0].color==="verde"){
              imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/59e7704dd811bad98b287e342f05254c5c042712_1920x1080.jpg";
          }
          if(   details[0].rim ==="majestic" && details[0].int === "1" && details[0].color==="blue"){
              imagine.src = "https://s3-eu-west-1.amazonaws.com/lamborghini.live.2dod.eu-west-1/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/80ffa56bc21cedbdc0a448617024d1ce1efc01cd_1920x1080.jpg";
          }
          if(   details[0].rim ==="majestic" && details[0].int === "2" && details[0].color==="blue"){
              imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/6f642ad8b0de1251bed93328aa64caa891003ab8_1920x1080.jpg";
          }
          if(   details[0].rim ==="routhman" && details[0].int === "1" && details[0].color==="blue"){
              imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/df4a58e1fc0aef6d6c7ad21bea6fc9ea5bec1ce8_1920x1080.jpg";
          }
          if(   details[0].rim ==="routhman" && details[0].int === "2" && details[0].color==="blue"){
              imagine.src = "https://s3-eu-west-1.amazonaws.com/lamborghini.live.2dod.eu-west-1/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/ee0f2348038e88abae11692d0933ac9b86f6c21d_1920x1080.jpg";
          }
      
    
      
          }

          const template1 = document.getElementById("buynowlabel");
          
          template1.innerHTML = ` <p class="smecher">TOTAL PRICE: ${317500 + carPrice.rimprice + carPrice.colorprice + carPrice.interiorprice} €<p> `
          Genereaza();
          

          

         
         
        
    }
    
  })
