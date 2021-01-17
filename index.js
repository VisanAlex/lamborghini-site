

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, instances);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, instances);
  });


  

let tabs = document.querySelector('.tab');
let link = document.querySelector('.link')
window.addEventListener("DOMContentLoaded", event => {
  const options = {
    duration: 300,
    onShow: null,
    swipeable: false,
    responsiveThreshold: Infinity
  };

  const tabsContainer = document.querySelector(".tabs");
  M.Tabs.init(tabsContainer, options);
});


