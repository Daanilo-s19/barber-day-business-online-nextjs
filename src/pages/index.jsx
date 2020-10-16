import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import Hero from "../components/Hero";
import SplashScreen from "../components/SplashScreen";
import useI18n from "../hooks/use-i18n";
import { Container, Content } from "../../styles";
import en from "../locales/en.json";
import pt from "../locales/pt.json";
import WhatsSection from "../components/whatsSection";

export default function Home() {
  const i18n = useI18n();
  const [loading, setloading] = useState(true);
  const [form, setForm] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (navigator.language) {
      i18n.locale("", navigator.language === "pt-BR" ? pt : en);
    } else i18n.locale("", en);
  }, []);

  return loading ? (
    <SplashScreen description={i18n.t("homepage.splashScreen")} />
  ) : (
    <>
      {/* {form && <Form onChange={(value) => setForm(value)} />} */}
      <Container>
        <div className="filter">
          <Menu
            item={{
              button: i18n.t("homepage.menu.item.button"),
              menu: i18n.t("homepage.menu.item.menu"),
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
            description="A Barbearia é antes de mais nada uma empresa.
            E se você quer ter sucesso você precisa ser um bor gestor.
            Oferecer um serviço de excelência é só uma peça do quebra cabeça."
            labelButton="Você quer ser ter uma Barbearia organizada e próspera?"
            textButton="Alavancar minha barbearia agora"
          />
        </div>
      </Container>
    </>
  );
}
