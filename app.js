var front = document.querySelector(".front");
var container = document.querySelector(".container");
var video = document.querySelector(".back video");
var purple = document.getElementById('purple');
var bckg = document.getElementById('bckg');
var green = document.getElementById('green');
var box = document.getElementById('box');


front.addEventListener('click', function(){
  container.classList.add('anim');
  video.play()
});


// $(function(){
//     $("input").click(function(){
//         $("purple").css("bckg","url('greenbck.png')");
//     });
// });​

purple.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('purplebck.png')";
//   bckg.none()
 });

 green.addEventListener('click', () => {
   document.body.style.backgroundImage = "url('greenbck.png')";
 //   bckg.none()
  });

  box.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('bckg.png')";
    // document.body.style.backgroundImage = none";
    // bckg.none()
   });
