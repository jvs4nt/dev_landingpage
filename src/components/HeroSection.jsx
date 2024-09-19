import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
import logo from '../assets/simbolo.png';
import './../assets/styles.css';



const HeroSection = () => {

  return (
    <div className="flex flex-col items-center lg:mt-10 px-2">
        <div className='flex'>
            {/* <span className="text-transparent lg:text-9xl bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text">
                W
            </span>
            <img className="w-30" style={{height: "140px"}} src={logo} alt="logo" />
            <span className="text-transparent lg:text-9xl bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text">
                LFPACK
            </span> */}
            <img className="w-96 h-96 mb-10 logo-animated" data-aos="zoom-out" data-aos-duration="3000"  src={logo} alt="logo" />
            {/* <span className="text-transparent lg:text-9xl md:text-6xl text-6xl bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text">
                DEV
            </span>  */}
        </div>
        <h1 className="lg:text-4xl md:text-3xl tracking-wide text-center  animated-gradient-text" data-aos="zoom-in-up" data-aos-duration="1500">
            Transformando ideias em código.
        </h1>
        <p className="max-w-4xl mt-10 lg:text-lg md:text-md sm:text-sm text-center text-neutral-500" data-aos="fade-up" data-aos-duration="1000">
        Na <span className='text-transparent  bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text'>DEV</span>, acreditamos que cada projeto é uma parceria. Trabalhamos lado a lado com nossos clientes para garantir que suas visões sejam concretizadas com excelência e inovação. Seja qual for o desafio, estamos prontos para superá-lo e levar seu negócio ao próximo nível.
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
            <video autoPlay loop muted className="lg:w-1/2 w-full mx-2 my-4 border border-blue-700 rounded-lg shadow-blue-400">
                <source src={video1} type="video/mp4" />
                Seu navegador não suporta vídeos em HTML5.
            </video>
            <video autoPlay loop muted className="lg:w-1/2 w-full mx-2 my-4 border border-blue-700 rounded-lg shadow-blue-400">
                <source src={video2} type="video/mp4" />
                Seu navegador não suporta vídeos em HTML5.
            </video>
        </div>

        <div id="ferramentas"></div>
    </div>
  )
}

export default HeroSection
