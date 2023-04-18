import { Card, CardHeader, CardContent, Box } from '@mui/material';
import Footer from './Footer';

interface IProps {
    title: string;
    children: any;
}

export default function CompanyBox(props: IProps) {
    return (
        <Box sx={{ width: 1, height: '100%' }}>
            <Card sx={{ width: 1, height: '91.5%'}}>
                <CardHeader title={props.title} sx={{backgroundColor: '#345063', fontWeight: 'bold', color: '#fff'}}/>
                <CardContent sx={{backgroundColor: '#112031', height: 1, fontWeight: 'bold', color: '#fff'}}>{props.children}</CardContent>
            </Card>
            <Footer></Footer>
        </Box>
    )
}