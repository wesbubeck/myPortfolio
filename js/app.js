// JS for the modals  
  $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
// JS for the side navebar
 // Initialize contact SideBar
  $("#contactSideBar").sideNav();

  //js for the carasoul

      $(document).ready(function(){
      $('.carousel').carousel();

    });

      // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();