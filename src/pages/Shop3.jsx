import ShopComp3 from "../components/Shop/ShopComp3";

const Shop3 = () => {
    return ( 
        <div>
            <div className="breadcrumb-area breadcrumb-bg-1 section-padding-1 pt-200 pb-120">
            <div className="container-fluid">
                <div className="breadcrumb-content text-center">
                    <div className="breadcrumb-title">
                        <h2>Shop Fullwidth</h2>
                    </div>
                    <ul>
                        <li>
                            <a href="index.html">Home </a>
                        </li>
                        <li><span> &gt; </span></li>
                        <li className="active"> Shop</li>
                    </ul>
                </div>
            </div>
            <ShopComp3/>
        </div>

            

        </div>
     );
}
 
export default Shop3;