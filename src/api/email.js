import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();


// Habilitar CORS para permitir requisições de outras origens
app.use(cors({
    origin: 'http://localhost:5173', // Substitua pelo endereço onde o React está rodando
    methods: ['POST'],
    allowedHeaders: ['Content-Type'],
  }));

// Middleware para parsear JSON
app.use(express.json());



const transport = nodemailer.createTransport({
  host: process.env.VITE_MAIL_HOST,
  port: process.env.VITE_MAIL_PORT,
  auth: {
    user: process.env.VITE_MAIL_USERNAME,
    pass: process.env.VITE_MAIL_PASSWORD
  }
});

app.post('/api/email', async (req, res) => {
  const { email, name, phone, subject, message } = req.body;
  console.log(process.env.VITE_MAIL_HOST);
  

  const mailOptions = {
    from: email,
    to: process.env.VITE_MAIL_TO,
    subject,
    text: `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`,
  };

  try {
    await transport.sendMail(mailOptions);
    res.status(200).send({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({ message: 'Error sending email:', error });
  }
});

// Configurar a porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
