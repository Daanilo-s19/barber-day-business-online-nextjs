import { useState, useEffect } from "react";
import Menu from "../../components/Menu";
import SplashScreen from "../../components/SplashScreen";
import OurAbout from "../../components/OurAbout";
import BannerStarted from "../../components/BannerStarted";
import Footer from "../../components/Footer";
import useI18n from "../../hooks/use-i18n";
import { Container } from "../../../styles";
import en from "../../locales/About/en.json";
import pt from "../../locales/About/pt.json";

export default function Cases() {
  const i18n = useI18n();
  const [form, setForm] = useState(false);
  const [loading, setloading] = useState(true);

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
    <SplashScreen description={i18n.t("splashScreen")} />
  ) : (
    <>
      <Menu
        item={{
          button: i18n.t("menu.item.button"),
          menu: i18n.t("menu.item.menu"),
        }}
        onChange={(value) => setForm(value)}
      />
      {form && <Form onChange={(value) => setForm(value)} />}
      <Container>
        <OurAbout
          description={
            <>
              <p>{i18n.t("OurAbout.paragraph.1")}</p>
              <br />
              <p>{i18n.t("OurAbout.paragraph.2")}</p>
              <br />
              <p>{i18n.t("OurAbout.paragraph.3")}</p>
              <br />
            </>
          }
          item={i18n.t("OurAbout.user")}
        />
        <BannerStarted
          title={i18n.t("bannerStarted.title")}
          subtitle={i18n.t("bannerStarted.subtitle")}
          button={i18n.t("bannerStarted.button")}
          onChange={(value) => setForm(value)}
        />
      </Container>
      <Footer item={i18n.t("footer.item")} />
    </>
  );
}
