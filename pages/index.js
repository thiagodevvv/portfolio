import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {Container} from 'react-bootstrap'

export default function Home() {
  const [apresentacaoVisible, setApresentacaoVisible] = useState(true)
  const [sobreMimVisible, setSobreMimVisible] = useState(false)
  const [motivosVisible, setMotivosVisible] = useState(false)
  const [backendVisible, setBackendVisible] = useState(true)
  const [frontEndVisible, setFrontEndVisible] = useState(false)
  const [dbVisible, setDbVisible] = useState(false)
  const [projectsVisible, setProjectsVisible] = useState(false)
  return (
      <body>
        <Container className="container" fluid>
          <Head>
            <title>Thiago - Programador</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Container className="header" fluid>
            <Container className="nav-bar">
              <Container style={{flexDirection: "row", flex: 1}}>
                <p style={{fontFamily: 'Oswald', fontSize:"2.2rem", color: 'white'}}>Thiago</p> 
                <p style={{fontFamily: 'Oswald', fontSize: "2.2rem", color: 'white', opacity: 0.7, marginLeft: 3}}>Ferrari</p>
              </Container>
              <Container style={{flexDirection: "row", flex:3, marginLeft: -30}}>
                <p onClick={() => {
                  setApresentacaoVisible(true)
                  setSobreMimVisible(false)
                  setMotivosVisible(false)
                }}  style={{color: `${apresentacaoVisible ? "rgb(111,244,168)" : ""}`}} className="menu-text">Apresentação</p>
                <p onClick={() => {
                  setApresentacaoVisible(false)
                  setSobreMimVisible(true)
                  setMotivosVisible(false)
                }}  style={{color: `${sobreMimVisible ? "rgb(111,244,168)" : ""}`}} className="menu-text">Sobre mim</p>
                <p onClick={() => {
                  setApresentacaoVisible(false)
                  setSobreMimVisible(false)
                  setMotivosVisible(true)
                }} style={{color: `${motivosVisible ? "rgb(111,244,168)" : ""}`}} className="menu-text">Motivos para me contratar</p>
              </Container>
              <Container style={{flexDirection: "row", flex: 2, marginLeft:-30}}>
                <Container onClick={() => window.open('https://github.com/thiagodevvv','_blank').focus()} className="content-social-img-text">
                  <Container  className="content-social">
                  <img src="/bxl-github.svg" width="30" height="30"></img>
                  </Container>
                  <p className="social-text">GitHub</p>
                </Container>
                <Container onClick={() => window.open('https://www.linkedin.com/in/thiago-ferrari-b90996193/','_blank').focus()} className="content-social-img-text">
                  <Container className="content-social">
                    <img src="/bxl-linkedin-square.svg" width="30" height="30"></img>
                  </Container>
                  <p className="social-text">LinkedIn</p>
                </Container>
                <Container  onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=th.ferrari@outlook.com.br', '_blank').focus()} className="content-social-img-text">
                  <Container className="content-social">
                  <img src="/bx-mail-send.svg" width="30" height="30"></img>
                  </Container>
                  <p className="social-text">Send mail</p>
                </Container>
              </Container>
            </Container>
            <Container className="about">

              <Container className="about-text">
                <Container style={{backgroundColor: "rgb(111,244,168)", margin: 0, padding:0, width: 160, fontWeight: 'bold', borderRadius: 4}}>
                 {apresentacaoVisible ? <p style={{fontFamily: 'Roboto', fontSize: 15, margin: 4, padding: 0}}>Programador FullStack</p> : ""}
                </Container>
                {apresentacaoVisible ? <p align="justify" style={{marginTop: 30,fontSize: 15, fontFamily: 'Roboto', fontWeight: 'bold', color: 'white'}}>
                Oi, seja bem vindo ao meu portfolio dev!<br/><br/> Me chamo Thiago, tenho 24 anos, sou de Bauru-SP e estou em busca de emprego na área de desenvolvimento.</p> : ""}
                {sobreMimVisible ? <p align="justify" style={{marginTop: 10,fontSize: 14, fontFamily: 'Roboto', fontWeight: 'bold', color: 'white'}}>
                Comecei a estudar programação em setembro de 2019. Mas por que eu comecei a estudar programação? 
                Em 2019 eu tinha 22 anos e trabalhando no atual emprego (Em um almoxarifado hospitalar) decidi que queria trabalhar com algo que eu me identificasse, 
                que gostasse... Sempre gostei de computador, de jogos, criar servidores piratas (Jogo The Duel) onde tive o primeiro contato de como as coisas funcionavam, 
                editando sites já prontos feitos em php+javascript+html+css, arquivos de xml, SQL Server entre outros. 
                Então coloquei como meu objetivo de carreira profissional que me tornaria um desenvolvedor.
                Além dos estudos pela internet(youtube,udemy entre outros) iniciei graduação  na faculdade UNIP cursando Análise de Desenvolvimento de Sistemas em janeiro de 2020. 
                Sempre fui empenhado nos estudos, autodidata e disciplinado, mesmo estando 10 horas fora de casa trabalhando em meu atual emprego me mantive em busca de 
                conhecimento e colocando em pratica.
                  </p> : ""}
                {motivosVisible ? <p style={{marginTop: 10,fontSize: 15, fontFamily: 'Roboto', fontWeight: 'bold', color: 'white'}}>
                  <ul>
                    <li> <p  style={{fontFamily: 'Roboto', fontSize: 15, fontWeight: 'bold', color: 'white'}}>Sede de aprendizado e crescimento profissional</p></li>
                    <li> <p  style={{fontFamily: 'Roboto', fontSize: 15, fontWeight: 'bold', color: 'white'}}>Programador raiz, escolho a ferramenta de linguagem de programação ideal para resolver o problema</p></li>
                    <li> <p  style={{fontFamily: 'Roboto', fontSize: 15, fontWeight: 'bold', color: 'white'}}>Aprendo lendo documentação da ferramenta/tecnologia</p></li>
                    <li> <p  style={{fontFamily: 'Roboto', fontSize: 15, fontWeight: 'bold', color: 'white'}}>Forte hábito de pesquisa em inglês para me auxiliar em dificuldades</p></li>
                  </ul>
                  </p> : ""}
              </Container>

              <Container className="content-img">
                <Container  className="hack-img" >
                  <Image src="/hack.png" width="300" height="380" responsive="true"/>
                </Container>
                
              </Container>
            </Container> 
              
          </Container>
          <Container className="content" fluid>
            {/* Container dos butoes */}
            <Container className="container-opts">
              <Container onClick={() => {
                setBackendVisible(true)
                setFrontEndVisible(false)
                setDbVisible(false)
                setProjectsVisible(false)
              }} className="backend">
                <p  onClick={() => {
                setBackendVisible(true)
                setFrontEndVisible(false)
                setDbVisible(false)
                setProjectsVisible(false)
              }}   style={{color: `${backendVisible ? "rgb(111,244,168)" : ""}`}} className="text-techs">Back-end</p>
                <p  onClick={() => {
                setBackendVisible(true)
                setFrontEndVisible(false)
                setDbVisible(false)
                setProjectsVisible(false)
              }}  style={{color: `${backendVisible ? "rgb(111,244,168)" : ""}`}} className="text-techs-description">Conheça as tecnologias que utilizo para construir o coração de uma aplicação.</p>
              </Container>
              <Container  onClick={() => {
                setBackendVisible(false)
                setFrontEndVisible(true)
                setDbVisible(false)
                setProjectsVisible(false)
              }} className="frontend">
                <p onClick={() => {
                setBackendVisible(false)
                setFrontEndVisible(true)
                setDbVisible(false)
                setProjectsVisible(false)
              }}  style={{color: `${frontEndVisible ? "rgb(111,244,168)" : ""}`}} className="text-techs">Front-end</p>
                <p  onClick={() => {
                setBackendVisible(false)
                setFrontEndVisible(true)
                setDbVisible(false)
                setProjectsVisible(false)
              }} style={{color: `${frontEndVisible ? "rgb(111,244,168)" : ""}`}} className="text-techs-description">Conheça as tecnologias que utilizo para construir o visual de uma aplicação.</p>
              </Container>
              <Container onClick={() => {
                setBackendVisible(false)
                setFrontEndVisible(false)
                setDbVisible(true)
                setProjectsVisible(false)
              }} className="db">
                <p onClick={() => {
                setBackendVisible(false)
                setFrontEndVisible(false)
                setDbVisible(true)
                setProjectsVisible(false)
              }}  style={{color: `${dbVisible ? "rgb(111,244,168)" : ""}`}} className="text-techs">Banco de dados</p>
                <p onClick={() => {
                setBackendVisible(false)
                setFrontEndVisible(false)
                setDbVisible(true)
                setProjectsVisible(false)
              }}  style={{color: `${dbVisible ? "rgb(111,244,168)" : ""}`}}  className="text-techs-description">Conheça as tecnologias que utilizo para construir base de dados de uma aplicação.</p>
              </Container>
              <Container onClick={() => {
                setBackendVisible(false)
                setFrontEndVisible(false)
                setDbVisible(false)
                setProjectsVisible(true)
              }} className="projects">
                <p  onClick={() => {
                setBackendVisible(false)
                setFrontEndVisible(false)
                setDbVisible(false)
                setProjectsVisible(true)
              }}  style={{color: `${projectsVisible ? "rgb(111,244,168)" : ""}`}}  className="text-techs">Projetos</p>
                <p  onClick={() => {
                setBackendVisible(false)
                setFrontEndVisible(false)
                setDbVisible(false)
                setProjectsVisible(true)
              }}  style={{color: `${projectsVisible ? "rgb(111,244,168)" : ""}`}} className="text-techs-description">Conheça projetos que já realizei profissionalmente e pessoais</p>
              </Container>
            </Container>
           <Container className="container-describle">
              {backendVisible ? <p align="justify" style={{marginTop: 30,fontSize: 15, fontFamily: 'Roboto', fontWeight: 'bold', color: 'white'}}>
               Para construir o coração de uma aplicação utilizo <span style={{color:'rgb(111,244,168)'}}>NodeJS</span>, mas não me limito a tecnologia utilizada, posso construir qualquer API Rest, servidor... com qualquer 
               tecnologia back-end, exemplo de outras linguagens que já pratiquei:  <span style={{color: '#87CEFA'}}>C#</span> e  <span style={{color: 'yellow'}}>Python</span> </p> : ""}
              {frontEndVisible ? <p align="justify" style={{marginTop: 30,fontSize: 15, fontFamily: 'Roboto', fontWeight: 'bold', color: 'white'}}>
                Para construir a interface de uma aplicação eu utilizo as seguintes tecnologias: <span style={{color: 'yellow'}}>JavaScript</span>,
                <span style={{color: 'rgb(233,98,40)'}}> HTML</span>, <span style={{color: 'rgb(41,101,241)'}}>CSS</span>, 
                <span style={{color: 'rgb(94,211,243)'}}> ReactJS (NextJS, ContextApi)</span> e <span style={{color: '#7B68EE'}}>React Native.</span>
              </p> : ""}
              {dbVisible ? <p align="justify" style={{marginTop: 30,fontSize: 15, fontFamily: 'Roboto', fontWeight: 'bold', color: 'white'}}>
              Para o armazenamento de dados, tenho domínio em: <span style={{color: 'white'}}>SQL(<span style={{color: 'rgb(0,94,134)'}}>My</span><span style={{color: 'rgb(219,127,0)'}}>SQL</span>, 
              <span style={{color: 'rgb(51,103,145)'}}> PostgreSQL</span>)</span> e <span style={{color: 'rgb(142,193,110)'}}>mongo</span><span style={{color: '#A9A9A9'}}>DB</span>
              </p> : ""}
              {projectsVisible ? <p align="justify" style={{marginTop: 30,fontSize: 15, fontFamily: 'Roboto', fontWeight: 'bold', color: 'white'}}>
              <ul>
                <li> <p style={{fontFamily: 'Roboto', fontWeight: 'bold', color: 'white', fontSize:15}}>Projetos profissional</p></li>
                <p align="justify" style={{fontFamily: 'Roboto', fontWeight: 'bold', color: 'white', fontSize:15}}>
                  1. Meu primeiro projeto feito profissionalmente como freelancer, é uma aplicação de perguntas de direito. Além da tela principal: <a target="_blank" style={{color: 'rgb(111,244,168)'}} href="https://quizdireito.vercel.app">Acesse aqui </a>, 
                   há também o painel do admin do website, onde ele cadastra as questões, deleta e também gera PDF com as questões. Para construir utilizei NextJS com react-bootstrap para responsividade
                  no front-end. Para o back-end foi utilizado as Serveless Functions da Vercel com NodeJS e lib PDFmake para gerar os PDF's e banco de dados MongoDB. <a target="_blank" style={{color: 'rgb(111,244,168)'}} href="https://github.com/thiagodevvv/quizdireito">Acesse repositório aqui.</a>
                </p>
                <li> <p style={{fontFamily: 'Roboto', fontWeight: 'bold', color: 'white', fontSize:15}}>Projetos pessoais</p></li>
                  <p align="justify" style={{fontFamily: 'Roboto', fontWeight: 'bold', color: 'white', fontSize:15}}>
                    <ul>
                      <li>
                      <p style={{fontFamily: 'Roboto', fontWeight: 'bold', color: 'white', fontSize: 15}}>
                        Projeto Rifa Digital <a target="_blank"  href="https://www.linkedin.com/posts/activity-6702524206472601601-NAHT" style={{color: 'rgb(111,244,168)'}} > Acesse aqui para visualizar</a>, nesse projeto o usuário pode publicar/adquirir rifas. Techs utilizadas: NodeJS, ReactJS, HTML CSS e PostgreSQL. <br/>
                        Técnicas back-end: Express para criar o servidor, JWT para gerar token para o usuário, middlewares de segurança, knex para realizar querys no PostgreSQL e  
                        AWS-SDK Multer s3 para armazenamento de imagens das rifas criadas <br/>
                        Técnicas front-end: Context Api, parar compartilhar informações em qualquer componente react, um grande aprendizado para facilitar o desenvolvimento com react.
                        Drop de arquivos, e styled components.  <a target="_blank" style={{color: "rgb(111,244,168)"}} href="https://github.com/thiagodevvv/Rifa-Digital"> Acesse repositório aqui</a>
                      </p>
                      
                      
                      </li>
                      <li> <p style={{fontFamily: 'Roboto', fontWeight: 'bold', color: 'white', fontSize: 15}}>
                        Projeto Xadrez Timer/Selecionar Player <a target="_blank" href="https://www.linkedin.com/posts/activity-6703704192504147968--K-d" style={{color: 'rgb(111,244,168)'}}> 
                        Acesse aqui para visualizar.</a><br/>
                        Projeto utilizando React Native, <a target="_blank" href="https://github.com/thiagodevvv/appchess" style={{color: 'rgb(111,244,168)'}}> Acesse repositório aqui.</a> 
                        
                        </p>
                      </li>

                      <li> <p style={{fontFamily: 'Roboto', fontWeight: 'bold', color: 'white', fontSize: 15}}>
                        Projeto microservices com streams e fila em NodeJS <a target="_blank" href="https://github.com/thiagodevvv/microservices-nodejs" style={{color: 'rgb(111,244,168)'}}> 
                        Acesse repositório.</a>         
                        </p>
                      </li>
                    </ul>
                   
                  </p>
              </ul>
              </p> : ""}
           </Container>
          </Container>
    </Container>
      </body>
  )
}
