import { Box } from '@mui/material';
import linkedin from '../Assets/ImagensEmpresas/linkedin.png';
import github from '../Assets/ImagensEmpresas/github.png';
import Image from 'next/image';

export default function Footer() {
    return (
        <Box sx={{ height: '5em', width: 1, backgroundColor: '#302325', marginTop: '.3em', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '.5em 0em' }}>
            <div style={{ color: '#fff' }}>
                <h2>Gmail: victormdsp@gmail.com</h2>
                <h2>Hotmail: victormdsp@hotmail.com</h2>
            </div>
            <a href="https://www.linkedin.com/in/victor-martini-domingues-5b6986161/">
                <Image className="linkImage" src={linkedin.src} alt="Linkedin" />
            </a>
            <a href="https://github.com/victormdsp">
                <Image className="linkImage" src={github.src} alt="Github" />
            </a>
        </Box>
    )
}