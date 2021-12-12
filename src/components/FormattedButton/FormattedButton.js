import { Button} from "@mui/material";
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
	color: theme.palette.getContrastText(grey[800]),
	width:"40%",
	backgroundColor: grey[800],
	'&:hover': {
	    backgroundColor: grey[900],
	},
}));

export const FormattedButton = ({type, variant, text, onClick}) => {
    return (
        <ColorButton type={type} variant={variant} onClick={onClick}>{text}</ColorButton>
    )
}