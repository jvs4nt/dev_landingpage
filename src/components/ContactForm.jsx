import { useState } from "react";
import { Link } from "react-scroll";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (response.ok) {
        setResponseMessage(result.message);
      } else {
        setResponseMessage('Erro ao enviar o e-mail. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      setResponseMessage('Erro ao enviar o e-mail. Tente novamente.');
    }
  };

  return (
    <>
      <div className="mt-20" id="contato">
        <h2 className="my-8 text-3xl tracking-wide text-center sm:text-5xl lg:text-6xl ">
          Entre em contato
        </h2>
        <form onSubmit={handleSubmit} className="p-10 mx-auto border border-neutral-700 rounded-xl">
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-lg text-gray-400">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-blue-600 rounded-lg"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-lg text-gray-400">
              Nome ou Empresa *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-blue-700 rounded-lg"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block mb-2 text-lg text-gray-400">
              Telefone ou WhatsApp
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-blue-800 rounded-lg"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="block mb-2 text-lg text-gray-400">
              Assunto *
            </label>
            <input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 border border-blue-900 rounded-lg"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-lg text-gray-400">
              Mensagem *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-blue-900 rounded-lg"
              required
            />
          </div>
          <div className="flex flex-col items-center justify-center ">
            <button
              type="submit"
              className="w-1/2 h-12 text-lg tracking-tight text-center text-white transition duration-200 rounded-lg bg-gradient-to-r from-blue-400 to-blue-800 hover:bg-blue-900"
            >
              <p className="text-center">Enviar</p>
            </button>
          </div>
        </form>
        {responseMessage && (
          <div className="mt-4 text-center text-lg text-gray-400">
            {responseMessage}
          </div>
        )}
      </div>
      <div className="flex justify-center w-full pt-10 cursor-pointer mb-10">
        <Link 
          to="inicio"
          smooth={true}
          duration={500}
          className="text-gray-400 transition-all hover:text-gray-100"
        >
          Voltar ao início
        </Link>
      </div>
    </>
  );
};

export default ContactForm;
