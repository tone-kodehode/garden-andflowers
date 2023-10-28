import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import { useNavigate } from 'react-router-dom';

export const SignInButton = () => {
  const navigate = useNavigate()
  const handleClick = () => navigate('/signin')

  return (
    <div>
        <FaceRoundedIcon 
            onClick={handleClick} 
            sx={{ fontSize: 30 }}
            color="action"
        />
    </div>
  )
}
