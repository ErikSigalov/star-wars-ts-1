import Hero from "../components/Hero.tsx";


export interface SWContextValue {
    hero: string;
    changeHero: (hero: string) => void;
}

export interface HeroInfo {
    name: string;
    gender: string;
    birth_year: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
}

export interface Hero {
    name: string;
    img: string;
    url: string;
}

export type Characters = Record<string, Hero>


