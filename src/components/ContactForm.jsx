import { useState } from "react";
import { Link } from "react-scroll";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    subject: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione aqui a lógica para enviar os dados do formulário
    console.log("Dados do formulário enviados:", formData);
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
            Email
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
            Nome (ou Nome da Empresa)
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
            Número de Telefone (opcional)
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
            Assunto
          </label>
          <textarea
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 border border-blue-900 rounded-lg"
            required
          >

          </textarea>
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
    </div>
    <div className="flex justify-center w-full pt-10 cursor-pointer">
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
