var form = document.querySelector('form');
var gender = document.getElementsByName('gender');
var submit = document.querySelector('.submit');
var reserForm = document.querySelector('.cancle');


submit.addEventListener('click', function(e){
  e.preventDefault();
  for (var index = 0; index < gender.length; index++) {
    if (gender[index].checked) {
      console.log(gender[index]);   
    }
  }
});
