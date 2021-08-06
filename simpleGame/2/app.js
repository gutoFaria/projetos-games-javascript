function greet(){
    var txtName = document.getElementById("txtName");
    var userName = txtName.value;
    //alert("Hi ,"+ userName + "!");
    var output = document.getElementById("output");
    output.innerHTML = "Hi, "+userName+"!";
}