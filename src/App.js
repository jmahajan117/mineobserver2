import './App.css';
import React from "react"
import { Card, Container, Carousel, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import image1 from "./assets/image1.jpg"
import image2 from "./assets/image2.jpg"
import tech_image from "./assets/Tech Framework.jpg"
import AI_arch from "./assets/AI Arch.png"
import PhotoVid from "./assets/Photographer.mp4"
import dash0 from "./assets/dashboard-0.png"
import dash1 from "./assets/dashboard-1.png"
import dash3 from "./assets/dashboard-3.png"
import dash5 from "./assets/dashboard-5.png"
import image3 from "./assets/image3.jpg"


class App extends React.Component {
  constructor(props) {
    super(props);

  }
  
  
  render () {
    return (
      <>
      <br/>
      <br/>
        <Card style={{display: "flex", flexDirection: "column", justifyContent: "center", border: "0px"}}>
          <center>
            <Card.Title style={{fontSize: 26, paddingBottom: 20}}> <b>MineObserver 2.0: A Deep Learning & In-Game Framework for Assessing Natural Language Descriptions of Minecraft Imagery </b></Card.Title>
            <Container style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
              <Card.Title style={{paddingRight: 30}}><a href="https://jmahajan117.github.io/">Jay Mahajan </a> </Card.Title>
              <Card.Title style={{paddingRight: 30}}>Samuel Hum</Card.Title>
              <Card.Title style={{paddingRight: 30}}><a href ="https://henhapl.me/index.html">Jack Henhapl</a></Card.Title>
              <Card.Title style={{paddingRight: 30}}>Diya Yunus</Card.Title>
              <Card.Title style={{paddingRight: 30}}>Matthew Gadbury</Card.Title>
              <Card.Title style={{paddingRight: 30}}><a href = "https://emicb.com/">Emi Brown</a></Card.Title>
              <Card.Title style={{paddingRight: 30}}><a href="https://jeffginger.com/#intro">Jeff Ginger</a></Card.Title>
              <Card.Title style={{paddingRight: 30}}><a href="https://education.illinois.edu/faculty/h-chad-lane">H. Chad Lane</a></Card.Title>
            </Container>
            <Card.Title style={{paddingTop: 30}}> <b>University of Illinois - Urbana Champaign </b></Card.Title>
            <br/>
            <Container style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
              <Card.Title>[Data Coming Soon]</Card.Title> 
              <Card.Title>[Code Coming Soon]</Card.Title>
              <Card.Title>[Paper]</Card.Title>
            </Container>
          </center>
        </Card>
        <br/>
        <br/>


        <Container style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <center>

            <iframe width="720" height="450" src="https://www.youtube.com/embed/nMVW_5S9xYU?autoplay=1" 
            title="YouTube video player" 
            frameborder="0"
            playlist=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          </center>

            <Card style={{border: "0px", padding: "20px"}}>
              <Card.Title style={{fontSize: 28, color: "black"}} >Abstract</Card.Title>
              <hr/>
              <Card.Text>We introduce several enhancements to MineObserver called MineObserver v2.0. 
                MineObserver v2.0 is a novel AI framework that uses state of art Computer Vision and Natural Language Processing for assessing the accuracy of learner-generated descriptions of astronomy-related images. 
                The purpose of this system  is to automatically assess the accuracy of participant observations, written in natural language, made during science learning activities that take place in Minecraft.
                We demonstrate our agent working in-game and in real-time, an advance from the prior work. 
                Moreover, we further enhance our AI system to use state of the art deep learning techniques with some novel ideas to improve learning for both the student and the teacher. 
                Our results suggest that our system has improved based on several metrics.</Card.Text>

              <Card.Title style={{fontSize: 28, color: "black"}} >MineObserver v2.0 AI Framework</Card.Title>
              <hr/>

              <center>
                <Image src = {tech_image} width="50%"></Image>
              </center>

              <Card.Text>Our AI framework can be broken down into three major parts: the Photographer, the AI Architecture, and the Visualizer. The sequence is as follows.
                The student makes a visual observation which consists of the student's in-game coordinates and a caption. Next, the Photographer teleports to the student's coordinates and takes a screenshot of the student's POV. The Photographer
                then sends the student's POV and caption to our AI Architecture. The AI Architecture uses the student's POV and caption to predict how accurate the observation is and
                gives feedback to the student. The AI Architecture also sends the feedback and a score to the Visualizer. At the end, the student receieves feedback via the Photographer
                and the Visualizer displays the observation made by the student with the AI's feedback. The feedback aims to help an individual student's observation skills while
                the Visualizer acts an intevention tool for the teacher to further guide a class of students to higlight, focus, and understand which observations are strong, weak, average, etc.
                
              </Card.Text>

              <Card.Title style={{fontSize: 20, color: "black"}}>Photographer</Card.Title>
              <hr/>

              <center>
                <video controls autostart loop autoPlay src={PhotoVid} width="50%" type="video/mp4" />
              </center>
              <br/>

              <Card.Text>
              The Photographer is a Minecraft client that teleports to the player coordinates to capture the student's POV. This client is hooked up with a
                spigot-client that sends data to our AI Architecture and displays the AI's result to the student. To make the Photographer readily avaliable, we
                host our entire client on an AWS EC2 instance. Note: The student will never physically see the Photographer client in action. This way we avoid 
                interupting the student's gameplay when making observations. The video above shows how the Photographer acts behind the scenes.
              </Card.Text>

              <Card.Title style={{fontSize: 20, color: "black"}}>AI Architecture</Card.Title>
              <hr/>

              <center>
                <Image src = {AI_arch} width="50%"></Image>  
              </center>

              <Card.Text>
                The AI Architecture consists of three parts: a Image Caption model, a RoBERTa model and the feedback system. Since Minecraft focuses on building and 
                crafting building, we used an image caption model that can focus on parts of the image. This lead us to Image Caption model that uses Attention layers. In
                this case, the image caption model acts an expert observer. Once the image caption model generates a caption based on the student's POV, 
                we feed the generated caption and student's caption into a pre-trained RoBERTa model. The model checks how similar the captions are via Cosine Similarity
                and captures keywords of the genarated caption. Finally, our feedback system uses the Cosine Similarity score and feedback to generate targeted feedback for the student.
              </Card.Text>

              <Card.Title style={{fontSize: 20, color: "black"}}>Visualizer</Card.Title>
              <hr/>

              <center>
              <Carousel variant='dark'>
                <Carousel.Item>
                  <Image src = {dash0} width="50%"/>
                </Carousel.Item>

                <Carousel.Item>
                  <Image src = {dash1} width="50%"/>
                </Carousel.Item>

                <Carousel.Item>
                  <Image src = {dash3} width="50%"/>
                </Carousel.Item>

                <Carousel.Item>
                  <Image src = {dash5} width="50%"/>
                </Carousel.Item>
              </Carousel>
              
            </center>


              <Card.Text>
                The Visualizer is a tool for the instructors to guide students when they make observations. Everytime an observation is made, 
                the Visualizer picks it up and displays the student's observation, an AI generated observation, the feedback, and username. At the end of session,
                the instructor can export all of the data to folder which contain the images and a csv of all text data. The images above showcase how the visualizer looks.
                Note: the images are showing the visualizer that is collecting AI data from an older version of our project.
              </Card.Text>


              <Card.Title style={{fontSize: 20, color: "black"}}>Example of Students using MineObserver v2.0</Card.Title>
              <hr/>

              <center>
              <Carousel variant='dark'>
                <Carousel.Item>
                  <Image src = {image1} width="50%"/>
                </Carousel.Item>

                <Carousel.Item>
                  <Image src = {image2} width="50%"/>
                </Carousel.Item>

                <Carousel.Item>
                  <Image src = {image3} width="50%"/>
                </Carousel.Item>
              </Carousel>
            </center>

            </Card>

        </Container>
        
      </>
    );
  }
}

export default App;
