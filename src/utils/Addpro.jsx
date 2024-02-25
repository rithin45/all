// import React, { useEffect, useState } from 'react'
// import Navsidebar from './Navbar/Navsidebar'
// import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, TableBody, TableCell, TableRow, TextField, Typography } from '@mui/material'
// import{Buffer} from 'buffer';
// import axios from 'axios';

// const Addpro = ({row,addToCart}) => {
//   var [category, setCategory] = useState([]);
//   useEffect(() => {
//     axios.get("http://localhost:3005/view")
//       .then(response => {
//         setCategory(response.data)
//       })
//       .catch(err => console.log(err))
//   }, [])
//   const [quantity,setQuantity]=useState(1);
//   const handleQuantityChange=(event)=>{
//     setQuantity(parseInt(event.target.value));
//   };
//   const handleAddToCart = () => {
//     addToCart(row, quantity);
// };
//   return (
//     <div>
//         <Navsidebar/>
//         <div>
//            </div>
//            <Grid container sx={{gap:2}}>
//             {category.map((row,pos)=>{
//               return(
//               <Grid  key={row.name}>
//                 <Card>
//                   <CardActionArea>
//                     <CardMedia
//                     component="img"
//                     height="200"
//                     width="200"
//                     image={`data:image/jpeg;base64,${Buffer.from(row.image1.data).toString('base64')}`}/>
//                     <CardContent>
//                       <Typography gutterBottom variant='h5' component="div">
//                       NAME:{row.name}
//                       </Typography>
//                       <Typography variant='body2' color="text.secondary">
//                       OFFER PRICE{row.offer_price}
//                       </Typography>
//                       <Typography variant='body1' color="text.secondary">
//                       MRP{row.MRP}
//                       </Typography>
//                       <Typography variant='body1' color="text.secondary">
//                       CATEGORY{row.category}
//                       </Typography>
//                       <TextField
//                       label="QUANTITY"
//                       type='number'
//                       onChange={handleQuantityChange}
//                       inputProps={{min:1}}/>
//                     </CardContent>
//                   </CardActionArea>
//                   <Button  fullWidth variant='contained' color='primary' onClick={handleAddToCart}>Add to Cart</Button>
//                 </Card>
//               </Grid>
//               )
//             })}
//            </Grid>       
//     </div>
//   )
// }

// export default Addpro


import React, { useEffect, useState } from 'react';
import Navsidebar from './Navbar/Navsidebar';
import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material';
import{Buffer} from 'buffer';
import axios from 'axios';

const Addpro = ({ row }) => {
  const [category, setCategory] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3005/view")
      .then(response => {
        setCategory(response.data)
      })
      .catch(err => console.log(err))
  }, []);

  const handleAddToCart = (product, quantity) => {
    const productWithQuantity = { ...product, quantity };
    setCart([...cart, productWithQuantity]);
    axios.post("http://localhost:3005/addtocart", productWithQuantity)
      .then(response => {
        console.log("Product added to cart:", response.data);
      })
      .catch(err => console.log(err))
  };

  return (
    <div>
      <Navsidebar />
      <div></div>
      <Grid container sx={{ gap: 2 }}>
        {category.map((product, index) => (
          <Grid key={index}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  width="200"
                  image={`data:image/jpeg;base64,${Buffer.from(product.image1.data).toString('base64')}`}
                />
                <CardContent>
                  <Typography gutterBottom variant='body2' component="div">
                    {product.name}
                  </Typography>
                  <Typography variant='body2' color="text.secondary">
                    OFFER PRICE: {product.offer_price}
                  </Typography>
                  <Typography variant='body1' color="text.secondary">
                    MRP: {product.MRP}
                  </Typography>
                  <Typography variant='body1' color="text.secondary">
                    CATEGORY: {product.category}
                  </Typography>
                  <TextField
                    label="QUANTITY"
                    type='number'
                    inputProps={{ min: 1 }}
                  />
                </CardContent>
              </CardActionArea>
              <Button fullWidth variant='contained' color='primary' style={{ backgroundColor: 'green', borderColor: 'green' }} onClick={() => handleAddToCart(product)}>Add to Cart</Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Addpro;



// import React, { useEffect, useState } from 'react';
// import Navsidebar from './Navbar/Navsidebar';
// import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material';
// import{Buffer} from 'buffer';
// import axios from 'axios';

// const Addpro = ({ row }) => {
//   const [category, setCategory] = useState([]);
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:3005/view")
//       .then(response => {
//         setCategory(response.data);
//       })
//       .catch(err => console.log(err));
//   }, []);

//   const handleAddToCart = (product, quantity) => {
//     const productWithQuantity = { ...product, quantity };
//     setCart([...cart, productWithQuantity]);
//     axios.post("http://localhost:3005/addtocart", productWithQuantity)
//       .then(response => {
//         console.log("Product added to cart:", response.data);
//         // Redirect to cart page after adding the product to cart
//         window.location.href = "http://localhost:3005/cart";
//       })
//       .catch(err => console.log(err));
//   };

//   return (
//     <div>
//       <Navsidebar />
//       <div></div>
//       <Grid container sx={{ gap: 2 }}>
//         {category.map((product, index) => (
//           <Grid key={index}>
//             <Card>
//               <CardActionArea>
//                 <CardMedia
//                   component="img"
//                   height="200"
//                   width="200"
//                   image={`data:image/jpeg;base64,${Buffer.from(product.image1.data).toString('base64')}`}
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant='h5' component="div">
//                     NAME: {product.name}
//                   </Typography>
//                   <Typography variant='body2' color="text.secondary">
//                     OFFER PRICE: {product.offer_price}
//                   </Typography>
//                   <Typography variant='body1' color="text.secondary">
//                     MRP: {product.MRP}
//                   </Typography>
//                   <Typography variant='body1' color="text.secondary">
//                     CATEGORY: {product.category}
//                   </Typography>
//                   <TextField
//                     label="QUANTITY"
//                     type='number'
//                     inputProps={{ min: 1 }}
//                   />
//                 </CardContent>
//               </CardActionArea>
//               <Button fullWidth variant='contained' color='primary' onClick={() => handleAddToCart(product)}>Add to Cart</Button>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// };

// export default Addpro;


