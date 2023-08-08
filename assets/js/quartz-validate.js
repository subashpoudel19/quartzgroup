function fname(){
  var name= document.getElementById('fullname').value;
  var alphaExp = /^[a-zA-Z.]+[\-'\s]?[a-zA-Z.]+$/;
  if (name.match(alphaExp)) {
    // var d = document.getElementById("fullname");
    // d.className = "valid";
    $('#fullname').addClass('valid').removeClass('err');
    return true;
  }  
  else{
    $('#fullname').addClass('err').removeClass('valid');
    document.getElementById('fullname').value= "";
  }
}


function validate_email(){
  var email= document.getElementById('email').value;  
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(re)) {
    $('#email').addClass('valid').removeClass('err');
    return true;
  }  
  else{
    $('#email').addClass('err').removeClass('valid');
    document.getElementById('email').value= "";
  }
}


function validate_mobile(){
  var pnumber= document.getElementById('mobile').value;  
  var regex = /^\d{10}$/; 
  if (pnumber.match(regex)) {
    $('#mobile').addClass('valid').removeClass('err');
    return true;
  }  
  else{
    $('#mobile').addClass('err').removeClass('valid');
    document.getElementById('mobile').value= "";
  }
}

function validate_gender(){
  var state= document.getElementById('gender').value;  
  if(state) {
   $('#gender').addClass('valid').removeClass('err');
   return true;
 }  
 else{
  $('#gender').addClass('err').removeClass('valid');
  document.getElementById('gender').value= "";
}
}

function validate_city()
{
  var city = document.getElementById('city').value;
  var alphaExp = /^[a-zA-Z]+[\-'\s]?[a-zA-Z ]+$/;
  if (city.match(alphaExp)) {
    $('#city').addClass('valid').removeClass('err');
    return true;
  }  
  else{
    $('#city').addClass('err').removeClass('valid');
    document.getElementById('city').value= "";
  }
}



function validate_degree(){
  var name= document.getElementById('highest_degree').value;
  var alphaExp = /^[a-zA-Z]+[\-'\s]?[a-zA-Z ]+$/;
  if (name.match(alphaExp)) {
    $('#highest_degree').addClass('valid').removeClass('err');
    return true;
  }  
  else{
    $('#highest_degree').addClass('err').removeClass('valid');
    document.getElementById('highest_degree').value= "";
  }
}

function validate_degree_detail(){
  var name= document.getElementById('degree_detail').value;
  var alphaExp = /^[a-zA-Z]+[\-'\s]?[a-zA-Z ]+$/;
  if (name.match(alphaExp)) {
    $('#degree_detail').addClass('valid').removeClass('err');
    return true;
  }  
  else{
    $('#degree_detail').addClass('err').removeClass('valid');
    document.getElementById('degree_detail').value= "";
  }
}

function validate_past_emp(){
  var name= document.getElementById('past_employer').value;
  var alphaExp = /^[a-zA-Z]+[\-'\s]?[a-zA-Z ]+$/;
  if (name.match(alphaExp)) {
    $('#past_employer').addClass('valid').removeClass('err');
    return true;
  }  
  else{
    $('#past_employer').addClass('err').removeClass('valid');
    document.getElementById('past_employer').value= "";
  }
}

function validate_position(){
  var name= document.getElementById('applied_for').value;
  var alphaExp = /^[a-zA-Z]+[\-'\s]?[a-zA-Z ]+$/;
  if (name.match(alphaExp)) {
    $('#applied_for').addClass('valid').removeClass('err');
    return true;
  }  
  else{
    $('#applied_for').addClass('err').removeClass('valid');
    document.getElementById('applied_for').value= "";
  }
}
// function checkFile(fieldObj)
// {
//   var FileName    = fieldObj.value;
//   var FileSize    = fieldObj.files[0].size;
//   var sizeinKb    = Math.round(FileSize/1024);
//   if(sizeinKb < 1024 || sizeinKb == 1024){
//     var FileExt     = FileName.substr(FileName.lastIndexOf('.')+1);
//     if  (FileExt == "pdf" || FileExt == "doc" || FileExt == "docx"){
//       return true;
//     }
//   }
//   else
//   {

//     var error = "Please make sure your file is in .pdf, .doc, .docx Format and Max file size is 1 MB.\n\n";
//     alert(error);
//     document.getElementById('resume').value="";
//   }

// }

function validate_dob(){

  var dob= document.getElementById('date_of_birth').value;  
  if(dob) {
    $('#date_of_birth').addClass('valid').removeClass('err');
    return true;
  }  
  else{
    $('#date_of_birth').addClass('err').removeClass('valid');
    document.getElementById('date_of_birth').value= "";
  }

}


function validate_experience(){
  var t_exp= document.getElementById('experience').value;  
  if(t_exp) {
    $('#experience').addClass('valid').removeClass('err');
    return true;
  }  
  else{
   $('#experience').addClass('err').removeClass('valid');
   document.getElementById('experience').value= "";
 }
}

function validate_zip(){
  var t_exp= document.getElementById('area_code').value;  
  if(t_exp) {
    $('#area_code').removeClass('err');
    return true;
  }  
  else{
   $('#area_code').addClass('err').removeClass('valid');
   document.getElementById('area_code').value= "";
 } 
}
