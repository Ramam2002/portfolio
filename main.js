document.querySelector('#contact-form').addEventListener('submit', (e) => {
   e.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var msg = document.getElementById("msg").value;

    var url = "https://wa.me/8790308479?text=" 
    + "Name: " + name + "%0a"
    + "Mail: " + email + "%0a"
    + "Contact: " + contact  + "%0a"
    + "Message: " + msg; 

    window.open(url, '_blank').focus();

   e.target.elements.name.value = '';
   e.target.elements.email.value = '';
   e.target.elements.message.value = '';
 });

 function main(){
    console.log("1");
 }