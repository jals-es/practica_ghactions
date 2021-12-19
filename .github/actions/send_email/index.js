const core = require('@actions/core');
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: core.getInput('email_host'),
    port: core.getInput('email_port'),
    auth: {
        user: core.getInput('email_user'),
        pass: core.getInput('email_pass')
    }
});
transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    }
});
transporter.sendMail({
    from: core.getInput('email_user'),
    to: core.getInput('email_to'),
    subject: 'Resultado del workflow ejecutado',
    html: `
    <div>
        <p>Se ha realizado un push en la rama main que ha provocado la ejecución del
        workflow practica_ghactions con los siguientes resultados:</p>
        <p>- linter_job: ${core.getInput('linter')}</p>
        <p>- cypress_job: ${core.getInput('cypress')}</p>
        <p>- add_badge_job: ${core.getInput('badge')}</p>
        <p>- deploy_job: ${core.getInput('deploy')}</p>
    </div>
    `
});