const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var tablinks = document.getElementsByClassName("tab-links")
  var tabcontents = document.getElementsByClassName("tab-contents")
 
  function opentab(tabname){
    for(tablink of tablinks){
      tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
      tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyWAOGTI3aqCi1pMt4CK6RI1bBiurVIIkvdLFLiSzhlpf3tfQAL9r8vCSe9URGIBjrc/exec';
const form = document.forms['submit-to-google-sheet'];
const messageDiv = document.createElement('p');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(form);

    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    })
    .then(() => {
        form.reset();
        messageDiv.textContent = "Bericht verstuurd!";
        messageDiv.style.color = "#1eff00";
        form.appendChild(messageDiv);
        
        setTimeout(() => {
          messageDiv.remove();
      }, 5000);
    })
});
