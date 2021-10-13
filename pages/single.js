import { useEffect, useState } from "react";
import eevee from "../samples/eevee.json";
import styles from "../styles/Single.module.scss";
import Head from "next/head";
import Image from "next/image";

const single = () => {
    return (
        <main className={styles.homepage}>
            <Head>
                <title>It's {eevee.info.name}</title>
                <meta name="description" content="Hello World!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="wrapper">
                <h1>It's {eevee.info.name}</h1>
                <Image
                    src={
                        eevee.info.sprites.other["official-artwork"]
                            .front_default
                    }
                    alt=""
                    width={500}
                    height={500}
                />
                <p>{eevee.species.flavor_text_entries[0].flavor_text}</p>
            </div>
        </main>
    );
};

export default single;
