import imgScreens from "../src/Data/DataExtraction-amico.svg";
import Fireflix from "../src/Data/fireflix.png";
import NossoSol from "../src/Data/NossoSolMockup.png";
import FastMarket from "../src/Data/fastmarket.png";
import welanches from "../src/Data/welanches.png";
import footerArt from "../src/Data/footer-ilustracao.svg";

import Projetos from "./components/Projetos";
import Conhecimentos from "./components/Conhecimento";

AOS.init();

function App() {
  return (
    <>
      <nav>
        <h1 className="name animate__animated animate__fadeInLeft">
          Fabricio Silva
        </h1>
        <div className="ancoras">
          <a href="#me">
            <i class="btn fa-solid fa-user"></i>
          </a>
          <a href="#projetos">
            <i class="btn fa-solid fa-diagram-project"></i>
          </a>
        </div>
      </nav>

      <section>
        <h3 className="descTop animate__animated animate__slideInDown">
          Ajudando empresas a criar{" "}
          <span>interfaces modernas e de qualidade.</span>
        </h3>
        <div className="dropdown">
          <div className="btn-contato">
            Contatar <i class="fa-solid fa-angle-down"></i>
          </div>
          <div className="dropdown-content">
            <span>
              <a href="https://wa.me/+5511987440654"><i class="fa-brands fa-square-whatsapp" target="_blank"></i></a>
            </span>
            <span>
              <a href="https://www.linkedin.com/in/fabricio-silva-246a12273" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            </span>
            <span>
              <a href="mailto:fabricio2silva8@gmail.com" target="_blank"><i class="fa-solid fa-envelope"></i></a>
            </span>
          </div>
        </div>
      </section>

      <img
        src={imgScreens}
        className="animate__animated animate__pulse imgTelas"
        alt="img-telas"
      />
      <div
        id="me"
        className="arrow-down animate__animated animate__slideInDown animate__delay-1s"
        data-aos-delay="2000"
      >
        <i class="fa-solid fa-arrow-down"></i>
      </div>

      <div data-aos="fade-up">
        <div className="titulo">
          <h1>
            Sobre<span>.</span>
          </h1>
        </div>
        <div className="whoContainer">
          <div className="whoPhoto"></div>
          <h3>Quem sou?</h3>
          <div className="WhoDescTop">
            <h4>Fabricio Silva</h4>
            <h5>Desenvolvedor FrontEnd</h5>
          </div>
          <p>
            Tenho 21 anos, atualmente cursando Análise e Desevolvimento de
            Sistemas. Com foco em Frontend, me aprofundo cada vez mais na área.
          </p>

          <div
            id="projetos"
            className="stacks"
          >
            <span>
              <i class="fa-brands fa-react"></i>
            </span>
            <span>
              <i class="fa-brands fa-js"></i>
            </span>
            <span>Nextjs</span>
            <span>
              <i class="fa-brands fa-html5"></i>
            </span>
          </div>
        </div>
      </div>

      <div className="titulo">
        <h1>
          Projetos<span>.</span>
        </h1>
      </div>
      <div className="projetos-container">
        <Projetos
          img={Fireflix}
          titulo={"Fireflix"}
          legenda={"Plataforma de streaming feita do zero com sistema de login"}
          react
          firebase
          tailwind
          css
          html
          javascript
          link={"https://fire-flix.vercel.app/"}
          github={"https://github.com/fabcode01/fireflix"}
        />

        <Projetos
          img={welanches}
          titulo={"We Lanches"}
          legenda={
            "Projeto Front-End criado pensando no conceito de Mobile First e com uso de APIs, aplicando várias funções utilizadas no mercado."
          }
          react
          firebase
          tailwind
          css
          html
          javascript
          link={"https://welanches.vercel.app/"}
          github={"https://github.com/fabcode01/welanches"}
        />

        <Projetos
          img={NossoSol}
          titulo={"Nosso Sol"}
          legenda={
            "Um projeto real de conscientização para destacar a independência energética proporcionada pelos painéis solares. Esse projeto foi feito em colaboração com outro desenvolvedor utilizando o Git,React,vite e biblioteca swipe.js todos os processos são separado em etapas. "
          }
          react
          css
          html
          javascript
          link={"https://nosso-sol.vercel.app/"}
          github={"https://github.com/fabcode01/nosso-sol"}
        />

        <Projetos
          img={FastMarket}
          titulo={"FastMarket"}
          legenda={
            "Projeto FrontEnd criado pensando no conceito de Mobile First e na pratica de métodos aprendidos, aplicando várias funções utilizadas no mercado."
          }
          css
          html
          javascript
          link={"https://fabcode01.github.io/FastMarket/pages/main.html"}
          github={"https://github.com/fabcode01/FastMarket"}
        />
      </div>

      <div className="titulo">
        <h1>
          Conhecimento<span>.</span>
        </h1>
      </div>

      <div className="conhecimento">
        <Conhecimentos
          react
          html
          css
          javascript
          firebase
          nextjs
          tailwind
          git
          next
        />
      </div>

      <footer data-aos="fade-up">
        <div className="t-legend-img">
          <div className="descFooter">
            <h2>Vamos trabalhar juntos?</h2>
            <span>
              <a href="https://wa.me/+5511987440654"><i class="fa-brands fa-square-whatsapp" target="_blank"></i></a>
            </span>
            <span>
              <a href="https://www.linkedin.com/in/fabricio-silva-246a12273" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            </span>
            <span>
              <a href="mailto:fabricio2silva8@gmail.com" target="_blank"><i class="fa-solid fa-envelope"></i></a>
            </span>
          
          </div>
          <div className="creditosStorySet">
            <img
              className="animate__animated animate__bounce"
              src={footerArt}
              alt="art"
            />
          
            <a href="https://storyset.com/business">illustrations by Storyset</a>
          </div>
        </div>

        
          <p className="creditos">Fabricio Silva &copy;</p>
        

        
      </footer>
    </>
  );
}

export default App;
