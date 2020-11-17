const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENGRID_API_KEY)
const sender = process.env.SENDER_EMAIL || 'username username@gmail.com'

let res = ''
exports.sengrid = async (ctx) => {
  try {
    const data = {
      from: sender,
      to: ctx.params.to.split(', '),
      subject: ctx.params.subject,
      text: ctx.params.text,
      html: ctx.params.html
    }
    res = await sgMail.sendMultiple(data)
  } catch (err) {
    res.send(err)
  }
}
