import { ProfilePhoto } from "../../ui/ProfilePhoto/ProfilePhoto"
import Photo from "../../../assets/images/demo1.png"

const  Hero = () => {

  return (
    <>
    <section>

        <h1>FullStack Developer</h1>
        <ProfilePhoto  path={Photo} size={ 200 } />

    </section>

    </>
  )
}

export default Hero