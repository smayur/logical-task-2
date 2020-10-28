var genderValue;
var regex=/^[a-zA-Z]+$/;
var row = null;
var updateAndDelete = null;
var firstName = document.querySelector('.first-name');
var lastName = document.querySelector('.last-name');
var gender = document.getElementsByName('gender');
var address = document.querySelector('.address');
var termsCondition = document.querySelector('.term-con');
var form = document.querySelector('form');
var table = document.querySelector('.table');
var submit = document.querySelector('.submit');
var resetForm = document.querySelector('.cancle');

submit.addEventListener('click', function(e){
  e.preventDefault();
  var flag = checkfields();
  if (flag === true) {
    addToTable();
  }
});

// Add interval of 2 sec to check if is there any "Delete" button.
// if Yes, the add Event Listener to that button.
setInterval(() => {
  document.querySelectorAll('.delete').forEach((element) => {
    element.addEventListener('click', delRow);
  });
}, 2000);

function delRow(el) {
  // parent element of button,
  // which is <ul class='raw-data'></ul> is stored on 2nd index in path array
  el.path[2].remove();
}

// Add interval of 2 sec to check if is there any "Edit" button.
// if Yes, the add Event Listener to that button.
setInterval(() => {
  document.querySelectorAll('.edit').forEach((element) => {
    element.addEventListener('click', fetchRowValue)
  });
}, 2000);

function fetchRowValue(el) {
  resetForm.remove();
  submit.value = "Update";
  row = el.path[2];
  firstName.value = row.children[0].innerText;
  lastName.value = row.children[1].innerText;
  address.value = row.children[3].innerText;
}

function checkfields() {
  var flag = true;
  if (firstName.value == null || firstName.value == '') {
    alert("please enter your First Name"); 
    flag = false;
  }else if (!firstName.value.match(regex)) {
    alert("Please use letter not numbers. Don't ignore even if you are son of Elon mask's, change your name!!!");
  }else if (lastName.value == null || lastName.value == '') {
    flag = false;
    alert("please enter your Last Name");
  }else if (!lastName.value.match(regex)) {
    alert("Don't you understand, change your name!!!");
  }else if (gender[0].checked === false && gender[1].checked === false) {
    flag = false;
    alert("please select your Gender");
  }else if (address.value == null || address.value == '') {
    flag = false;
    alert("please enter your Address");
  }else if (termsCondition.checked === false) {
    flag = false;
    alert("please Confirm terms and conditions");
  }else { 
    return flag; 
  }
}


function addToTable() {

  if (submit.value === "Update") {
    row.remove();
  }
  genderValue = checkGender(gender);
  var ul = document.createElement('ul');
  ul.innerHTML = "<li class='data-first-name'>"+firstName.value+
                "</li><li class='data-last-name'>"+lastName.value+
                "</li><li class='data-gender'>"+genderValue+
                "</li><li class='data-address'>"+address.value+
                "</li><li class='data-edit'><input type='button' class='edit btn' title='edit button' value='Edit'></li><li class='data-delete'><input type='button' class='delete btn' title='delete button' value='Delete'></li>";
  ul.classList.add('rowData');
  table.appendChild(ul);
  firstName.focus();
  alert("Thank you!");
  clearForm();
}


function checkGender(genderArray) {
  for (let i = 0; i < genderArray.length; i++) {
    if (gender[i].checked) {
      value = genderArray[i].value;
      break;
    }
  }  
  return value;
}


function clearForm() {
  form.reset();
}
