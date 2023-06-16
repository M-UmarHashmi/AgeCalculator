
let button = document.getElementById('button')
button.addEventListener('click', handleClick);

function handleClick(){
  let valid =  checkValidity();
  if(valid){
    calculateDate();
  }
  
}

function checkValidity(){
  let check = false;
  let checkDay = false;
  let checkMonth = false;
  let checkYear = false;
  let day  = document.getElementById('day').value;
  if(day == "" || day < 0 || day > 31){
    raiseError('day','Day should be valid!')
    
  } else {
    correctError('day',"");
    checkDay = true;
    
  }
  let month  = document.getElementById('month').value;
  if(month == "" || month < 0 || month > 12){
    raiseError('month','Month should be valid!');
    check = false;
  } else {
    correctError('month','');
    checkMonth = true;
    
  }
  let year  = document.getElementById('year').value;
  if(year == "" || year < 0 || year > 2023){
    raiseError('year','Year should be valid!')
  } else {
    correctError('year','');
    checkYear = true;
    
  }
  if(checkDay && checkMonth && checkYear){
    check = true
  }
  return check;
}
function raiseError(name,error){
  let elem = document.getElementsByClassName(name)[0];
  // console.log(elem);
  // console.log(error);
  let color = elem.firstElementChild;
  color.style.color = 'red';
  // console.log(color);
  let border = color.nextElementSibling;
  border.style.borderColor = 'red';
  // console.log(border);
  let statement = border.nextElementSibling;
  statement.innerText = error;
  // console.log(statement);
}

function correctError(pointer,value){
  let elem = document.getElementsByClassName(pointer)[0];
  // console.log(elem);
  // console.log(error);
  let color = elem.firstElementChild;
  color.style.color = 'black';
  // console.log(color);
  let border = color.nextElementSibling;
  border.style.borderColor = 'black';
  // console.log(border);
  let statement = border.nextElementSibling;
  statement.innerText = value;
  // console.log(statement);
}

function calculateDate(){
    let day  = document.getElementById('day').value;
    let month  = document.getElementById('month').value;
    let year  = document.getElementById('year').value;
    let age = calculateAge(day,month,year);
    let yearShow = document.getElementById('yearShow');
    let monthShow = document.getElementById('monthShow');
    let dayShow = document.getElementById('dayShow');
    yearShow.innerText = age['years'];
    monthShow.innerText = age['months'];
    dayShow.innerHTML = age['days']
}


function calculateAge(day, month, year) {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
  
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();
  
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
      ageYears--;
      ageMonths += 12;
    }
  
    if (ageDays < 0) {
      const prevMonthDate = new Date(today.getFullYear(), today.getMonth() - 1, 0);
      ageDays += prevMonthDate.getDate();
      ageMonths--;
    }
  
    return {
      years: ageYears,
      months: ageMonths,
      days: ageDays
    };
  }
  

