import { ProfilePhoto } from "../../../components/ProfilePhoto/ProfilePhoto";
import Photo from "../../../assets/images/gitProfile.webp";
import "./style.css";
import  {TypingText }  from "../../../components/TypingText/TypingText";

const  Hero = () => {

  return (
    <>
    <section>

      <div className="title">
        <h2>Hi, I am a</h2>
        <TypingText text={["FullStack Developer", "Problem Solver", "dor"]} />
      </div>

      <div className="title-complement">
        <ProfilePhoto  path={Photo} size="30dvw" />
      </div>

    </section>

    </>
  )
}

export default Hero