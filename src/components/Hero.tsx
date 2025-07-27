export interface Hero {
    name: string;
    gender: string;
    birth_year: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
}
import hero from "../assets/main.jpg";

const Hero = () => {
    return (
        <section className="float-left w-1/4 mr-4">
            <img className="w-full shadow-hero" src={hero} alt="Hero"/>
        </section>
    );
};

export default Hero;