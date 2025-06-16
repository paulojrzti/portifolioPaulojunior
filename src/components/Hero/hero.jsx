//assets
import './hero.css'
import Paulo from '../../assets/paulo.webp'
//icons
import Linkedin from '../../assets/icons/linkedin.svg'
import Insta from "../../assets/icons/insta.svg";
function Hero() {
  document.addEventListener("mousemove", (e) => {
    const hero = document.getElementById("hero");
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    hero.style.backgroundPosition = `${50 + moveX}% ${50 + moveY}%`;
  });
  return (
    <>
      <header id="hero">
          <div id="hero-text">
            <h6>olá, eu sou</h6>
            <h1>
              Paulo <span>Junior</span>
            </h1>
            <h2>front-end developer</h2>
            <button>Entre em contato</button>
            <div className="social-icons">
              <a href="">
                <img src={Linkedin} alt="linkedin" />
              </a>
              <a href="">
                <img src={Insta} alt="instagram" />
              </a>
            </div>
          </div>
          <div id="hero-image">
            <img src={Paulo} alt="paulo junior desenvolvedor-front-end" />
            <div className='luz-paulo'></div>
            <div className='sombra-paulo'></div>
          </div>
      </header>
    </>
  );
}
export default Hero;
