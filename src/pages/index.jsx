import { useEffect, useState } from 'react'
import Menu from '../components/Menu'
import Hero from '../components/Hero'

import WhatsSection from '../components/whatsSection'
import AwardsSection from '../components/methodSection'
import BonusSection from '../components/bonusSection'
import CertificateSection from '../components/certificateSection'
import PriceSection from '../components/priceSection'
import StampSection from '../components/stampSection'
import CasesSection from '../components/casesSection'
import PressSection from '../components/OurPress'
import SplashScreen from '../components/SplashScreen'
import useI18n from '../hooks/use-i18n'
import { Container, Content } from '../../styles'
import en from '../locales/en.json'
import pt from '../locales/pt.json'
import Button from '../components/Button'
import FaqSection from '../components/faqSection'
import Footer from '../components/footer'
export default function Home() {
  const i18n = useI18n()
  const [loading, setloading] = useState(true)
  const [form, setForm] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 3000)
  }, [])

  useEffect(() => {
    if (navigator.language) {
      i18n.locale('', navigator.language === 'pt-BR' ? pt : en)
    } else i18n.locale('', en)
  }, [])
  return loading ? (
    <SplashScreen description={i18n.t('homepage.splashScreen')} />
  ) : (
    <>
      {/* {form && <Form onChange={(value) => setForm(value)} />} */}
      <Container>
        <div className="filter">
          <Menu
            item={{
              button: i18n.t('homepage.menu.item.button'),
              menu: i18n.t('homepage.menu.item.menu'),
            }}
            onChange={(value) => setForm(value)}
          />
          <Hero
            activeButton={true}
            title="Tenha uma barbearia organizada e lucrativa!"
            textButton="Alavancar minha barbearia agora"
            onChange={(value) => setForm(value)}
          />
          <WhatsSection
            title="O que é o"
            subtitle="Barber Day Business Online?"
            description={
              <span>
                A Barbearia é antes de mais nada uma empresa.
                <br />E se você quer ter ucesso você precisa ser um bom gestor.
                <br />
                Oferecer um serviço de excelência é só uma peça do quebra
                cabeça.
              </span>
            }
            responsiveDescription="A Barbearia é antes de mais nada uma empresa. E se você quer ter sucesso você precisa ser um bom gestor. Oferecer um serviço de excelência é só uma peça do quebra cabeça."
            labelButton="Você quer ser ter uma Barbearia organizada e próspera?"
            textButton="Alavancar minha barbearia agora"
          />
          <AwardsSection
            title="Conheça os módulos"
            subtitle={
              <span>
                <b>6 pilares fundamentais</b>
                <br /> para fazer a gestão de uma Barbearia:
              </span>
            }
            item={[
              {
                module: 'módulo 01',
                nameModule: 'Gestão',
                url: 'assets/module1.svg',
                description:
                  'Aprenda a gerenciar e organizar a sua barbearia. Saiba quais são as rotinas  e tarefas que você deve realizar diariamente para manter sua barbearia sempre organizada e saudável. ',
              },
              {
                module: 'módulo 02',
                nameModule: 'Marketing',
                url: 'assets/module2.svg',
                description:
                  'Veja como atrair e fidelizar clientes usando a criatividade e sem fazer guerra de preços com a concorrência. ',
              },
              {
                module: 'módulo 03',
                nameModule: 'Liderança',
                url: 'assets/module3.svg',
                description:
                  'Aprenda técnicas para lidar e superar os principais desafios de liderar uma equipe de colaboradores com perfis diferentes. ',
              },
              {
                module: 'módulo 04',
                nameModule: 'Empreendedorismo',
                url: 'assets/module4.svg',
                description:
                  'Saiba calcular riscos e tomar decisões estratégicas visando o crescimento da sua barbearia.',
              },
              {
                module: 'módulo 05',
                nameModule: 'Contabilidade',
                url: 'assets/module5.svg',
                description:
                  'Veja como emitir as Notas Fiscais e como pagar os impostos de forma inteligente e 100% dentro da legalidade.',
              },
              {
                module: 'módulo 06',
                nameModule: 'Jurídico',
                url: 'assets/module6.svg',
                description:
                  'Veja como registrar sua marca. Aprenda a proteger e blindar sua barbearia com os melhores contratos.',
              },
            ]}
          />
          {/*   <BonusSection />
          <CertificateSection />
          <PriceSection />
          <StampSection />
          <CasesSection
            pageCases={false}
            title="APRENDA COM QUEM Foi lá e fez"
            subtitle="Conheça os Educadores"
            cases={[
              {
                tag: 'Empreendedorismo',
                img: 'assets/players/elias.svg',
                name: 'Seu Ellias',
                description:
                  '“Empreender é saber transformar oportunidades em negócios lucrativos correndo riscos calculados”',
                role:
                  'Fundador da grupo Seu Elias, uma das barbearias mais conhecidas no Brasil e diversos projetos e cursos ao redor do mundo. Autor do livro Ouse Transformar Seu Elias já prestou centenas de consultorias em gestão no Brasil e no mundo. No Barbear Day Business ele compartilha sua larga experiência e mostra como uma gestão simples, enxuta, e ousada pode ser altamente rentável e eficiente. ',
              },
              {
                tag: 'gestão',
                img: 'assets/players/michael.svg',
                name: 'Michael Oliveira',
                description:
                  '“Gestão é administrar o que você tem para conquistar o que você deseja.”',
                role:
                  'COO do Grupo Seu Elias desde 2015, Michael é o gestor protagonista em todos os grandes empreendimentos da Organização composta por quatro empresas. Nos bastidores, assume o controle das principais operações do projeto de expansão da rede de barbearias Seu Elias em BH. Com formação e alma de administrador, sabe muito bem como iniciar um projeto e levá-lo até o seu ápice. ',
              },
              {
                tag: 'contabilidade',
                img: 'assets/players/filemon.svg',
                name: 'Filemon Oliveira',
                description:
                  '“Contabildiade é ter conhecimento e controle sobre o seu patrimônio.”',
                role:
                  'Contador formado e pós graduado. Especialista em contabilidade e Gestão Financeira de Barbearias. Consultor em Modelagem de Negócios, Sócio Diretor na Olis Consultores e Auditores Associados e Dhesco Treinamento e Consultoria. Professor em Pós Graduação em Diversas Instituições, responsável pela organização contábil e societária do Grupo Seu Elias, Palestrante e Articulista, já treinou mais de 10.000 mil pessoas na área Contábil e Tributária. ',
              },
              {
                tag: 'MARKETING',
                img: 'assets/players/marcus.svg',
                name: 'Marcus Mota',
                description:
                  '“Marketing é adequar sua oferta as necessidades do público alvo para criar e manter e fidelizar clientes.”',
                role:
                  'Diretor de Marketing do Grupo Seu Elias, co-fundador da agência Quartel Design, onde já dirigiu projetos para empresas como Sony Music, Rede Globo, BOPE, Universal Music, American Air Lines dentre outros. Especialista em criação de marcas que viram referência e que são desejadas no mercado.',
              },
              {
                tag: 'Liderança',
                img: 'assets/players/luiz.svg',
                name: 'Luiz Gustavo',
                description:
                  'Liderança é saber inspirar e motivar para extrair o melhor de cada membro da equipe',
                role:
                  'Líder de equipe na barbearia Seu Elias, Educador no Barber Day Academy e Barber Day Online e técnico da Baboon, participou da criação do padrão de atendimento e cultura da barbearia Seu Elias. Lidera a equipe há 3 anos. Presente em mais de 40 turmas do Barber Day Academy. A liderança é a chave para fomentar o negócio engajando e motivando a equipe. ',
              },
              {
                tag: 'Jurídico',
                img: 'assets/players/bruno.svg',
                name: 'Bruno Moreira',
                description:
                  '“Jurídico é proteger e blindar sua empresa 100% dentro da legalidade.”',
                role:
                  'Advogado e Consultor de Empresas, sócio Fundador do Escritório Alves & Moreira Advocacia Empresarial. Especialista na lei Salão Parceiro, compliance trabalhista e societário para barbearias. Realizou o planejamento e estruturação de programas de desenvolvimento de recursos humanos em diversas redes de varejo. Experiência na implantação de planejamentos patrimoniais e sucessórios – Holdings Patrimoniais e Empresariais.',
              },
            ]}
          />
          <PressSection
            title="Depoimento"
            subtitle=""
            item={[
              [
                {
                  title: 'Carlos Cortês',
                  description: 'Campinas/SP',
                  link:
                    'https://www.correio24horas.com.br/noticia/nid/leitor-pauteiro-vencedor-do-correio-de-futuro-propoe-novas-formas-de-reportar/',
                },
                {
                  title: 'Victor Modesto',
                  description: 'Salvador/BA',
                  link:
                    'https://www.correio24horas.com.br/noticia/nid/leitor-pauteiro-vencedor-do-correio-de-futuro-propoe-novas-formas-de-reportar/',
                },
                {
                  title: 'Marcos Castro',
                  description: 'Alfenas/MG',
                  link:
                    'https://www.correio24horas.com.br/noticia/nid/leitor-pauteiro-vencedor-do-correio-de-futuro-propoe-novas-formas-de-reportar/',
                },
              ],
            ]}
          />
          <div className="header-center-default" style={{ height: '96px' }}>
            <Button
              width="332px"
              image="assets/arrow_right.svg"
              bgColor="#2A9E98"
              childrenColor="#F0F4FA"
              shadow={true}
              bgHover="rgba(42, 158, 152, 1)"
              onClick={() => onChange(true)}
            >
              Alavancar minha barbearia agora
            </Button>{' '}
          </div>
          <FaqSection
            item={[
              {
                title: 'PARA QUEM É ESSE CURSO?',
                description:
                  '• Se você tem ou deseja ter uma Barbearia esse curso é pra você!\n       • Se você quer aprender a administrar sua Barbearia pequena e quer progredir,\nesse curso é pra você.\n• Se você tem uma barbearia sólida mas quer dar o próximo passo, esse curso é para você.\n• Se você quer abrir uma barbearia bem estruturada do zero, com muito mais chances de dar certo e crescer, esse curso é pra você!\n• Se você que aprender o necessário para expandir sua visão de negócios, e saber a direção certa para prosperar, esse curso definitivamente é pra você!',
              },
              {
                title: 'O QUE ESTÁ INCLUSO?',
                description:
                  'Você tem acesso a todas as aulas EXCLUSIVAS gravadas para o BARBER DAY BUSINESS ONLINE, são mais de 10 horas de conteúdo. Você também tem acesso a gravação de TODAS as palestras ministradas no evento presencial do BARBER DAY BUSINESS, são mais de 7 horas de conteúdo. TUDO Liberado no ato da sua inscrição.\nAlém de tudo disso nós ainda adicionamos aulas novas todos os meses, e fazemos lives com frequência para solucionar as dúvidas dos alunos.',
              },
              {
                title: 'TEREI UM CERTIFICADO?',
                description:
                  'SIM! Com 35 dias de acesso você recebe o CERTIFICADO BARBER DAY BUSINESS ONLINE. no formato PDF para você postar nas redes sociais e imprimir em gráfica da sua escolha.\n Você também pode optar por receber seu certificado impresso em casa,pagando uma pequena taxa + frete.\n *Envio disponível apenas para o Brasil.',
              },
              {
                title: 'QUAL A DURAÇÃO DO CURSO?',
                description:
                  'Ao adquirir o BARBER DAY BUSINESS ONLINE você terá acesso a plataforma por 12 meses. Durante esse tempo você pode ver todo o conteúdo do curso quantas vezes desejar.',
              },
            ]}
          />

          <Footer />
          */}
        </div>
      </Container>
    </>
  )
}
