var userName = prompt('Introduce yourself');
var age = prompt('How old are you ?');
var color = prompt('What is your favourite color ?')

alert('Welcome ' + userName);

// validate
function userData(age){
  if( parseInt(age) >=18){
      confirm('Your age is higher 18 or higher, you are free to continue your journey')
  }else if(parseInt(age) <=10){
    confirm('you should be sleeping by now')
  }else if(parseInt(age) <=18){
    confirm('Your age is lower than 18, you are not allowed to enter')
  }else{
    confirm('check your code developer')
  }
}

userData(age)

document.body.style.backgroundColor = color;