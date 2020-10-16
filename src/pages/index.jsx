import { useEffect, useState } from 'react'
import Menu from '../components/Menu'
import Hero from '../components/Hero'
import SplashScreen from '../components/SplashScreen'
import useI18n from '../hooks/use-i18n'
import { Container, Content } from '../../styles'
import en from '../locales/en.json'
import pt from '../locales/pt.json'
import WhatsSection from '../components/whatsSection'
import AwardsSection from '../components/methodSection'
import BonusSection from '../components/bonusSection'
import CertificateSection from '../components/certificateSection'
import PriceSection from '../components/priceSection'

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
                <br />E se você quer ter ucesso você precisa ser um bor gestor.
                <br />
                Oferecer um serviço de excelência é só uma peça do quebra
                cabeça.
              </span>
            }
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
          <BonusSection />
          <CertificateSection />
          <PriceSection />
        </div>
      </Container>
    </>
  )
}
