document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll("select");
  var instances = M.FormSelect.init(elems, instances);
});

let details = [];
let imagine = document.querySelector(".imagineconfigurator");
let culoare = document.querySelector(".selectcolor");

culoare.addEventListener("change", function () {
  console.log(culoare.value);
});

let interior = document.querySelector(".selectinterior");

interior.addEventListener("change", function () {
  console.log(interior.value);
});

let rims = document.querySelector(".selectrim");

rims.addEventListener("change", function () {
  console.log(rims.value);
});

let button = document.querySelector(".buynow");

button.addEventListener("click", function () {
  let carSpec = {
    rim: rims.value,
    color: culoare.value,
    int: interior.value,
  };

  details[0] = carSpec;
  console.log(details);

  Genereaza();

  function Genereaza() {
    if (
      details[0].rim === "majestic" &&
      details[0].int === "1" &&
      details[0].color === "black"
    ) {
      imagine.src =
        "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/f8d63ff85a90fd178527f67a7d39c2e8054bbc11_1920x1080.jpg";
    }
    if (
      details[0].rim === "majestic" &&
      details[0].int === "2" &&
      details[0].color === "black"
    ) {
      imagine.src =
        "https://s3-eu-west-1.amazonaws.com/lamborghini.live.2dod.eu-west-1/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/9a18fa0dbfc8ac479878391acae0e39716ae6333_1920x1080.jpg";
    }
    if (
      details[0].rim === "routhman" &&
      details[0].int === "1" &&
      details[0].color === "black"
    ) {
      imagine.src =
        "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/d4f597bc71c25d42d8cd3e3582847ba23f18d15d_1920x1080.jpg";
    }
    if (
      details[0].rim === "routhman" &&
      details[0].int === "2" &&
      details[0].color === "black"
    ) {
      imagine.src =
        "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/f9428fa922665af0be45282fc59446c04335f08d_1920x1080.jpg";
    }
    if (
      details[0].rim === "majestic" &&
      details[0].int === "1" &&
      details[0].color === "verde"
    ) {
      imagine.src =
        "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/4ee3eb91c6e9c44baf609b4cc1c22ed5843b3247_1920x1080.jpg";
    }
    if (
      details[0].rim === "majestic" &&
      details[0].int === "2" &&
      details[0].color === "verde"
    ) {
      imagine.src =
        "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/822df4c0b0d83aafbc64450063ce80f0bb859381_1920x1080.jpg";
    }
    if (
      details[0].rim === "routhman" &&
      details[0].int === "1" &&
      details[0].color === "verde"
    ) {
      imagine.src =
        "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/c76821c2443ac9f0b5a36a0708ec8abe6cd5266c_1920x1080.jpg";
    }
    if (
      details[0].rim === "routhman" &&
      details[0].int === "2" &&
      details[0].color === "verde"
    ) {
      imagine.src =
        "https://s3-eu-west-1.amazonaws.com/lamborghini.live.2dod.eu-west-1/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/a770b9efd0f7029c68f2c1027a477962af0270c8_1920x1080.jpg";
    }
    if (
      details[0].rim === "majestic" &&
      details[0].int === "1" &&
      details[0].color === "blue"
    ) {
      imagine.src =
        "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/cbb58e866dfee8d4f6c8520f605fe376b1b413be_1920x1080.jpg";
    }
    if (
      details[0].rim === "majestic" &&
      details[0].int === "2" &&
      details[0].color === "blue"
    ) {
      imagine.src =
        "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/50f769eba4df3cd30e663c329e4ea51bcbb859dd_1920x1080.jpg";
    }
    if (
      details[0].rim === "routhman" &&
      details[0].int === "1" &&
      details[0].color === "blue"
    ) {
      imagine.src =
        "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/577e78689b63044f750b5c383aed81805e6f3afe_1920x1080.jpg";
    }
    if (
      details[0].rim === "routhman" &&
      details[0].int === "2" &&
      details[0].color === "blue"
    ) {
      imagine.src =
        "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/69c5c2508c0e83f68b50680043747214ad52a7b6_1920x1080.jpg";
    }
  }
});

let order = document.querySelector(".order");

order.addEventListener("click", function () {
  let carSpec = {
    rim: rims.value,
    color: culoare.value,
    int: interior.value,
  };

  details[0] = carSpec;
  console.log(details);
  Cumpara();

  function Cumpara() {
    let price2 = 0;
    let rimpric = 0;
    let interiorpric = 0;
    let colorpric = 0;

    let carPrice = {
      rimprice: rimpric.value,
      interiorprice: interiorpric.value,
      colorprice: colorpric.value,
    };

    /*    if(details[0].type === "huracan"){
            carPrice.carprice = 176936;
        }
        if(details[0].type === "aventador"){
            carPrice.carprice = 317500;
        }
        if(details[0].type === "urus"){
            carPrice.carprice = 207999;
        }   */

    if (details[0].rim === "majestic") {
      carPrice.rimprice = 6500;
    }
    if (details[0].rim === "routhman") {
      carPrice.rimprice = 8000;
    }
    if (details[0].color === "black") {
      carPrice.colorprice = 9000;
    }
    if (details[0].color === "verde") {
      carPrice.colorprice = 5000;
    }
    if (details[0].color === "blue") {
      carPrice.colorprice = 7000;
    }

    if (details[0].int === "1") {
      carPrice.interiorprice = 10000;
    }
    if (details[0].int === "2") {
      carPrice.interiorprice = 22000;
    }

    function Genereaza() {
      if (
        details[0].rim === "majestic" &&
        details[0].int === "1" &&
        details[0].color === "black"
      ) {
        imagine.src =
          "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/f8d63ff85a90fd178527f67a7d39c2e8054bbc11_1920x1080.jpg";
      }
      if (
        details[0].rim === "majestic" &&
        details[0].int === "2" &&
        details[0].color === "black"
      ) {
        imagine.src =
          "https://s3-eu-west-1.amazonaws.com/lamborghini.live.2dod.eu-west-1/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/9a18fa0dbfc8ac479878391acae0e39716ae6333_1920x1080.jpg";
      }
      if (
        details[0].rim === "routhman" &&
        details[0].int === "1" &&
        details[0].color === "black"
      ) {
        imagine.src =
          "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/d4f597bc71c25d42d8cd3e3582847ba23f18d15d_1920x1080.jpg";
      }
      if (
        details[0].rim === "routhman" &&
        details[0].int === "2" &&
        details[0].color === "black"
      ) {
        imagine.src =
          "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/f9428fa922665af0be45282fc59446c04335f08d_1920x1080.jpg";
      }
      if (
        details[0].rim === "majestic" &&
        details[0].int === "1" &&
        details[0].color === "verde"
      ) {
        imagine.src =
          "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/4ee3eb91c6e9c44baf609b4cc1c22ed5843b3247_1920x1080.jpg";
      }
      if (
        details[0].rim === "majestic" &&
        details[0].int === "2" &&
        details[0].color === "verde"
      ) {
        imagine.src =
          "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/822df4c0b0d83aafbc64450063ce80f0bb859381_1920x1080.jpg";
      }
      if (
        details[0].rim === "routhman" &&
        details[0].int === "1" &&
        details[0].color === "verde"
      ) {
        imagine.src =
          "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/c76821c2443ac9f0b5a36a0708ec8abe6cd5266c_1920x1080.jpg";
      }
      if (
        details[0].rim === "routhman" &&
        details[0].int === "2" &&
        details[0].color === "verde"
      ) {
        imagine.src =
          "https://s3-eu-west-1.amazonaws.com/lamborghini.live.2dod.eu-west-1/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/a770b9efd0f7029c68f2c1027a477962af0270c8_1920x1080.jpg";
      }
      if (
        details[0].rim === "majestic" &&
        details[0].int === "1" &&
        details[0].color === "blue"
      ) {
        imagine.src =
          "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/cbb58e866dfee8d4f6c8520f605fe376b1b413be_1920x1080.jpg";
      }
      if (
        details[0].rim === "majestic" &&
        details[0].int === "2" &&
        details[0].color === "blue"
      ) {
        imagine.src =
          "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/50f769eba4df3cd30e663c329e4ea51bcbb859dd_1920x1080.jpg";
      }
      if (
        details[0].rim === "routhman" &&
        details[0].int === "1" &&
        details[0].color === "blue"
      ) {
        imagine.src =
          "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/577e78689b63044f750b5c383aed81805e6f3afe_1920x1080.jpg";
      }
      if (
        details[0].rim === "routhman" &&
        details[0].int === "2" &&
        details[0].color === "blue"
      ) {
        imagine.src =
          "https://configuratorimageslive.lamborghini.com/AD_Personam/lamborghini/huracan/2017/9a316d3f7715d8e8/69c5c2508c0e83f68b50680043747214ad52a7b6_1920x1080.jpg";
      }
    }

    const template1 = document.getElementById("buynowlabel");

    template1.innerHTML = ` <p class="smecher">TOTAL PRICE: ${
      176936 + carPrice.rimprice + carPrice.colorprice + carPrice.interiorprice
    } €<p> `;
    Genereaza();
  }
});
