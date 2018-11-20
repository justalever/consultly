document.addEventListener("turbolinks:load", () => {
  const tabElements = document.querySelectorAll('#nav-tab .tab');

  function onTabClick(event) {
    const activeTabs = document.querySelectorAll('.active');

    activeTabs.forEach(function(tab) {
      tab.classList.toggle('active');
    });


    event.target.parentElement.classList.add('active');

    event.preventDefault();

    // show and hide tab panels
    var tabPanel = document.getElementById(event.target.href.split("#")[1]);
    tabPanel.classList.toggle('active');
  }


  if(tabElements != null) {
    tabElements.forEach(function(tab) {
      tab.addEventListener('click', (event) => {
        onTabClick(event);
      });
    });
  }
});