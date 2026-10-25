// import app from './app.js';


// app.listen(5000,()=>{
//     console.log('Server create ho chuka hai!!');
// })

/* const server = express()
server.use(express.json())
const data = []
server.post('/data', (req, res) => {
    console.log(req.body);
    data.push(req.body) // (req.body) KE ANDAR JO HI DATA RAHEGA WO DATA PUSH/ ADD HO JAYEGA 
    res.status(201).json({ mesaage: "Data Post ho chuka hai" })
})
server.get('/data', (req, res) => {
    res.status(200).json({ message: 'Data Fetched ho gaya hai!!', data: data })
})
// DELETE/DATA/:INDEX SE 
server.delete('/data/:index', (req, res) => {
    const index = req.params.index

    delete data[index]

    res.status(200).json({ mesaage: "Your data deleted..." })

})

// server.patch('/data/:index', (req, res) => {
//     const index = req.params.index;
//     const name = req.body.name
//     const age = req.body.age
//     const address = req.body.address
    // patch data[index]


//     data[index].name = name
//     data[index].age = age
//     data[index].address = address

//     res.status(200).json({ mesaage: "Your Data Updated..." })

}) */


/* ye ecommerce productlist.jsx ka pahala code hai 
import { useState } from "react"
import products from "../data/products"
import ProductCard from "./ProductCard"
import SearchBar from "./SearchBar";

function ProductList({ addToCart, addToWishlist }) {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  // const filterProducts = products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))
  const filterProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase())

    const matchesCategory = category === 'All' || product.category === category

    return matchesSearch && matchesCategory
  })
  /* products.filter() — products mein se matching products chunta hai.
  product.name — har product ka naam check karta hai.
  toLowerCase() — uppercase/lowercase ka difference hata deta hai.
  includes(search.toLowerCase()) — check karta hai ki product ke naam mein search text hai ya nahi. */
//   return (
//     <section className="px-8 py-12">

//       <h2 className="mb-10 text-3xl font-bold">
//         Featured Products
//       </h2>
//       {/* Search Baar */}
//       <SearchBar search={search} setSearch={setSearch} />

//       <select
//         value={category}
//         onChange={(e) => setCategory(e.target.value)}
//         className="mb-6 w-full rounded-lg border p-3"
//       >
//         <option value="All">All Categories</option>
//         <option value="Laptop">Laptop</option>
//         <option value="Mobile">Mobile</option>
//         <option value="Computer">Computer</option>
//         <option value="Tablet">Tablet</option>
//         <option value="Audio">Audio</option>
//       </select>

//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

//         {filterProducts.map((product) => (
//           <ProductCard
//             key={product.id}
//             product={product}
//             addToCart={addToCart}
//             addToWishlist={addToWishlist}
//           />
//         ))}

//       </div>

//     </section>
//   )
// }

// export default ProductList
// */