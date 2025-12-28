import "./style.css";
import { TypingText } from "../../../components/TypingText/TypingText";
import FloatingLines from "../../../components/FloatingLines/FloatingLines";

const Hero = () => {
    return (
        <>
            <div
                style={{ width: "100%", height: "100%", position: "absolute" }}
            >
                <FloatingLines
                    linesGradient={["#6e6e6e", "#525252"]}
                    enabledWaves={["top", "middle"]}
                    // Array - specify line count per wave; Number - same count for all waves
                    lineCount={[12, 6, 20]}
                    // Array - specify line distance per wave; Number - same distance for all waves
                    lineDistance={[50, 25, 4]}
                    bendRadius={5.0}
                    bendStrength={-0.6}
                    interactive={true}
                    parallax={false}
                    mixBlendMode="difference"
                />
            </div>

            <section>
                <div className="title">
                    <h2>Hi, I am a</h2>
                    <TypingText
                        text={["FullStack Developer", "Problem Solver", "dor"]}
                        loop={false}
                    />
                </div>
            </section>
        </>
    );
};

export default Hero;
