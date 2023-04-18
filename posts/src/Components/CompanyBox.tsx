import { Card, CardHeader, CardContent, Box, Link } from '@mui/material';
import Footer from './Footer';
import BackButton from './BackButton';

interface IProps {
    title: string;
    children: any;
}

export default function CompanyBox(props: IProps) {
    return (
        <Box sx={{ width: 1, height: '100%' }}>
            <Card sx={{ width: 1, height: '91.5%', boxShadow: 'none', borderRadius: '0px'}}>
                <CardHeader title={props.title} sx={{backgroundColor: '#345063', fontWeight: 'bold', color: '#fff'}}/>
                <CardContent sx={{backgroundColor: '#112031', height: 1, fontWeight: 'bold', color: '#fff'}}>{props.children}</CardContent>
            </Card>
            <BackButton></BackButton>
            <Footer></Footer>
        </Box>
    )
}