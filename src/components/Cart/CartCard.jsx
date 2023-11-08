import CartStyles from '../../styles/CartStyles/Cart.module.css'

import { MyWishlistLink } from '../../routes/Link';
import { ContinueShoppingLink } from '../../routes/Link';
import { CounterButtons } from '../Button/CounterButtons';


export const CartCard = () => {


    return (
     
        <div className={CartStyles.container}>   
            <div className={CartStyles.cartContainer}>
                <h1 className={CartStyles.title}>Cart</h1>

                <div className={CartStyles.topContainer}>
                    <div className={CartStyles.topTexts}>
                        <span className={CartStyles.topTexts}>
                            <ContinueShoppingLink />
                        </span>
                        <span className={CartStyles.topTexts}>
                            <MyWishlistLink />
                        </span>
                    </div>
                </div>

                <div className={CartStyles.bottomBottom}>
                    <div className={CartStyles.infoContainer}>
                   
                        <div className={CartStyles.product}>
                            <div className={CartStyles.productDetail}>
                                <img src="" alt="" className={CartStyles.productImg}/>
                                <div className={CartStyles.ditails}>
                                    <span className={CartStyles.productName}><b>Procuct:</b> Pots etc</span>
                                    <span className={CartStyles.productId}><b>Id:</b> 567</span>
                          
                                    <span className={CartStyles.productSize}><b>Size:</b> 32 cm</span>
                                </div>                         
                            </div>

                            <div className={CartStyles.priceDetail}>
                                <div className={CartStyles.productCounter}>
                                    <CounterButtons />
                                </div>
                                <div className={CartStyles.productPrice}>500 NOK</div>
                            </div>
                        </div>
                 
                   
                    </div>

                    <div className={CartStyles.summary}>
                        <h1 className={CartStyles.summeryTitle}>Order Summary</h1>
                        <div className={CartStyles.summaryItem}>
                            <span className={CartStyles.summaryItemText}>Subtotal</span>
                            <span className={CartStyles.summaryItemPrice}>500 NOK</span>
                        </div>        
                        <div className={CartStyles.summaryItem}>
                            <span className={CartStyles.summaryItemText}>Estimated Shipping</span>
                            <span className={CartStyles.summaryItemPrice}>149 NOK</span>
                        </div>
                        <div className={CartStyles.summaryItem}>
                            <span className={CartStyles.summaryItemText}>Shipping Discount</span>
                            <span className={CartStyles.summaryItemPrice}>- 149 NOK</span>
                        </div>   
                        <div className={CartStyles.summaryItem}>
                            <span className={CartStyles.summaryItemText}><b>Total</b></span>
                            <span className={CartStyles.summaryItemPrice}><b>500 NOK</b></span>
                        </div>
                        <button className={CartStyles.summaryButton}>CheckOut Now</button>
                    </div>

                </div>
            </div>  
        </div>
    )
}