
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
  
  
  let car =  document.querySelector('.selectcars');

  car.addEventListener('change',function() {
    console.log(car.value);

  })
  

  let button = document.querySelector('.buynow');
  
  button.addEventListener('click', function(){
    let carSpec = {
      type:car.value,
      rim:rims.value ,
      color:culoare.value ,
      int:interior.value ,

    }

    details[0] =carSpec;
    console.log(details);

    Genereaza();



    function Genereaza(){

      if(details[0].type==="huracan" && details[0].rim ==="majestic" && details[0].int === "1" && details[0].color==="black"){
          imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/f8d63ff85a90fd178527f67a7d39c2e8054bbc11_1920x1080.jpg";
      }
      if(details[0].type==="huracan" && details[0].rim ==="majestic" && details[0].int === "2" && details[0].color==="black"){
          imagine.src = "https://s3-eu-west-1.amazonaws.com/lamborghini.live.2dod.eu-west-1/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/9a18fa0dbfc8ac479878391acae0e39716ae6333_1920x1080.jpg";
      }
      if(details[0].type==="huracan" && details[0].rim ==="routhman" && details[0].int === "1" && details[0].color==="black"){
          imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/d4f597bc71c25d42d8cd3e3582847ba23f18d15d_1920x1080.jpg";
      }
      if(details[0].type==="huracan" && details[0].rim ==="routhman" && details[0].int === "2" && details[0].color==="black"){
          imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/f9428fa922665af0be45282fc59446c04335f08d_1920x1080.jpg";
      }
      if(details[0].type==="huracan" && details[0].rim ==="majestic" && details[0].int === "1" && details[0].color==="verde"){
          imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/4ee3eb91c6e9c44baf609b4cc1c22ed5843b3247_1920x1080.jpg";
      }
      if(details[0].type==="huracan" && details[0].rim ==="majestic" && details[0].int === "2" && details[0].color==="verde"){
          imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/822df4c0b0d83aafbc64450063ce80f0bb859381_1920x1080.jpg";
      }
      if(details[0].type==="huracan" && details[0].rim ==="routhman" && details[0].int === "1" && details[0].color==="verde"){
          imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/c76821c2443ac9f0b5a36a0708ec8abe6cd5266c_1920x1080.jpg";
      }
      if(details[0].type==="huracan" && details[0].rim ==="routhman" && details[0].int === "2" && details[0].color==="verde"){
          imagine.src = "https://s3-eu-west-1.amazonaws.com/lamborghini.live.2dod.eu-west-1/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/a770b9efd0f7029c68f2c1027a477962af0270c8_1920x1080.jpg";
      }
      if(details[0].type==="huracan" && details[0].rim ==="majestic" && details[0].int === "1" && details[0].color==="blue"){
          imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/cbb58e866dfee8d4f6c8520f605fe376b1b413be_1920x1080.jpg";
      }
      if(details[0].type==="huracan" && details[0].rim ==="majestic" && details[0].int === "2" && details[0].color==="blue"){
          imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/50f769eba4df3cd30e663c329e4ea51bcbb859dd_1920x1080.jpg";
      }
      if(details[0].type==="huracan" && details[0].rim ==="routhman" && details[0].int === "1" && details[0].color==="blue"){
          imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/577e78689b63044f750b5c383aed81805e6f3afe_1920x1080.jpg";
      }
      if(details[0].type==="huracan" && details[0].rim ==="routhman" && details[0].int === "2" && details[0].color==="blue"){
          imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/69c5c2508c0e83f68b50680043747214ad52a7b6_1920x1080.jpg";
      }
    
      






    if(details[0].type==="aventador" && details[0].rim ==="majestic" && details[0].int === "1" && details[0].color==="black"){
        imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/afddda6f74748394b4df7b317440806da4b0ba21_1920x1080.jpg";
    }
    if(details[0].type==="aventador" && details[0].rim ==="majestic" && details[0].int === "2" && details[0].color==="black"){
        imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/c4f6a0b4781b9170579cd6bc93344b6bb7c6d8a9_1920x1080.jpg";
    }
    if(details[0].type==="aventador" && details[0].rim ==="routhman" && details[0].int === "1" && details[0].color==="black"){
        imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/35f77f7af8d9abf8a05b09bf0559043c9f455c4a_1920x1080.jpg";
    }
    if(details[0].type==="aventador" && details[0].rim ==="routhman" && details[0].int === "2" && details[0].color==="black"){
        imagine.src = "https://s3-eu-west-1.amazonaws.com/lamborghini.live.2dod.eu-west-1/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/ba1b45cd0f69ebae4c2d640a723a10e64711faf0_1920x1080.jpg";
    }
    if(details[0].type==="aventador" && details[0].rim ==="majestic" && details[0].int === "1" && details[0].color==="verde"){
        imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/171244401a02609a61fb5b5950426eb55a680543_1920x1080.jpg";
    }
    if(details[0].type==="aventador" && details[0].rim ==="majestic" && details[0].int === "2" && details[0].color==="verde"){
        imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/5f27abad9abd0cf6bef21036c0d19e647e0d272a_1920x1080.jpg";
    }
    if(details[0].type==="aventador" && details[0].rim ==="routhman" && details[0].int === "2" && details[0].color==="verde"){
        imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/3321bea5c4df7fe3d16b7cd32e55f3076df7b484_1920x1080.jpg";
    }
    if(details[0].type==="aventador" && details[0].rim ==="routhman" && details[0].int === "1" && details[0].color==="verde"){
        imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/59e7704dd811bad98b287e342f05254c5c042712_1920x1080.jpg";
    }
    if(details[0].type==="aventador" && details[0].rim ==="majestic" && details[0].int === "1" && details[0].color==="blue"){
        imagine.src = "https://s3-eu-west-1.amazonaws.com/lamborghini.live.2dod.eu-west-1/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/80ffa56bc21cedbdc0a448617024d1ce1efc01cd_1920x1080.jpg";
    }
    if(details[0].type==="aventador" && details[0].rim ==="majestic" && details[0].int === "2" && details[0].color==="blue"){
        imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/6f642ad8b0de1251bed93328aa64caa891003ab8_1920x1080.jpg";
    }
    if(details[0].type==="aventador" && details[0].rim ==="routhman" && details[0].int === "1" && details[0].color==="blue"){
        imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/df4a58e1fc0aef6d6c7ad21bea6fc9ea5bec1ce8_1920x1080.jpg";
    }
    if(details[0].type==="aventador" && details[0].rim ==="routhman" && details[0].int === "2" && details[0].color==="blue"){
        imagine.src = "https://s3-eu-west-1.amazonaws.com/lamborghini.live.2dod.eu-west-1/AD_Personam/lamborghini/aventador/2017/8850b237a5da38dd/ee0f2348038e88abae11692d0933ac9b86f6c21d_1920x1080.jpg";
    }








    if(details[0].type==="urus" && details[0].rim ==="majestic" && details[0].int === "1" && details[0].color==="black"){
      imagine.src = "https://s3-eu-west-1.amazonaws.com/lamborghini.live.2dod.eu-west-1/AD_Personam/lamborghini/urus/2018/763fd336480227a2/c5efdc289dbc086e567b4b74922610405570883d_1920x1080.jpg";
  }
  if(details[0].type==="urus" && details[0].rim ==="majestic" && details[0].int === "2" && details[0].color==="black"){
      imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/urus/2018/763fd336480227a2/42e5864135a9b5c4eb190684f5c0a7775d7fc212_1920x1080.jpg";
  }
  if(details[0].type==="urus" && details[0].rim ==="routhman" && details[0].int === "1" && details[0].color==="black"){
      imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/urus/2018/763fd336480227a2/6068dcf6e2547361a822c5349a9d53c62deeeca3_1920x1080.jpg";
  }
  if(details[0].type==="urus" && details[0].rim ==="routhman" && details[0].int === "2" && details[0].color==="black"){
      imagine.src = "https://s3-eu-west-1.amazonaws.com/lamborghini.live.2dod.eu-west-1/AD_Personam/lamborghini/urus/2018/763fd336480227a2/2741afa2e714095208c8592eab7532f1c25a09b3_1920x1080.jpg";
  }
  if(details[0].type==="urus" && details[0].rim ==="majestic" && details[0].int === "1" && details[0].color==="verde"){
      imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/urus/2018/763fd336480227a2/691ab677415db914ad01afd90fb6d5a5a37ce964_1920x1080.jpg";
  }
  if(details[0].type==="urus" && details[0].rim ==="majestic" && details[0].int === "2" && details[0].color==="verde"){
      imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/urus/2018/763fd336480227a2/f999afcfaf7da92b01f476f812eb0c854966d585_1920x1080.jpg";
  }
  if(details[0].type==="urus" && details[0].rim ==="routhman" && details[0].int === "1" && details[0].color==="verde"){
      imagine.src = "https://s3-eu-west-1.amazonaws.com/lamborghini.live.2dod.eu-west-1/AD_Personam/lamborghini/urus/2018/763fd336480227a2/2b6a4bc06126c9842c60ca72050a0ef465efa23a_1920x1080.jpg";
  }
  if(details[0].type==="urus" && details[0].rim ==="routhman" && details[0].int === "2" && details[0].color==="verde"){
      imagine.src = "https://s3-eu-west-1.amazonaws.com/lamborghini.live.2dod.eu-west-1/AD_Personam/lamborghini/urus/2018/763fd336480227a2/afe3e5c95fe816d80e3d073d2aa2fa97b6cd56c4_1920x1080.jpg";
  }
  if(details[0].type==="urus" && details[0].rim ==="majestic" && details[0].int === "1" && details[0].color==="blue"){
      imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/urus/2017/9a316d3f7715d8e8/cbb58e866dfee8d4f6c8520f605fe376b1b413be_1920x1080.jpg";
  }
  if(details[0].type==="urus" && details[0].rim ==="majestic" && details[0].int === "2" && details[0].color==="blue"){
      imagine.src = "https://s3-eu-west-1.amazonaws.com/lamborghini.live.2dod.eu-west-1/AD_Personam/lamborghini/urus/2018/763fd336480227a2/00089e406ebf3b27c280cda657a32d775ad65cc8_1920x1080.jpg";
  }
  if(details[0].type==="urus" && details[0].rim ==="routhman" && details[0].int === "1" && details[0].color==="blue"){
      imagine.src = "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/urus/2018/763fd336480227a2/919753ae2c489c354d866ecbce21f1e102763833_1920x1080.jpg";
  }
  if(details[0].type==="urus" && details[0].rim ==="routhman" && details[0].int === "2" && details[0].color==="blue"){
      imagine.src = "https://s3-eu-west-1.amazonaws.com/lamborghini.live.2dod.eu-west-1/AD_Personam/lamborghini/urus/2018/763fd336480227a2/a5b6082259f4519ad6626c3550dd9e556f5b0d4c_1920x1080.jpg";
  }

    }
  })





  