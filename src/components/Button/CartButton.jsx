import { useUrlButton } from '../../hooks/useUrlButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


export const CartButton = () => {
  const navigateToCart = useUrlButton()

  return (
 
    <ShoppingCartOutlinedIcon 
      onClick={() => navigateToCart('/cart')} 
      sx={{ fontSize: 30 }}
      color="action"
    />

  )
}

