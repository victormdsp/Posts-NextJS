import { Link, Button } from '@mui/material';

export default function BackButton(){
    return(
        <Button variant='contained'>
            <Link href='/' style={{color: '#fff'}}>Voltar</Link>
        </Button>
    )
}