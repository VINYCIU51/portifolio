import { ProfilePhoto } from "../../../componens/ProfilePhoto/ProfilePhoto";
import Photo from "../../../assets/images/demo1.png";
import "./style.css";
import  {TypingText }  from "../../../componens/TypingText/TypingText";

const  Hero = () => {

  return (
    <>
    <section>

      <div className="title">
        <h2>Hi, I am a</h2>
        <TypingText text={["FullStack Developer"]} />
      </div>

      <div className="title-complement">
        <ProfilePhoto  path={Photo} size={ 300 } />
      </div>

    </section>

    </>
  )
}

export default Hero