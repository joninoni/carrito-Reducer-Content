import { AddToCartIcon } from "./Icons"
import "../products.css"//los estilos


type Products = {
    id : number
    title : string
    description : string
    price : number
    discountPercentage : number
    rating : number
    stock : number
    brand : string
    category : string
    thumbnail : string
    images : string[]
}
type ProductsProps = {
    products : Products[]
}
const Products = ({products} : ProductsProps) => {
    return (
        <main className="products">
            <ul>
                {products.slice(0,12).map( product => (
                    <li key={product.title}>
                        <img
                            src={product.thumbnail}
                            alt={product.title} 
                        />
                        <div>
                            <strong>{product.title}</strong> - ${product.price}
                        </div>
                        <div>
                            <button>
                                <AddToCartIcon/>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Products