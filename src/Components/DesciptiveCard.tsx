import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface IProps {
    title: string;
    description: ReactNode;
    footer?: string;
}

export default function DescrptiveCard(props: IProps) {
    return (
        <Card sx={{borderRadius: '1em'}}>
            <CardHeader sx={{backgroundColor: '#345B63', fontWeight: 'bold', color: '#fff'}} title={props.title}></CardHeader>
            <CardContent sx={{backgroundColor: '#345063', fontWeight: 'bold', color: '#fff'}}>
                {props.description}
            </CardContent>
            {props.footer ?
                <CardContent sx={{backgroundColor: '#345063', fontWeight: 'bold', color: '#fff'}}>
                    <Typography>
                        {props.footer}
                    </Typography>
                </CardContent>
                : ''}
        </Card>
    )
}