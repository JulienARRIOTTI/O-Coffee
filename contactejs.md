<%- include('partials/header') %>

<section id="contact">

<script type="text/javascript" src="https://**************"></script>
<script>
 
  (function(){
    emailjs.init("ST_-**"); // ← Votre Public Key
  })();
</script>

<form id="contact-form">
  <input type="text" name="user_name" placeholder="Nom" required>
  <input type="email" name="useremail" placeholder="Email" required>
  <textarea name="message" placeholder="Votre message" required></textarea>
  <button type="submit">Envoyer</button>
</form>

<script>
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

    emailjs.sendForm('O**', 'template**', this)
    .then(function(response) {
      alert('Message envoyé ! Un email de confirmation a été envoyé à : ' + this.user_email.value);
      document.getElementById('contact-form').reset();
    }.bind(this), function(error) {
      alert('Erreur : ' + JSON.stringify(error));
      console.error('Détails de l'erreur :', error); // Pour le débogage
    });
});
</script>

</section>

<%- include('partials/footer') %>


voir .env