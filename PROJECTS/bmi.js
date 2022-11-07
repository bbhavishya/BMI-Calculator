function BMI(){
    var height=document.getElementById('height').value;
    var weight=document.getElementById('weight').value;
    let BMI=weight/(height**2)
  alert("Your BMI is: "+BMI.toFixed(2))

if(BMI<18.5){
    alert("you are underweight with BMI "+BMI.toFixed(2))
}
else if(BMI>18.5 && BMI<24.9){
    alert("you are in normal condition with BMI "+BMI.toFixed(2))
}
else if(BMI>24.9 && BMI<30){
   alert("you are overweight with BMI "+BMI.toFixed(2))
}
else{
    alert("you are obese with BMI "+BMI.toFixed(2))
}
}