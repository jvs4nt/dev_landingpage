import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
import logo from '../assets/DEV.png';


const HeroSection = () => {
  return (
    <div id="inicio" className="flex flex-col items-center mt-6 lg:mt-10">
        <div className='flex'>
            <span className="text-transparent lg:text-9xl bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text">
                W
            </span>
            <img className="w-30" style={{height: "140px"}} src={logo} alt="logo" />
            <span className="text-transparent lg:text-9xl bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text">
                LFPACK
            </span>
        </div>
            <h1 className="text-4xl tracking-wide text-center text-gray-400 sm:text-6xl lg:text-3xl">
            technology. 
            
        </h1>
        <p className="max-w-4xl mt-10 text-lg text-center text-neutral-500">
        Na Wolfpack, acreditamos que cada projeto é uma parceria. Trabalhamos lado a lado com nossos clientes para garantir que suas visões sejam concretizadas com excelência e inovação. Seja qual for o desafio, estamos prontos para superá-lo e levar seu negócio ao próximo nível.
        </p>
        {/* <div className="flex justify-center my-10">
            <a href="" className="px-4 py-3 mx-3 rounded-md bg-gradient-to-r from-blue-500 to-blue-800">
                Botao
            </a>
            <a href="" className="px-4 py-3 mx-3 border rounded-md">
                Botao
            </a>
        </div> */}
        <div className="flex flex-col items-center justify-center mt-10 lg:flex-row">
            <video autoPlay loop muted className="w-1/2 mx-2 my-4 border border-blue-700 rounded-lg shadow-blue-400">
                <source src={video1} type="video/mp4" />
                Seu navegador não suporta vídeos em HTML5.
            </video>
            <video autoPlay loop muted className="w-1/2 mx-2 my-4 border border-blue-700 rounded-lg shadow-blue-400">
                <source src={video2} type="video/mp4" />
                Seu navegador não suporta vídeos em HTML5.
            </video>
        </div>
    </div>
  )
}

export default HeroSection
