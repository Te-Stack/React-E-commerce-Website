import "./product.scss";
const Product = () => {
    return ( 
        <div className="ProductArea"> 
            <div className="title text-center">
                    <h2 className="text-3xl font-bold">NEW PRODUCTS</h2>
                    <p>Show popular your products</p>
            </div>



            <div className="products">
                <div className="div">Coulumn1</div>
                <div className="div">Coulumn2</div>
                <div className="div">Coulumn3</div>
                <div className="div" >Coulumn4</div>
                <div className="div">Coulumn5</div>
                <div className="div">Coulumn6</div>
                <div className="div">Coulumn7</div>
                <div className="div">Coulumn8</div>
            </div>
        </div>
     );
}
 
export default Product;