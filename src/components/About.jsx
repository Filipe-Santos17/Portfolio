import Typical from "react-typical";

export default function About() {
  return (
    <section id="about">
      <h2 className="title">About Me</h2>
      <div>
        <div className="text-about">
          <h2>
            I am a {" "}
            <span className="aboutMe">
              <Typical wrapper="b" loop={Infinity} steps={["FrontEnd Developer", 1000, "YouTuber", 1000, "Student", 1000]} />
            </span>
          </h2>
          <h3>and passionat about techonlogy</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, ratione! Maiores perferendis libero rem vitae suscipit ipsam mollitia fuga animi harum doloremque totam, praesentium minus
            eaque. Qui, nisi. Vero, dolorum suscipit. Suscipit harum, labore hic, dolorum consequatur ad nostrum temporibus doloribus beatae voluptatum odio repellendus non, in quis aspernatur
            commodi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, ratione! Maiores perferendis libero rem vitae suscipit ipsam mollitia fuga animi harum doloremque totam, praesentium minus
            eaque. Qui, nisi. Vero, dolorum suscipit. Suscipit harum, labore hic, dolorum consequatur ad nostrum temporibus doloribus beatae voluptatum odio repellendus non, in quis aspernatur
            commodi.
          </p>
        </div>
        <div className="img-about">
          <img src="https://avatars.githubusercontent.com/u/41311211?v=4" alt="" />
        </div>
      </div>
    </section>
  );
}
