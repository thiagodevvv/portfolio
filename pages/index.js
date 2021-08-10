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
                <p style={{fontFamily: 'Oswald', fontSize: 22, color: 'white'}}>Thiago</p> 
                <p style={{fontFamily: 'Oswald', fontSize: 22, color: 'white', opacity: 0.7, marginLeft: 3}}>Ferrari</p>
              </Container>
              <Container style={{flexDirection: "row", flex:3}}>
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
              <Container style={{flexDirection: "row", flex: 2}}>
                <Container className="content-social-img-text">
                  <Container  className="content-social">
                  <img src="/bxl-github.svg" width="30" height="30"></img>
                  </Container>
                  <p className="social-text">GitHub</p>
                </Container>
                <Container className="content-social-img-text">
                  <Container className="content-social">
                    <img src="/bxl-linkedin-square.svg" width="30" height="30"></img>
                  </Container>
                  <p className="social-text">LinkedIn</p>
                </Container>
                <Container className="content-social-img-text">
                  <Container className="content-social">
                  <img src="/bx-mail-send.svg" width="30" height="30"></img>
                  </Container>
                  <p className="social-text">Send mail</p>
                </Container>
                
                
                
              </Container>
            </Container>{/* */}
            <Container className="about">

              <Container className="about-text">
                <Container style={{backgroundColor: "rgb(111,244,168)", margin: 0, padding:0, width: 160, fontWeight: 'bold', borderRadius: 4}}>
                  <p style={{fontFamily: 'Roboto', fontSize: 15, margin: 4, padding: 0}}>Programador FullStack</p>
                </Container>
                {apresentacaoVisible ? <p align="justify" style={{marginTop: 30,fontSize: 15, fontFamily: 'Roboto', fontWeight: 'bold', color: 'white'}}>Meu nome é Thiago, tenho 24 anos, 
                moro em Bauru-SP e estou em busca de emprego na área de desenvolvimento.</p> : ""}
                {sobreMimVisible ? <p align="justify" style={{marginTop: 30,fontSize: 15, fontFamily: 'Roboto', fontWeight: 'bold', color: 'white'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> : ""}
                {motivosVisible ? <p align="justify" style={{marginTop: 30,fontSize: 15, fontFamily: 'Roboto', fontWeight: 'bold', color: 'white'}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p> : ""}
              </Container>

              <Container className="content-img">
                <Container style={{backgroundColor: 'rgb(39,41,45)',width: 340, height: 380, borderRadius: "50%"}}>
                  <Image src="/hack.png" width="300" height="380" responsive="true"/>
                </Container>
                
              </Container>
            </Container> 
              
          </Container>
          <Container className="content" fluid>
            {/* Container dos butoes */}
            <Container style={{display: 'flex', flexDirection : 'column', width: "50%", marginLeft:0}}>
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
              }} className="text-techs">Back-end</p>
                <p  onClick={() => {
                setBackendVisible(true)
                setFrontEndVisible(false)
                setDbVisible(false)
                setProjectsVisible(false)
              }} className="text-techs-description">Conheça as tecnologias que utilizo para construir o coração de uma aplicação.</p>
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
              }} className="text-techs">Front-end</p>
                <p  onClick={() => {
                setBackendVisible(false)
                setFrontEndVisible(true)
                setDbVisible(false)
                setProjectsVisible(false)
              }} className="text-techs-description">Conheça as tecnologias que utilizo para construir o visual de uma aplicação.</p>
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
              }} className="text-techs">Banco de dados</p>
                <p onClick={() => {
                setBackendVisible(false)
                setFrontEndVisible(false)
                setDbVisible(true)
                setProjectsVisible(false)
              }} className="text-techs-description">Conheça as tecnologias que utilizo para construir base de dados de uma aplicação.</p>
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
              }} className="text-techs">Projetos</p>
                <p  onClick={() => {
                setBackendVisible(false)
                setFrontEndVisible(false)
                setDbVisible(false)
                setProjectsVisible(true)
              }} className="text-techs-description">Conheça projetos que já realizei profissionalmente e pessoais</p>
              </Container>
            </Container>
           {/* Container dos textos */}
           <Container style={{width: "50%"}}>
              {backendVisible ? <p align="justify" style={{marginTop: 30,fontSize: 15, fontFamily: 'Roboto', fontWeight: 'bold', color: 'white'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> : ""}
              {frontEndVisible ? <p align="justify" style={{marginTop: 30,fontSize: 15, fontFamily: 'Roboto', fontWeight: 'bold', color: 'white'}}>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', 
              making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 
              and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, 
              sometimes by accident, sometimes on purpose (injected humour and the like).</p> : ""}
              {dbVisible ? <p align="justify" style={{marginTop: 30,fontSize: 15, fontFamily: 'Roboto', fontWeight: 'bold', color: 'white'}}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
              nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".</p> : ""}
              {projectsVisible ? <p align="justify" style={{marginTop: 30,fontSize: 15, fontFamily: 'Roboto', fontWeight: 'bold', color: 'white'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> : ""}
           </Container>
          </Container>
    </Container>
      </body>
  )
}
