import { useState } from "react";
import { Link } from "react-scroll";

const ContactForm = () => {

  return (
    <>
      <div className="box-contact mt-20 w-full relative overflow-hidden" >
          <h2 className="my-8 text-3xl tracking-wide text-center sm:text-5xl lg:text-6xl " data-aos="zoom-in-up">
              Inicie sua jornada.
              <span className="text-transparent bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text" data-aos="fade-up">
                  {" "}Vamos conversar!
              </span>
          </h2>
          <iframe 
            data-aos="fade-up" 
            className="h-full w-full"
            src="https://crm.desenvolvedores.dev.br/forms/wtl/27473ef1085125bd911f9b474a734558" sandbox="allow-top-navigation allow-forms allow-scripts allow-same-origin allow-popups" 
            allowFullScreen
          ></iframe>
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
