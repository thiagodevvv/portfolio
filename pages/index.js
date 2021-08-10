import Head from 'next/head'
import Image from 'next/image'
import {Container} from 'react-bootstrap'

export default function Home() {
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
                <p style={{fontFamily: 'Oswald', fontSize: 15, color: 'white'}}>Thiago</p> 
                <p style={{fontFamily: 'Oswald', fontSize: 15, color: 'white', opacity: 0.7, marginLeft: 3}}>Ferrari</p>
              </Container>
              <Container style={{flexDirection: "row", flex:3}}>
                <p style={{fontFamily: 'Oswald', fontSize: 15, color: 'white'}}>Apresentação</p>
                <p style={{fontFamily: 'Oswald', fontSize: 15, color: 'white', marginLeft: 20}}>Sobre mim</p>
                <p style={{fontFamily: 'Oswald', fontSize: 15, color: 'white', marginLeft: 20}}>Por que devo ser contratado</p>
              </Container>
              <Container style={{flexDirection: "row", flex: 2}}>
                <Container style={{backgroundColor: "white", height: 30, width: 30, borderRadius: 5, display: 'flex', alignItems: 'center', marginRight: 5}}>
                  <img src="/bxl-github.svg" width="30" height="30"></img>
                </Container>
                <p style={{fontSize: 'Oswald', fontSize: 13, color: 'white', marginTop: 5}}>GitHub</p>
                <Container style={{backgroundColor: "white", height: 30, width: 30, borderRadius: 5,display: 'flex', alignItems: 'center',  marginRight: 5}}>
                  <img src="/bxl-linkedin-square.svg" width="30" height="30"></img>
                </Container>
                <p style={{fontSize: 'Oswald', fontSize: 13, color: 'white',marginTop: 5}}>Linkedin</p>
                <Container style={{backgroundColor: "white", height: 30, width: 30, borderRadius: 5,display: 'flex', alignItems: 'center',  marginRight: 5}}>
                  <img src="/bx-mail-send.svg" width="30" height="30"></img>
                </Container>
                <p style={{fontSize: 'Oswald', fontSize: 13, color: 'white', marginTop: 5}}>Send mail</p>
              </Container>
            </Container>{/* */}
            <Container className="about">

              <Container className="about-text">
                <Container style={{backgroundColor: "rgb(111,244,168)", margin: 0, padding:0, width: 160, fontWeight: 'bold'}}>
                  <p style={{fontFamily: 'Roboto', fontSize: 15, margin: 4, padding: 0}}>Programador FullStack</p>
                </Container>
                <p align="justify" style={{marginTop: 30,fontSize: 15, fontFamily: 'Roboto', fontWeight: 'bold', color: 'white'}}>Meu nome é Thiago, tenho 24 anos, 
                moro em Bauru-SP e estou em busca de emprego na área de desenvolvimento.</p>
              </Container>

              <Container className="content-img">
                <Image src="/hack.png" width="300" height="380" responsive="true"/>
              </Container>
            </Container> 
              
          </Container>
          <Container className="content" fluid>
            {/* Container dos butoes */}
            <Container style={{display: 'flex', flexDirection : 'column', width: "50%", marginLeft:0}}>
              <Container className="backend">
                <p style={{fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 25, color: 'white'}}>Back-end</p>
                <p style={{fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 13, color: 'white', opacity: 0.8}}>Clique para conhecer</p>
              </Container>
              <Container className="frontend">
                <p style={{fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 25, color: 'white'}}>Front-end</p>
                <p style={{fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 13, color: 'white', opacity: 0.8}}>Clique para conhecer</p>
              </Container>
              <Container className="db">
                <p style={{fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 25, color: 'white'}}>Banco de dados</p>
                <p style={{fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 13, color: 'white', opacity: 0.8}}>Clique para conhecer</p>
              </Container>
              <Container className="projects">
                <p style={{fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 25, color: 'white'}}>Projetos</p>
                <p style={{fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 13, color: 'white', opacity: 0.8}}>Clique para conhecer</p>
              </Container>
            </Container>
           {/* Container dos textos */}
           <Container style={{width: "50%"}}>

           </Container>
          </Container>
    </Container>
      </body>
  )
}
