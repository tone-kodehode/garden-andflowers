import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export const SearchButton = () => {
    // const handleClick = () => navigate('/cart')

  return (
    <div>
        <SearchRoundedIcon 
            // onClick={handleClick} 
            sx={{ fontSize: 30 }}
            color="action"
        />
    </div>
  )
}


