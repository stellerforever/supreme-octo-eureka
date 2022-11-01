$( function() {
    $( ".draggable" ).draggable({
      containment: "body", 
      scroll: false
    });
  } );

  $(".click").click(function(){

    $(this).hide();

  });

  $(".closed").click(function(){

    $(".opened").css("opacity", "1");

  });