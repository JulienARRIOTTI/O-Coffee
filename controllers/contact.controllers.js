export default {
    index(req, res) {
        res.render("contact");
    },

    submit(req, res) {
        
        const name = req.body.name;
        const email = req.body.email;
        const subject = req.body.subject;
        const message = req.body.message;

        
        const response = sendEmail(name, email, subject, message);

        res.render("contact", { message: response });
    }
};

/**
 * Cette fonction est un FAKE, on ne fait pas vraiment d'envoi d'email (c'est pas le sujet du cours)...
 *
 * @param {String} name
 * @param {String} email
 * @param {String} subject
 * @param {String} message
 *
 * @returns
 */
function sendEmail(name, email, subject, message) {
   

    return `Email envoyé avec l'adresse ${email}`;
}