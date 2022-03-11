import React,{useState} from 'react'
import Header from './modules/header'
import {Carousel, Card, Container, Row, Col} from 'react-bootstrap';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import {FaUserPlus, FaWarehouse, FaLocationArrow, FaNeuter,
  FaPencilAlt} from 'react-icons/fa';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
// import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {Navbar, Nav,
  NavDropdown, Form, 
  FormControl, Accordion} from 'react-bootstrap'
import RegModal from './modules/reg_modal';
import Login_Modal from './modules/login_modal';

function Copyright() {
  return (
    <Typography variant="body2" color="#fff" align="center" >
      {'Copyright © '}
      <Link color="inherit" href="#">
        www.kwaba.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [
       {
         id: 1,
         image: './assets/p_images/Amen-Ph2-terrace-1.jpg',
         subHead: 'Duplex',
         aboutHouse: 'We have conducsive room environment, well furnished and organise'
       },
       {
        id: 2,
        image: './assets/p_images/e84020c3-real-estate- (1).jpg',
        subHead: 'Real Estate',
        aboutHouse: 'We are also into real estate management '
      },
      {
        id: 3,
        image: './assets/p_images/Housing-1.jpg',
        subHead: '2-3 Bed Room Flat',
        aboutHouse: 'Affordable flat that suit your needs'
      }
];



const theme = createTheme();


function Home() {

  const [modalShow, setModalShow] = React.useState(false);
  const [loginmodalShow,setLoginModalShow] = React.useState(false);
  
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  
  return (
     <>
     <Header 
     about_href="#about"
      faq_href="#faq" />

     <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./assets/p_images/KWABA_BANNER.png"
      alt="First slide"
       width={1200}
       height={500}
    />
    <Carousel.Caption>
      <h3>Rental Financial Platform </h3>
      <p>We offer professional services</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./assets/p_images/KWABA_BANNER_01.png"
      alt="Second slide"
      width={1200}
       height={550}
    />

    <Carousel.Caption>
      {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./assets/p_images/e84020c3-real-estate- (1).jpg"
      alt="Second slide"
      width={1200}  
       height={550}
    />

    <Carousel.Caption>
      <h3>We render professional services</h3>
      <p>We have all it's takes to bring you the confort you desire</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<br />
<Container>
  <Card className="text-center">
  <Card.Header>Featured <FaNeuter /></Card.Header>
  <Card.Body>
    <Card.Title>KWABA RENTAL SERVICES</Card.Title>
    <Card.Text>
    We are the best financing platform that helps renters split their annual rent into monthly payments. Our systems are dynamic and effective...
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted">
       wwww.kwaba.com
  </Card.Footer>
</Card>
</Container>

<br />
<ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar> */}
       <Container sx={{ py: 8, p: 5 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '0.25%',
                    }}
                    image={card.image}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {card.subHead} <FaWarehouse />
                    </Typography>
                    <Typography>
                      <center>
                         {card.aboutHouse}
                      </center>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small">View</Button>
                    <Button size="small">Edit</Button> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
 <br />
 <Container>
  <center>
    <a id='faq' style={{textDecoration:'none'}}> 
    <h3>F.A.Q  <FaPencilAlt /> </h3> 
    </a> 
    </center>
 <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>What Are Your Percentage Charge</Accordion.Header>
    <Accordion.Body>
       Our percentage charge are cheap and affordable just 2% of our monthly charge fee.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Are your services just in Nigeria?</Accordion.Header>
    <Accordion.Body>
       We are all over nigeria and we have our branch over africa.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
</Container>

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
             <a id='about' style={{textDecoration:'none'}}> About Us </a> 
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Kwaba is a rent financing platform that helps renters split their annual rent into monthly payments. For renters to get qualified to use Kwaba as a service, they have to get pre-approved for a rent amount.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" color="success"
               onClick={() => setModalShow(true)} >
                REGISTER &nbsp; <FaUserPlus />
              </Button>
                  <RegModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  />
                  {/* /////////===Login & Reg Modal Split/////////// */}
              <Button variant="contained" color="primary"
               onClick={() => setLoginModalShow(true)} >
                Login <FaLocationArrow />
              </Button>
                  <Login_Modal
                  show={loginmodalShow}
                  onHide={() => setLoginModalShow(false)}
                  />
            </Stack>
          </Container>
        </Box>
       
      </main>
      {/* Footer */}

      <Box sx={{ bgcolor: 'text.primary', p: 6 }} component="footer">
        <Typography variant="h6" align="center" color="#fff" gutterBottom>
           KWABA RENTAL PLATFORM
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="#fff"
          component="p"
        >
          Home of satisfaction
        </Typography>
        
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>



  </>
  )
}

export default Home