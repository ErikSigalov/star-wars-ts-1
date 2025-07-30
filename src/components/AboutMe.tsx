import type {Hero} from "./Hero";
import {base_url, characters, period_month} from "../utils/constants.ts";
import {useEffect, useState} from "react";
import {useParams} from "react-router";


const AboutMe = () => {
    const [hero, setHero] = useState<Hero | null>(null);
    const {heroId} = useParams();

    useEffect(() => {
        if (!heroId || !characters) return;

        const hero = JSON.parse(localStorage.getItem(`hero ${heroId}`)!);
        if (hero && ((Date.now() - hero.timestamp) < period_month)) {
            setHero(hero.payload);
        } else {
            fetch(`${base_url}/v1/people/${heroId}`)
                .then(response => response.json())
                .then(data => {
                    const info: Hero = {
                        name: data.name,
                        gender: data.gender,
                        birth_year: data.birth_year,
                        height: data.height,
                        mass: data.mass,
                        hair_color: data.hair_color,
                        skin_color: data.skin_color,
                        eye_color: data.eye_color
                    }
                    setHero(info);
                    localStorage.setItem(`hero ${heroId}`, JSON.stringify({
                        payload: info,
                        timestamp: Date.now()
                    }));
                })
        }
    }, [heroId])

    return (
        <>
            {(!!hero) &&
                <div className={'text-[2em] text-justify tracking-widest leading-14 ml-8'}>
                    {Object.keys(hero).map((key) => (
                        <p key={key}>
                            <span className="text-3xl capitalize">{key.replace('_', ' ')}</span>: {hero[key as keyof Hero]}
                        </p>
                    ))}
                </div>
            }
        </>
    );
};

export default AboutMe;