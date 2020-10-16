import { SocialMediaDefault } from "./styles";
export default function SocialMedia(props) {
  return (
    <SocialMediaDefault>
      <a
        target="_blank"
        href="https://api.whatsapp.com/send?1=pt_BR&phone=5571982191648"
      >
        <img src="assets/whatsapp.svg" alt="whatsapp" />
      </a>
      <a target="_blank" href="https://www.instagram.com/spacerkt/">
        <img src="assets/instagram.svg" alt="instagram" />
      </a>
      <a target="_blank" href="https://www.facebook.com/spacerkt">
        <img src="assets/facebook.svg" alt="facebook" />
      </a>
      <a target="_blank" href="https://www.linkedin.com/company/spacerkt/">
        <img src="assets/linkedin.svg" alt="linkedln" />
      </a>
      <a
        target="_blank"
        href="https://www.youtube.com/channel/UCdmarg0cs15KKPPjc2dpGnQ"
      >
        <img src="assets/youtube.svg" fill="#552ee5" alt="youtube" />
      </a>
      <a target="_blank" href="https://blog.spacerocket.com.br/">
        <img src="assets/blog.svg" alt="blog" />
      </a>
    </SocialMediaDefault>
  );
}
