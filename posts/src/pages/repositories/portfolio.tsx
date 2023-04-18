import CompanyBox from "@/Components/CompanyBox";
import { Typography } from "@mui/material";
import { GetServerSideProps } from "next";

interface IProps {
    repositoryURL: any;
}

export default function Portfolio(props: IProps) {
    console.log(props)

    return (
        <CompanyBox title='Portfolio'>
            <h1>O desenvolvimento deste Portfolio</h1>
            <Typography>
                O intuito deste portfólio é facilitar a leitura, demonstração e velocidade para me apresentar para quem deseja vê-lo.
                <br />Nele estou deixando várias informações sobre minhas experiências, projetos, testes, estudos e
                <br />desenvolvimento pessoal e profissional, sobre a minha área de atuação que é desenvolvimento de software e desenvolvimento Web,
                <br />como também tem projetos pessoais de jogos, estudos de linguagens para enteder como elas funcionam, testes de bibliotecas e frameworks, etc.
            </Typography>
            <h1>Como este portfólio foi feito</h1>
            <Typography>
                Este portfólio foi feito também como um intuito de estudo, ou seja, é mais um projeto que além de eu utilizar como uma forma de
                <br />me apresentar, atualmente também esta sendo uma forma de estudar algumas algumas tecnologias que quis desenvolver, então as
                <br />linguagens, bibliotecas e frameworks que estou utilizando são:
            </Typography>
            <ul>
                <li>ReactJS</li>
                <li>NextJS</li>
                <li>MaterialUI</li>
                <li>Api do Github</li>
            </ul>
            <br />Todo o código deste portfolio esta salvo neste repositório: <a href={props.repositoryURL}>{props.repositoryURL}</a>
        </CompanyBox>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const response = await fetch('https://api.github.com/repos/victormdsp/Repositories-NextJS');
    console.log(response);
    const data = await response.json();

    return {
        props: {
            repositoryURL: data.html_url,
        }
    }
}