var form = document.querySelector('form');
var gender = document.querySelectorAll('[gender]');
var submit = document.querySelector('.submit');
var reserForm = document.querySelector('.cancle');


submit.addEventListener('click', function(){
  console.log(gender);
});

// reserForm.addEventListener('click', function(){
//   form.reset();
// });