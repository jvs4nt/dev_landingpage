import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            A solução definitiva. 
            <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
                {" "}
                Desenvolvedores
            </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, asperiores accusamus quod eaque voluptate eligendi quibusdam laboriosam excepturi quasi delectus fugiat nobis, cum sint saepe at ullam ad deserunt provident!
        </p>
        <div className="flex justify-center my-10">
            <a href="" className="bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-md">
                Botao
            </a>
            <a href="" className="py-3 px-4 mx-3 rounded-md border">
                Botao
            </a>
        </div>
        <div className="flex items-center flex-col mt-10 justify-center lg:flex-row">
            <video autoPlay loop muted className="rounded-lg w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4">
                <source src={video1} type="video/mp4" />
                Seu navegador não suporta vídeos em HTML5.
            </video>
            <video autoPlay loop muted className="rounded-lg w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4">
                <source src={video2} type="video/mp4" />
                Seu navegador não suporta vídeos em HTML5.
            </video>
        </div>
    </div>
  )
}

export default HeroSection
