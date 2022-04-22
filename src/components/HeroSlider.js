import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Carousel} from 'react-bootstrap'
import img_1 from '../images/1.jpeg'
import img_2 from '../images/2.jpeg'
import img_3 from '../images/3.jpeg'
import img_4 from '../images/4.jpeg'
import img_5 from '../images/5.jpeg'
import img_6 from '../images/6.jpeg'
import img_7 from '../images/7.jpeg'


const HeroSlider = () => {
    return(
        <>
        <Carousel>
        <Carousel.Item>
          <img 
            aria-label='Image of Great Wall of China, taken by Yang Dudu'
            className="d-block w-100"
            src={img_1}
            alt="First Slide"
          />
          <Carousel.Caption>
            <h3 aria-label='First wonder : Great Wall of China'>Great wall of China</h3>
            <p aria-label='Situated in : China'>China</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
          aria-label='Image of Petra in Jordan, taken by Abdullah Ghatasheh '
            className="d-block w-100"
            src={img_2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 aria-label='Second wonder : Petra'>Petra</h3>
            <p aria-label="Situated in : Ma'an,Jordan">Ma'an, Jordan</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            aria-label='Image of Colosseum in Rome, Italy. taken by Chait Goli'
            className="d-block w-100"
            src={img_3}
            alt="Third slide"
          />

          <Carousel.Caption>
            
            <h3 aria-label='Third Wonder : Colosseum'>Colosseum</h3>
            <p aria-label='Situated in : Rome,Italy'>Rome, Italy</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            aria-label='Image of Chichen Itza in Yucatan, Mexico. taken by Jose Andres Pacheco Cortes'
            className="d-block w-100"
            src={img_4}
            alt="Fourth slide"
          />

          <Carousel.Caption>
            
            <h3 aria-label='Fourth Wonder : Chichén Itzá'>Chichén Itzá</h3>
            <p aria-label='Situated in : Yucatán, Mexico'>Yucatán, Mexico</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            aria-label='Image of Machu Picchu in Cuzco Region, taken by Gilmer Diaz Estela '
            className="d-block w-100"
            src={img_5}
            alt="Fifth slide"
          />

          <Carousel.Caption>
            
            <h3 aria-label='Fifth Wonder:Machu Picchu'>Machu Picchu</h3>
            <p aria-label='Situated in : Cuzco Region'>Cuzco Region</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            aria-label='Image of Taj Mahal in Agra, India. Taken by Maahid Photos '
            className="d-block w-100"
            src={img_6}
            alt="Sixth slide"
          />

          <Carousel.Caption>
            
            <h3 aria-label='Sixth Wonder: Taj Mahal'>Taj Mahal</h3>
            <p aria-label='Situated in : Agra, India'>Agra, India</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            aria-label='Image of Christ the Redeemer in Rio de Janeiro, Brazil, taken by Anderson Juarez'
            className="d-block w-100"
            src={img_7}
            alt="Seventh slide"
          />

          <Carousel.Caption>
            
            <h3 aria-label='Seventh Wonder : Christ the Redeemer'>Christ the Redeemer</h3>
            <p aria-label='Situated in : Rio de Janeiro, Brazil'>Rio de Janeiro, Brazil</p>
          </Carousel.Caption>
        </Carousel.Item>

        
      </Carousel>
      {/*}
      <div class="text-left mt-5 ml-1" role="article" >
      <h4 class="text-center">Seven Wonders of the worlds(2021)</h4>
      <p><b>1. GREAT WALL OF CHINA :-</b> One of the world’s largest building-construction projects, the Great Wall of China is widely thought to be about 5,500 miles (8,850 km) long; a disputed Chinese study, however, claims the length is 13,170 miles (21,200 km). Work began in the 7th century BCE and continued for two millennia. </p>
      <p><b>2. PETRA :-</b> The ancient city of Petra, Jordan, is located in a remote valley, nestled among sandstone mountains and cliffs. It was purported to be one of the places where Moses struck a rock and water gushed forth. Later the Nabataeans, an Arab tribe, made it their capital, and during this time it flourished, becoming an important trade center, especially for spices.</p>
      <p><b>3. COLOSSEUM :-</b> The Colosseum in Rome was built in the first century by order of the Emperor Vespasian. A feat of engineering, the amphitheater measures 620 by 513 feet (189 by 156 meters) and features a complex system of vaults. It was capable of holding 50,000 spectators, who watched a variety of events. Perhaps most notable were gladiator fights, though men battling animals was also common.</p>
      <p><b>4. CHICHEN ITZA :-</b> Chichén Itzá is a Mayan city on the Yucatán Peninsula in Mexico, which flourished in the 9th and 10th centuries CE. Under the Mayan tribe Itzá—who were strongly influenced by the Toltecs—a number of important monuments and temples were built. Among the most notable is the stepped pyramid El Castillo (“The Castle”), which rises 79 feet (24 meters) above the Main Plaza.</p>
      <p><b>5. MACHU PICCHU :-</b> This Incan site near Cuzco, Peru, was “discovered” in 1911 by Hiram Bingham, who believed it was Vilcabamba, a secret Incan stronghold used during the 16th-century rebellion against Spanish rule. Although that claim was later disproved, the purpose of Machu Picchu has confounded scholars. Bingham believed it was home to the “Virgins of the Sun,” women who lived in convents under a vow of chastity.</p>
      <p><b>6. TAJ MAHAL :-</b> This mausoleum complex in Agra, India, is regarded as one of the world’s most iconic monuments and is perhaps the finest example of Mughal architecture. It was built by Emperor Shah Jahān (reigned 1628–58) to honor his wife Mumtāz Maḥal (“Chosen One of the Palace”), who died in 1631 giving birth to their 14th child.</p>
      <p><b>7. CHRIST THE REDEEMER :-</b> a colossal statue of Jesus, stands atop Mount Corcovado in Rio de Janeiro. Its origins date to just after World War I, when some Brazilians feared a “tide of godlessness.” They proposed a statue, which was ultimately designed by Heitor da Silva Costa, Carlos Oswald, and Paul Landowski.</p>
      </div>
    */}
      
      
      <Container class="mt-5">
  
  <Row className="justify-content-md-center mt-5">
    <Col sm="1"xs lg="3">
      
    </Col>
    
    <Col  role="article" sm="10" md="auto">
      <h4 class="text-center">Seven Wonders of the worlds(2021)</h4>
      <p class="mt-4"><b>1. GREAT WALL OF CHINA :-</b> One of the world’s largest building-construction projects, the Great Wall of China is widely thought to be about 5,500 miles (8,850 km) long; a disputed Chinese study, however, claims the length is 13,170 miles (21,200 km). Work began in the 7th century BCE and continued for two millennia. </p>
      <p><b>2. PETRA :-</b> The ancient city of Petra, Jordan, is located in a remote valley, nestled among sandstone mountains and cliffs. It was purported to be one of the places where Moses struck a rock and water gushed forth. Later the Nabataeans, an Arab tribe, made it their capital, and during this time it flourished, becoming an important trade center, especially for spices.</p>
      <p><b>3. COLOSSEUM :-</b> The Colosseum in Rome was built in the first century by order of the Emperor Vespasian. A feat of engineering, the amphitheater measures 620 by 513 feet (189 by 156 meters) and features a complex system of vaults. It was capable of holding 50,000 spectators, who watched a variety of events. Perhaps most notable were gladiator fights, though men battling animals was also common.</p>
      <p><b>4. CHICHEN ITZA :-</b> Chichén Itzá is a Mayan city on the Yucatán Peninsula in Mexico, which flourished in the 9th and 10th centuries CE. Under the Mayan tribe Itzá—who were strongly influenced by the Toltecs—a number of important monuments and temples were built. Among the most notable is the stepped pyramid El Castillo (“The Castle”), which rises 79 feet (24 meters) above the Main Plaza.</p>
      <p><b>5. MACHU PICCHU :-</b> This Incan site near Cuzco, Peru, was “discovered” in 1911 by Hiram Bingham, who believed it was Vilcabamba, a secret Incan stronghold used during the 16th-century rebellion against Spanish rule. Although that claim was later disproved, the purpose of Machu Picchu has confounded scholars. Bingham believed it was home to the “Virgins of the Sun,” women who lived in convents under a vow of chastity.</p>
      <p><b>6. TAJ MAHAL :-</b> This mausoleum complex in Agra, India, is regarded as one of the world’s most iconic monuments and is perhaps the finest example of Mughal architecture. It was built by Emperor Shah Jahān (reigned 1628–58) to honor his wife Mumtāz Maḥal (“Chosen One of the Palace”), who died in 1631 giving birth to their 14th child.</p>
      <p><b>7. CHRIST THE REDEEMER :-</b> a colossal statue of Jesus, stands atop Mount Corcovado in Rio de Janeiro. Its origins date to just after World War I, when some Brazilians feared a “tide of godlessness.” They proposed a statue, which was ultimately designed by Heitor da Silva Costa, Carlos Oswald, and Paul Landowski.</p></Col>
    <Col  sm="1" xs lg="2">
      
    </Col>
  </Row>
  {/* <Row>
    <Col>1 of 3</Col>
    <Col md="auto">Variable width content</Col>
    <Col xs lg="2">
      3 of 3
    </Col>
  </Row>
  */}
</Container>
      
      </>
    )
}
 /* sm="8" sm="4" */

export default HeroSlider