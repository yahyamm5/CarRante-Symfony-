import { Box, Button, TextField } from "@mui/material"
import { useState } from "react"

const Create_Product = () => {

  const [name, setName] = useState(null)
  const [price, setPrice] = useState(null)
  const [quantity, setQuantity] = useState(null)
  const [description, setDescription] = useState(null)

  const { add_product } = 'lol'

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    try {
      await add_product(name,price,quantity,description)
    } catch (error) {
      console.log(`error when fetching data : ${error}`);
    }
  }

  return (
    <Box>
      <form onSubmit={handleCreateProduct} >
        <TextField
         type="text"
         placeholder="name" 
         onChange={(e) => setName(e.target.value)}
        />
        <TextField
         type="number"
         placeholder="price"
         onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
         type="number" 
         placeholder="quantity"
         onChange={(e) => setQuantity(e.target.value)} 
         />
        <TextField
         type="text"
         placeholder="description" 
         onChange={(e) => setDescription(e.target.value)}
         />
        <Button variant="outlined" type="submit" >Create</Button>
      </form>
    </Box>
  )
}

export default Create_Product
