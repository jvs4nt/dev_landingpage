import { features } from "../constants";
const FeatureSection = () => {
  return (
    <div id="ferramentas" className="relative mt-20 border-b border-neutral-800 min-h-[800px] px-2">
        <div className="text-center">
            <span className="h-6 px-2 py-1 text-sm font-medium text-blue-500 uppercase rounded-full bg-neutral-900">
                serviços
            </span>
            <h2 className="mt-10 text-3xl sm:text-5xl lg:text-6xl lg:mt-20 tracking wide">
                Sólida construção do
                <span className="text-transparent bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text">
                    {" "}seu projeto
                </span>
            </h2>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex items-center justify-center w-10 h-10 p-2 mx-6 text-blue-700 rounded-full bg-neutral-900">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="p-2 mb-20 text-md text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
        </div>
    </div>
  )
}

export default FeatureSection