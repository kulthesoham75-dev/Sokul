// Smooth scroll for internal links
document.querySelectorAll('nav ul li a[href^="#"]').forEach(link=>{
    link.addEventListener('click',function(e){
        e.preventDefault();
        const target=document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({behavior:'smooth'});
    });
});

// Contact Form AJAX submit
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if(form){
    form.addEventListener('submit', function(e){
        e.preventDefault();
        const formData = new FormData(form);

        fetch('contact.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            if(data.trim() === 'success'){
                formMessage.textContent = "Thank you! Your message has been sent.";
                formMessage.style.color = "green";
                form.reset();
            }else{
                formMessage.textContent = "Oops! Something went wrong. Try again.";
                formMessage.style.color = "red";
            }
        })
        .catch(err => {
            formMessage.textContent = "Error sending message.";
            formMessage.style.color = "red";
        });
    });
}