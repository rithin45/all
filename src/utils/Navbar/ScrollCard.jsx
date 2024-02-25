import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './Style.css'

// const contentStyle = {
//   width: '80%',
//   // display: 'flex',
//   // flexDirection: 'row',
//   // justifyContent: 'center',
//   // alignItems: 'center',
// };

const imgstyle = {
  width: '100%',
  maxHeight: "400px",
  marginTop: '10px',
  borderRadius: '10px',
  objectFit: 'cover'
}

const splidestyle = { aspectRatio: '9/16', objectFit: 'contain',maxHeight:"370px"}

const ScrollCard = () => (
   
  <div style={{marginLeft:'10px',marginTop:'10px'}}>
  <Splide
  options={{
    easing: 'ease-in-out',
    width: '100%',
    height:"50%",
    interval: 2800,
    rewind: true,
    perPage: 2,
    gap: '1rem',
    arrows: false,
    // perMove: 1,
    autoplay: true,
    pagination: true,
  }}
  // style={{background: 'white'}}
  >

    <SplideSlide style={splidestyle} >
      <img src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg" 
      style={imgstyle} />

      {/* <div className='imgoverlay-text'>
        <h3 style={{color:'#F3ABB6', marginRight:'200px', marginLeft:'-240px', marginTop:'-60px'}}>
          Search for best complement to your Home</h3>
      </div> */}
    </SplideSlide>

    <SplideSlide style={splidestyle}>
      <img src="https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg?cs=srgb&dl=pexels-matheus-cenali-2733918.jpg&fm=jpg" 
      style={imgstyle} />

      {/* <div className='imgoverlay-text'>
        <h3 style={{color:'#FFBF7D', marginRight:'0px', marginLeft:'5px', marginTop:'-110px'}}>
         Embrace the bloom of Life</h3>
      </div> */}
    </SplideSlide>

    <SplideSlide style={splidestyle}>
      <img src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg" 
      style={imgstyle} />

       {/* <div className='imgoverlay-text'>
        <h3 style={{color:'#D562BE', marginRight:'0px', marginLeft:'-15px', marginTop:'10px'}}>
         Celebrate the beauty of each Petals</h3>
      </div> */}
    </SplideSlide>

    <SplideSlide style={splidestyle}>
      <img src="https://gap.cr/wp-content/uploads/2023/10/Supermarkets-and-Grocery-Stores-in-Costa-Rica.jpg" 
      style={imgstyle} />

      {/* <div className='imgoverlay-text'>
        <h3 style={{color:'#FEC300', marginRight:'150px', marginLeft:'-260px', marginTop:'-85px'}}>
        Blossom with us at BloomingBuds-
        Flowers are momemts wrapped in Petals</h3>
      </div> */}
    </SplideSlide>

    <SplideSlide style={splidestyle}>
      <img src="https://images.ctfassets.net/qr8kennq1pom/4HobsFfwuFnNfhL5G4TZil/bfb2aa5065e4a967e3cd1499f2c255bc/nrd-D6Tu_L3chLE-unsplash.jpg?fm=jpg&fl=progressive&q=70" 
      style={imgstyle} />

      {/* <div className='imgoverlay-text'>
        <h3 style={{color:'#D80032', marginRight:'0px', marginLeft:'15px', marginTop:'-20px'}}>
        Awaken your senses with the Beauty of Blooms</h3>
      </div> */}
    </SplideSlide>

    <SplideSlide style={splidestyle}>
      <img src="https://www.eatthis.com/wp-content/uploads/sites/4/2018/06/grocery-store-neonbrand-unsplash.jpg?quality=82&strip=1" 
      style={imgstyle} />
      
      {/* <div className='imgoverlay-text'>
        <h3 style={{color:'#E981A4', marginRight:'0px', marginLeft:'-260px', marginTop:'-110px'}}>
        Elavate your moments with grace of Flowers</h3>
      </div> */}
    </SplideSlide>
    
  </Splide>
  </div>
);

export default ScrollCard;