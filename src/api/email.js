import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

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
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "0b7abc405529bd",
    pass: "66ffb2d3b3b31d"
  }
});

app.post('/api/email', async (req, res) => {
  const { email, name, phone, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'joaovit342@gmail.com',
    subject,
    text: `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`,
  };

  try {
    console.log(process.env.REACT_APP_API_URL);
    
    console.log('Tentando enviar email...');
    await transport.sendMail(mailOptions);
    res.status(200).send({ message: 'Email sent successfully' });
  } catch (error) {
    console.log('Erro ao tentar enviar email...');
    console.error('Error sending email:', error);
    res.status(500).send({ message: 'Error sending email:', error });
  }
});

// Configurar a porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
