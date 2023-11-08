import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import { useUrlButton } from '../../hooks/useUrlButton';

export const SignInButton = () => {
  const navigateToSignIn = useUrlButton()

  return (
    <div>
        <FaceRoundedIcon 
            onClick={() => navigateToSignIn('/signin')} 
            sx={{ fontSize: 30 }}
            color="action"
        />
    </div>
  )
}
