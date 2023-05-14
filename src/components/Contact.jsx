import { BsGithub, BsWhatsapp, BsLinkedin, BsYoutube} from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import IconBox from "./IconBox";

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="title">Contact Me</h2>
      <div className="contact-box">
        <h2>Let's Work Together</h2>
        <div className="icons-contains">
          <IconBox iconSvg={BsGithub} text="Follow my Github" link="https://github.com/Filipe-Santos17" />
          <IconBox iconSvg={BsWhatsapp} text="Send me a Message" />
          <IconBox iconSvg={BsLinkedin} text="Connect on Linkedin" link="https://www.linkedin.com/in/filipemarquesdeveloper/"/>
          <IconBox iconSvg={HiOutlineMail} text="Write a Email" />
          <IconBox iconSvg={BsYoutube} text="Wacth my Videos" />
        </div>
      </div>
    </section>
  );
}
