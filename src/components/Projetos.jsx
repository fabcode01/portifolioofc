import style from './Projetos.module.css'
import fireBaseIcon from '../Data/firebaseIcon.png'
import tailwindLogo from '../Data/tailwind.png'

const Projetos = ({img, link, github, titulo, legenda, react,firebase,tailwind, html, css, javascript}) => {

  // data-aos="fade-up"
  return (
    <div  className={style.container}>
      
            <img className={style.imgMockup} src={img} alt="imagem-projeto" />
        
        <h3>{titulo}</h3>
        <h5>{legenda}</h5>

        <div className={style.stacksProjeto}>
            {react && <p><i className="fa-brands fa-react"></i></p>}

            {firebase && <img src={fireBaseIcon}></img>}

            {tailwind && <img src={tailwindLogo}></img>}

            {html && <p><i style={{color: '#E44D26'}} className="fa-brands fa-html5"></i></p>}

            {css && <p><i style={{color: '#098CCA'}} className="fa-brands fa-css3"></i></p>}

            {javascript && <p><i style={{color: 'yellow'}} className="fa-brands fa-js"></i></p>}
        </div>

        <div className={style.links}>
            <a href={link} target='_blank'><span>Projeto</span></a>
            <a href={github} target='_blank'><span>Repositório</span></a>
           
            
        </div>
    	

        
    </div>
  )
}

export default Projetos