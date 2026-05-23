// Smooth scroll
document.querySelector('.btn').onclick = () => {
  document.querySelector('#portfolio').scrollIntoView({
    behavior:'smooth'
  });
};

// FAQ Toggle
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {

    let active = item.classList.contains('active');

    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('active');
      i.querySelector('span').textContent = '+';
    });

    if(!active){
      item.classList.add('active');
      item.querySelector('span').textContent = '−';
    }

  });
});
 const form = document.getElementById("contactForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Show success message
    document.getElementById("successMsg").innerHTML =
      "Message Sent Successfully ✅";

    // Console output
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Reset form
    form.reset();
  });