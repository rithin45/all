import React from 'react'
// import { useDispatch } from 'react-redux'
// import { Link as RouterLink} from "react-router-dom"
// import { addToCart } from '../Redux/Products/actions'
import { Button, ButtonGroup, Card, Divider, Stack } from '@mui/material'
import { CardBody, Heading, MenuDivider, Text } from '@chakra-ui/react'
const Procard = ({name,offer_price,MRP,category,image1}) => {
//   const dispatch=useDispatch()
//   const handleAddToCart=()=>{
//     dispatch(addToCart(id))
//   }
  return (
    <Card maxW='sm'>
  <CardBody>
  {/* <RouterLink to={`/singleProductPage/${id}`}>  */}
  <Image
      src={image1} minH={"250px"}
      alt='Not Available'
      borderRadius='lg'
     />
     {/* </RouterLink>  */}
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{name}</Heading>
      <Text color='blue.600' fontSize='xl'>
        Offer Price:{offer_price}$
      </Text>
      <Text color='blue.600' fontSize='xl'>
        MRP:{MRP}$
      </Text>
      <Text>
        category:{category}
      </Text>
    </Stack>
  </CardBody>
  <MenuDivider />
  {/* <CardFooter>
    <ButtonGroup spacing={{base:0,md:2}}>
    <Stack>
      <Button variant='ghost' colorScheme='blue'  onClick={handleAddToCart} >
        Add to cart
      </Button></Stack>
    </ButtonGroup>
  </CardFooter> */}
</Card>
  )
}

export default Procard