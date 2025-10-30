// report bug
function validateData(){
    var username = document.getElementById("username").value 
    var email = document.getElementById("email").value
    var server = document.getElementById("server").value
    var description = document.getElementById("description").value
    var agree = document.getElementById("agree")

    if(username.length < 5){
        alert("Username must consist more than 5 characters")
    }else if(!email.endsWith("@gmail.com")){
        alert("Email must have @gmail.com at the end")
    }else if(server.length < 5){
       alert("Server Name must consist more than 5 characters")
    }else if(description.length < 50){
        alert("Description of Bug must consist more than 50 characters")
    }else if(!agree.checked){
        alert("Must checked agree checkbox")
    }else{
        alert("Successfully filled report bug")
    }
}

document.querySelectorAll('.kartu').forEach(card => {
    card.addEventListener('click', () => {
        const inner = card.querySelector('.isikartu');
        inner.style.transform = inner.style.transform === 'rotateX(180deg)' ? '' : 'rotateX(180deg)';
    });
});

// hamburger
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});