export default function ProductDetails({params} : {params: {productId: string}})
 {
    return <h1>Details about the Products {params.productId} </h1>;
}