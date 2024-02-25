import React, { useState, useEffect } from 'react';
import axios from 'axios';
import{Buffer} from 'buffer';

import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { background } from '@chakra-ui/react';
import Navsidebar from './Navbar/Navsidebar';

const Addcrt = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3005/view")
      .then(response => {
        setCart(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleRemoveFromCart = (productId) => {
    axios.delete(`http://localhost:3005/cart/${productId}`)
      .then(response => {
        setCart(cart.filter(item => item._id !== productId));
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Navsidebar/>
      <Typography variant='h4' gutterBottom>
        Cart
      </Typography>
      {cart.map((product, index) => (
        <Card key={index} sx={{ maxWidth: 345, marginBottom: '16px' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={`data:image/jpeg;base64,${Buffer.from(product.image1.data).toString('base64')}`}
              alt={product.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Offer Price: {product.offer_price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                MRP: {product.MRP}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Category: {product.category}
              </Typography>
              <Button size="small" color="secondary" onClick={() => handleRemoveFromCart(product._id)}>
                Remove from Cart
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default Addcrt;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
// import{Buffer} from 'buffer';


// const Cart = () => {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     // Fetch cart data from the backend when the component mounts
//     axios.get("http://localhost:3005/view")
//       .then(response => {
//         setCart(response.data);
//       })
//       .catch(err => console.log(err));
//   }, []);

//   const handleRemoveFromCart = (productId) => {
//     // Remove product from cart
//     axios.delete(`http://localhost:3005/cart/${productId}`)
//       .then(response => {
//         setCart(cart.filter(item => item._id !== productId));
//       })
//       .catch(err => console.log(err));
//   };

//   return (
//     <div>
//       <Typography variant='h4' gutterBottom>
//         Cart
//       </Typography>
//       {cart.map((product, index) => (
//         <Card key={index} sx={{ maxWidth: 345 }}>
//           <CardActionArea>
//             <CardMedia
//               component="img"
//               height="140"
//               image={`data:image/jpeg;base64,${Buffer.from(product.image1.data).toString('base64')}`}
//               alt={product.name}
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 {product.name}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Offer Price: {product.offer_price}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 MRP: {product.MRP}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Category: {product.category}
//               </Typography>
//               <Button size="small" color="secondary" onClick={() => handleRemoveFromCart(product._id)}>
//                 Remove from Cart
//               </Button>
//             </CardContent>
//           </CardActionArea>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default Cart;

