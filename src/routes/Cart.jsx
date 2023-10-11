
import CartStyles from '../styles/CartStyles/Cart.module.css'


export default function Cart() {
    return (
   
        <div className={CartStyles.container}>
            <h1 className={CartStyles.title}>Your Bag</h1>
            <div className={CartStyles.cartContainer}>
                <div className={CartStyles.topContainer}>
                    <button className={CartStyles.topButton}>Continue Shopping</button>
                    <div className={CartStyles.topTexts}>
                        <span className={CartStyles.topTexts}>Shopping Bag(2)</span>
                        <span className={CartStyles.topTexts}>Your Wishlist (0)</span>
                    </div>
                    <button className={CartStyles.topButton} type="filled">Checkout Now</button>

                </div>
                <div className={CartStyles.bottom}>
                    <div className={CartStyles.infoContainer}>
                        <div className={CartStyles.product}>
                            <div className={CartStyles.productDetail}>
                                <img src="" alt="" className={CartStyles.productImg}/>
                                <div className={CartStyles.productName}><b>Procuct:</b> Pots etc</div>
                                <div className={CartStyles.productId}><b>Id:</b> 567</div>
                                <div className={CartStyles.productColor}>color palette</div>
                                <div className={CartStyles.productSize}><b>Diameter:</b> 32 cm</div>
                            </div>
                            <div className={CartStyles.priceDetail}>

                            </div>
                        </div>
                    </div>
                    <div className={CartStyles.summary}>Summary</div>
                </div>
            </div>  
        </div>
  
    )
  }