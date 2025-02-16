import { PanoramaPhotosphere } from '@mui/icons-material';
import Button from '@mui/material/Button';

export default function MyButton(props) {
    return (
        <div>
            <Button
                variant="contained"
                sx={{
                    position: "static",
                    backgroundColor: props.backgroundColor,
                    color: props.txtColor
                }}
            >
                {props.name}
            </Button>
        </div>
    );
}