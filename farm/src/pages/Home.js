import Button from "../components/Button";
import Lines from "../components/Lines";
import Section from "../components/Section";
import Text from "../components/Text";
import background from "../img/home/backgroundHome.jpg"
import backgroundMobile from "../img/home/backgroundMobile.jpg";
import background2 from "../img/home/section2Background.jpg"
import styles from "./css/Home.module.css"
import respostive from "./mobile/HomeR.module.css"
import { FaUser, FaUtensils }from "react-icons/fa"
import wave from "../img/wave.svg"
import CardRecipes from "../components/CardRecipes";
import imageCard from "../img/home/caesar-salad.jpg"
import backgroundBuble from "../img/home/bubbles.svg"
import Input from "../form/Input"
import Submit from "../form/Submit"
import everson from "../img/home/everson.jpg"
import deyvid from "../img/home/deyvid.jpg"
import eduardo from "../img/home/eduardo.jpeg"
import TextAreaAutoHeight from "../form/TextAreaAutoHeight";
import sectionMobile from "../img/home/section2BackgroundMobile.jpg"
import { useEffect, useState } from "react";

function Home({login}){
    const [foodBackground, setFoodBackground] = useState([]);
    const [section2Background,setSection2Background] = useState([])
    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1028) {
                setFoodBackground(backgroundMobile);
                setSection2Background(sectionMobile)
            } else if (window.innerWidth >= 1028) {
                setFoodBackground(background);
                setSection2Background(background2)
            }
        };

        // Adicione um ouvinte de evento para o redimensionamento da janela
        window.addEventListener('resize', handleResize);

        // Chame handleResize inicialmente para definir o plano de fundo inicial
        handleResize();

        // Remova o ouvinte de evento quando o componente for desmontado
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <>
        <Section image={foodBackground}>
            
                <div className={`${styles.containerIntru} ${respostive.containerIntruR}`}>
                    <Lines><h1>Farm</h1></Lines>
                    
                    <h2>Sabor d’ criar</h2>
                    <Text>"Explore, cozinhe e compartilhe no nosso site de receitas - sua fonte de inspiração culinária!"</Text>
                    <Button link="/newrecipe">Criar <FaUtensils/></Button>
                </div>
            
        </Section>
        <Section color="E6E9F2">
            <div className={`${styles.containerDesc} ${respostive.conatinerDescR}`}>
                <div className={`${styles.desc}`}>
                    <h2>Divulgue sua <span>receita</span> em nosso <span>site !</span></h2>
                    <Text>Estamos criando uma plataforma única para que indivíduos possam compartilhar e exibir suas receitas tradicionais, transmitidas ao longo das gerações.  </Text>
                    <Button click={login} styleBtn="btnLine">Fazer Login <FaUser/></Button>
                </div>
                <div className={`${styles.imgBackground}`}>
                    <div className={`${styles.triangulo} ${respostive.Rtriangulo}`}/>
                    <img src={section2Background} alt="background-Comida-Tailandesa"/>
                </div>
            </div>
            <img className={`${styles.wave} ${respostive.waveR}`} src={wave} alt="Wave Effect background" />
        </Section>
        <Section color="E6E9F2" image={backgroundBuble}>
            <div className={`${styles.containerRecipes} ${respostive.RcontainerRecipes} `}>
                <h2>Venha divulgar suas receitas, escolha <span>Ingredientes</span>, <span>Procedimentos</span> e <span>Imagens</span> !</h2>
                <CardRecipes imagem={imageCard} tittle="Salada César" autor="everson"/>
            </div>
        </Section>
        <Section color="e6e9f2" >
            <div className={`${styles.containerDevs} ${respostive.RcontainerDevs}`}>
                <div className={`${styles.bord}`}></div>
                <h2>Desenvolvedores</h2>
                 <div className={`${styles.container}`}>
                    <div>
                        <img src={eduardo} alt="Desenvolvedor - Eduardo" />
                        <h3>Eduardo</h3>
                    </div>
                    <div>
                        <img src={everson} alt="Desenvolvedor - Everson" />
                        <h3>Everson</h3>
                    </div>
                    <div>
                        <img src={deyvid} alt="Desenvolvedor - Deyvid" />
                        <h3>Deyvid</h3>
                    </div>
                 </div>
            </div>
        </Section>
        <Section flex="linear">
            <div className={styles.waveOrange}></div>
            <div className={`${styles.containerForm} ${respostive.RcontainerForm}`}>
                <form>
                    <h2>Entre em Contato</h2>
                    <Input placeholder="Nome" text="Nome"/>
                    <Input placeholder="Email" text="Email"/>
                    <TextAreaAutoHeight text="Mensagem"/>
                    <Submit />
                </form>
            </div>
        </Section>
        </>
    )
}

export default Home;