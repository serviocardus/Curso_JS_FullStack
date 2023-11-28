function helloFunc(){
    alert("Alô Mundo!!!");
}
function formValidation(){
    return true;
}

function convertMaiusculo(){
    let a = document.getElementById("name")
    a.value = a.value.toUpperCase();
}

function computeSquare(){
    let x = document.getElementById("integer").value;
    alert(x * x);
}

function displayform(){
  let data = "Username:<br><input type='text'name='name'><br>Comment:";
  data +="<br><textarea rows='6' cols='45'></textarea><br>";
  data +="<input type='submit' value='Contact us'>";
  document.getElementById('area').innerHTML=data;
}