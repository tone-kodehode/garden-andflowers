import CartStyles from '../../styles/CartStyles/Cart.module.css'

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import PaletteRoundedIcon from '@mui/icons-material/PaletteRounded';


export const CartCard = () => {


    return (
        <div className={CartStyles.container}>   
            <div className={CartStyles.cartContainer}>
                <h1 className={CartStyles.title}>Cart</h1>
                <div className={CartStyles.topContainer}>
                    <button className={CartStyles.topButton}>Continue Shopping</button>
                    <div className={CartStyles.topTexts}>
                        <span className={CartStyles.topTexts}>Shopping Bag(2)</span>
                        <span className={CartStyles.topTexts}>My Wishlist (0)</span>
                    </div>
                    {/* props filled */}
                    <button className={CartStyles.topButton} type="filled">Checkout Now</button>
                </div>
                <div className={CartStyles.bottomBottom}>
                    <div className={CartStyles.infoContainer}>
                        {/* product */}
                        <div className={CartStyles.product}>
                            <div className={CartStyles.productDetail}>
                                <img src="" alt="" className={CartStyles.productImg}/>
                                <div className={CartStyles.ditails}>
                                    <span className={CartStyles.productName}><b>Procuct:</b> Pots etc</span>
                                    <span className={CartStyles.productId}><b>Id:</b> 567</span>
                                    {/* props */}
                                    <div className={CartStyles.productColor} color='pink'>
                                        <PaletteRoundedIcon />
                                    </div>
                                    <span className={CartStyles.productSize}><b>Size:</b> 32 cm</span>
                                </div>                         
                            </div>

                            <div className={CartStyles.priceDetail}>
                                <div className={CartStyles.productCounter}>
                                    <AddRoundedIcon/>
                                    <div className={CartStyles.productAmount}>2</div>
                                    <RemoveRoundedIcon /> 
                                </div>
                                <div className={CartStyles.productPrice}>500 NOK</div>
                            </div>
                        </div>
                        {/* product line */}
                        <hr />
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