import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20 px-4">
      <h2 className="mt-6 mb-4 text-3xl tracking-wide text-center sm:text-5xl lg:text-6xl" data-aos="zoom-in-up">
        Acompanhe o{" "}
        <span className="text-transparent bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text" data-aos="fade-up">
          workflow de desenvolvimento
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full p-2 lg:w-1/2" data-aos="fade-right">
          <img src={codeImg} alt="Coding" />
        </div>
        <div className="w-full pt-12 lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="items-center justify-center w-10 h-10 p-2 mx-4 text-green-400 rounded-full bg-neutral-900" data-aos="fade-up">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl" data-aos="fade-up">{item.title}</h5>
                <p className="text-md text-neutral-500" data-aos="fade-up">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
        <div id="contato"></div>
    </div>
  );
};

export default Workflow;