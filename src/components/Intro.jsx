import LinkPage from "./LinkPage";
import ButtonLink from "./ButtonLink";

import BgOne from "../assets/background-one.jpg";
import BgTwo from "../assets/background-two.jpg";
import BgThree from "../assets/background-three.jpg";

export default function Intro() {
  
  //const allBgs =  document.querySelectorAll('#Intro .img-wrapper [data-bg]')

  setTimeout(() => {
    document.querySelector('#Intro .img-wrapper [data-bg="1"]')?.classList.add('change-bgImg')
    changeBg()
  }, 2000);

  function changeBg(){
    //let i = 2
    return ''

    // setInterval(() => {
      // allBgs.forEach(a => {
      //   a.classList.remove('selected')
      //   a.classList.remove('change-bgImg')
      // })

      //document.querySelector(`#Intro .img-wrapper [data-bg="${i}"]`)?.classList.add('change-bgImg')

      //i === 3 ? i = 1 : i++;
    // }, 2000)
  }
  

  return (
    <section id="Intro">
      <header>
        <ul>
          <LinkPage idPage="#About">About</LinkPage>
          <LinkPage idPage="#Works">Works</LinkPage>
          <LinkPage idPage="#Intro">
            <img src="" alt="" />
          </LinkPage>
          <LinkPage idPage="#About">Resume</LinkPage>
          <LinkPage idPage="#Contact">Contact</LinkPage>
        </ul>
      </header>
      <section className="banner">
        <div className="img-wrapper">
          <img src={BgOne} alt="Laptop" data-bg="1" className="selected" />
          <img src={BgTwo} alt="Laptop" data-bg="2"/>
          <img src={BgThree} alt="Laptop" data-bg="3"/>
        </div>
        <div className="text-title">
          <div className="texts">
            <h3>Hi, I am</h3>
            <h1>Filipe Marques</h1>
            <h2>Creative Developer & Experient FrontEnd</h2>

            <div className="container-buttons">
              <ButtonLink btnClass="primary" linkBtn="#">
                Contact-Me
              </ButtonLink>
              <ButtonLink btnClass="secondary" linkBtn="#">
                My Work
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
