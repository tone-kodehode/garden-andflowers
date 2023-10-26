import { useNavigate } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export const CartButton = () => {
    const navigate = useNavigate()
    const handleClick = () => navigate('/cart')

  return (
 
    <ShoppingCartOutlinedIcon onClick={handleClick}/>

  )
}
