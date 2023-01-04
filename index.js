function sendmail(){

    var params = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById('message').value
    };


var sentLoader=document.getElementById('sentLoader').classList;
sentLoader.remove("d-none");

const serviceID ="service_173nk9f";
const templateID="template_oh68uxs";
emailjs.send(serviceID,templateID,params)
.then((res) => {
    sentLoader.add("d-none");
        console.log(res);
        alert("your message sent sucessfully");
})
.catch((err) => console.log(err));
}