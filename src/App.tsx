import { useState } from "react"
import {products as initialState} from "./mocks/products.json"
import { ProductsArray } from "./components/Products"
import Products from "./components/Products"


function App() {
    const [products] = useState(initialState)
    const [filters,setFilters] = useState({
        category : "smartphones",
        priceMin : 0,
    })

    const filterProducts = (products : ProductsArray[]) =>{
        return products.filter(product => {
            return (
                product.price >= filters.priceMin &&  
                (
                    filters.category === "all" ||
                    product.category === filters.category
                )
            )
        })
    }
    return(
        <Products
            products={filterProducts(initialState)}
        />
    )
}

export default App
