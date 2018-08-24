var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
$(document).ready(function(){
  $('#linkhptxt1').click(function(){
    $('#present1').show(200);
    $('#lang1').hide();
    $('#form1').hide();
    $('#xp1').hide();
    $('#comp1').hide();
  });
  $('#linkhptxt2').click(function(){
    $('#present1').hide();
    $('#lang1').show(200);
    $('#form1').hide();
    $('#xp1').hide();
    $('#comp1').hide();
  });
  $('#linkhptxt3').click(function(){
    $('#present1').hide();
    $('#lang1').hide();
    $('#form1').show(200);
    $('#xp1').hide();
    $('#comp1').hide();
  });
  $('#linkhptxt4').click(function(){
    $('#present1').hide();
    $('#lang1').hide();
    $('#form1').hide();
    $('#xp1').show(200);
    $('#comp1').hide();
  });
  $('#linkhptxt5').click(function(){
    $('#present1').hide();
    $('#lang1').hide();
    $('#form1').hide();
    $('#xp1').hide();
    $('#comp1').show(200);
  });
  $('.underTitle1').click(function(){
    $('.listExperiences').show();
    $('.listProg').hide();
  });
  $('.underTitle2').click(function(){
    $('.listExperiences').hide();
    $('.listProg').show();
  });
});
