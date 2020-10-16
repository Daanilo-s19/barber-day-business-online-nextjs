import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import Hero from "../components/Hero";
import SplashScreen from "../components/SplashScreen";
import useI18n from "../hooks/use-i18n";
import { Container } from "../../styles";
import en from "../locales/en.json";
import pt from "../locales/pt.json";

export default function Home() {
  const i18n = useI18n();
  const [loading, setloading] = useState(false);
  const [form, setForm] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      // setloading(false);
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
        </div>
      </Container>
    </>
  );
}
