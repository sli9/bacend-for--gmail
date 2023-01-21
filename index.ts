const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sil9gosys@gmail.com',
        pass: 'uupe ihrt byzw qfdl'
    },
});

app.post('/sendMessage', async (req, res) => {

    const {email, text, message} = req.body

     await transporter.sendMail({
        from: email,
        to: 'sil9gosys@gmail.com',
        subject: text,
        text: message
    })

    res.send(req.body)
})

app.listen(3010, () => {
    console.log('Listening on port 3010')
})