import Typewriter from "react-typewriter-effect";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
//assets
import "./hero.css";
import Paulo from "../../assets/paulo.webp";
//icons
import Linkedin from "../../assets/icons/linkedin.svg";
import Insta from "../../assets/icons/insta.svg";

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
                  <h1 className="hero-title">
                    Paulo <span>Junior</span>
                  </h1>
                    <h2 className="typewriter-wrapper">
                      <Typewriter
                        textStyle={{ display: "inline" }}
                        startDelay={300}
                        cursorColor="#ffffff"
                        multiText={[
                          "front-end developer",
                          "web designer",
                          "freelancer",
                          "UX/UI entusiasta",
                        ]}
                        multiTextDelay={2500}
                        typeSpeed={100}
                        multiTextLoop
                      />     
                  </h2>
                  <button>Entre em contato</button>
                </motion.div>
              ) : (
                <motion.div
                  key="about"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 100 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3>About me</h3>
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
