import { GetServerSideProps } from "next";
import Head from "next/head"
import { Card, CardContent, CardHeader, Typography, Link, Grid, Box } from "@mui/material";

interface IRepository {
    name: string;
    description: string;
    url: string;
}

interface IProps {
    repositories: {name:string, description: string, url: string}[];
}

export default function Post(props: IProps) {
    return (
        <div>
            <Head>
                <title>Repositórios</title>
            </Head>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: 4 }}>
                <Typography sx={{color: '#fff', fontWeight: 'bold', backgroundColor: '#345B63', padding: 1.5, borderRadius: '1em'}}>Repositórios</Typography>
                <Grid container spacing={1} columns={2} sx={{ justifyContent: 'center', width: "90%", backgroundColor: '#dddddd', marginTop: 2, padding: 2, borderRadius: '1em' }}>
                    {
                        props.repositories.map((item: IRepository) => {
                            return <Grid key={item.name} item sx={{ width: 1 / 2, padding: 2, marginTop: 2 }}>
                                <Card sx={{ boxShadow: '3px 3px 4px rgba(0,0,0,0.5)', borderRadius: '.5em' }}>
                                    <CardHeader title={item.name} sx={{ backgroundColor: '#345B63', fontWeight: 'bold', color: '#fff', height: '25%' }} />
                                    <CardContent sx={{ backgroundColor: '#345063'}}>
                                        <Typography sx={{ fontWeight: 'bold', color: '#fff' }}>{item.description ? item.description : ' -- Projeto sem descrição ! -- '}</Typography>
                                    </CardContent>
                                    <CardContent sx={{ backgroundColor: '#345063', height: '25%' }}>
                                        <Typography sx={{ fontWeight: 'bold', color: '#fff' }}>Link para o repositório: <Link href={item.url}>{item.url}</Link></Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        })
                    }
                </Grid>
            </Box>
        </div >
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const response = await fetch('https://api.github.com/users/victormdsp/repos');
    const data = await response.json();

    const repository = data.map((item: any) => { return { name: item.name, description: item.description, url: item.html_url } });

    return {
        props: {
            repositories: repository,
        }
    }
}