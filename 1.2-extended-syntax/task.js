function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    let discr = Math.pow(b, 2) - 4 * a * c; 
   let result = [];
   console.log(discr)// код для задачи №1 писать здесь
   if (discr > 0) {
   result[0] = (-b + Math.sqrt(discr)) / 2 * a;
   result[1] = (-b - Math.sqrt(discr)) / 2 * a;
  } else if (discr == 0) {
  result[0] = (-b + Math.sqrt(discr)) / 2 * a;
  } else if (discr < 0) {
  result[0] = "нет корней"    
  }
  return result
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    //return averageMark;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    //console.log(result)
    //return result;
}
