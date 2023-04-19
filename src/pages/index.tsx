import Link from 'next/link'
import { Box, Typography, ImageList } from '@mui/material';
import CenteredBox from '@/Components/CenteredBox';
import { experiencias } from '../Infos/experiencias';
import Footer from '@/Components/Footer';
import Image from 'next/image';

export default function Home() {

  return (
    <div>
      <CenteredBox direction='row' backgroundColor='#345063'>
        <div>
          <h1 style={{ fontWeight: 'bold', color: '#fff' }}>Bem vindo</h1>
          <Typography sx={{ marginRight: '5em', fontWeight: 'bold', color: '#fff' }}>
            Meu nome é Victor Martini e este é meu portfólio.
            <br /> Me formei em 2021 em ciência da computação pela Universidade Presbiteriana Mackzenzie.
            <br /> Aqui estarei te apresentando o meu portfólio, experiências e projetos que desenvolvi até hoje.
            <br /> Atuo profissionalmente como desenvolvedor desde 2019 e meu objetivo desde então é me desenvolver como FullStack.
          </Typography>
        </div>
        <Image src="https://media.licdn.com/dms/image/D4D03AQHCsgMN_oAJnw/profile-displayphoto-shrink_800_800/0/1675084570890?e=1687392000&v=beta&t=Bs5GX0ENtch-QDlYQs9rqJQ0rxwu0U-0l-UAxqnCGCw"
          alt="" style={{ height: '20em', padding: '1em' }} />
      </CenteredBox>

      <CenteredBox direction='row'>
        <Image src="https://f.i.uol.com.br/fotografia/2019/01/09/15470616385c3649868d713_1547061638_3x2_md.jpg" alt="Mackenzie" style={{ height: '20em', padding: '1em' }} />
        <div>
          <h1 style={{ marginLeft: '5em', fontWeight: 'bold', color: '#fff' }}>Um pouco sobre a minha história</h1>
          <Typography sx={{ marginLeft: '5em', fontWeight: 'bold', color: '#fff' }}>
            Minha história com o desenvolvimento de software e programação se iniciou em 2016.
            <br />Comecei estudando por conta própria a linguagem Python aos 17 anos de idade.
            <br />Em 2018 entrei para a faculdade de Ciência da Computação no Mackenzie.
            <br />Dentro da faculdade participei de 2 laboratórios de estudos, o primeiro sendo<br /> voltado a segurança da informação e o segunda voltado para o desenvolvimento de jogos digitais.
            <br />Também desenvolvi juntamente com meu grupo de TCC uma luva eletrônica para o desenvolvimento <br />da coordenação motora para pessoas que sofriam de alguma deficiência.
          </Typography>
        </div>
      </CenteredBox>

      <CenteredBox backgroundColor='#345063'>
        <div style={{ height: '14.5em', padding: '1em' }}>
          <h1 style={{ fontWeight: 'bold', color: '#fff' }}>Informações</h1>
          <Typography sx={{ fontWeight: 'bold', color: '#fff' }}>
            Abaixo estou deixando cards selecionáveis para ler e entender um pouco mais sobre minha experiência
            <br />em cada empresa que atuei, e também estou deixando um link com todos os meus repositórios do github.
            <br /> Caso queria ver como essa site foi feito acesse este link: <Link href={'/repositories/portfolio'}>Site do Portfolio</Link>
            <br />
            <br />Por fim mas não menos importante, no footer da página esta listado todas as formas de contato.
          </Typography>
        </div>
      </CenteredBox>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', height: '25em', marginBottom: '2em' }}>
        <ImageList sx={{ width: 1, height: 1 }} cols={5}>
          {experiencias.map(exp =>
            <Link key={exp.name} href={`/empresas/${exp.name}`}>
              <ImageList sx={{ height: 1, overflow: 'hidden', width: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Image className='companyImage' src={`${exp.imagem}`} alt="Logo" loading='lazy' style={{ height: '100%', width: '100%' }} />
              </ImageList>
            </Link>)
          }
        </ImageList>
      </Box>

      <CenteredBox backgroundColor='#345063'>
        <div style={{ height: '10.5em', padding: '1em' }}>
          <h1 style={{ fontWeight: 'bold', color: '#fff'}}>Repositórios GitHub</h1>
          <Typography sx={{ fontWeight: 'bold', color: '#fff' }}>
            Neste link abaixo estará disponível todos os meus repositórios GitHub listados
            <br />Nestes repositórios você encontrará projetos pessoais, testes para empresas e testes pessoais.
          </Typography>
          <Link style={{color: 'blue', fontSize: '1.2em', fontWeight: 'bold'}} href="/repositories/repositoriesPage">Acesso aos repositórios!</Link>
        </div>
      </CenteredBox>

      <Footer></Footer>
    </div >
  )
}