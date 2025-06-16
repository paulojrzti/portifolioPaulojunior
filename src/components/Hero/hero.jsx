//assets
import "./hero.css";
import Paulo from "../../assets/paulo.webp";
//icons
import Linkedin from "../../assets/icons/linkedin.svg";
import Insta from "../../assets/icons/insta.svg";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Hero() {
const [showAbout, setShowAbout] = useState(false);
const [scrollUnlocked, setScrollUnlocked] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    // Scroll para baixo ativa "About me"
    if (!showAbout && scrollPosition > 110) {
      setShowAbout(true);
    }

    // Scroll para cima volta para o texto original
    if (showAbout && scrollPosition <= 110) {
      setShowAbout(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [showAbout]);

  return (
    <>
      <div style={{ height: "200vh" }}>
        <header id="hero">
          <div id="hero-text">
            <AnimatePresence mode="wait">
              {!showAbout ? (
                <motion.div
                  key="intro"
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <h6>olá, eu sou</h6>
                  <h1>
                    Paulo <span>Junior</span>
                  </h1>
                  <h2>front-end developer</h2>
                  <button>Entre em contato</button>
                  <div className="social-icons">
                    <a href="#">
                      <img src={Linkedin} alt="linkedin" />
                    </a>
                    <a href="#">
                      <img src={Insta} alt="instagram" />
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="about"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 100 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2>About me</h2>
                  <p>
                    Sou Paulo Junior, desenvolvedor front-end e designer, com 19
                    anos. Estudo Gestão de TI e atuo na DNC, onde participo de
                    projetos reais entregando sites e plataformas. No mercado
                    freelancer, desenvolvo landing pages e automações com IA,
                    somando mais de 20 projetos. Também me aprofundei em design
                    com Photoshop e Illustrator, buscando sempre unir
                    performance e estética.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div id="hero-image">
            <img src={Paulo} alt="paulo junior desenvolvedor-front-end" />
            <div className="luz-paulo"></div>
            <div className="sombra-paulo"></div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Hero;
