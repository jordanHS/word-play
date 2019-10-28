$(document).ready(function() {
  $("#wordPlay").submit(function(event) {
  event.preventDefault();
    var sentence = $("input#sentence").val();
    var words = sentence.split(" ");
    var reversedWords = words.reverse();
    console.log(words);




words.forEach(function(word){
  $("#words").text(words);
  $("#words").show();

});

  });
});
