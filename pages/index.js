/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Vimeo from '@u-wave/react-vimeo';
import Image from 'next/image';
import { ContactUs } from '../components/ContactUs';
import FadeIn from 'react-fade-in';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

export default function Home() {
  return (

    <div id={styles.page}>
      <Head>
        <link
          rel="preload"
          href="/font.otf"
          as="font"
          crossOrigin=""
        />
        <title>ONE PLANET</title>
        <meta name="description" content="ONE PLANET, ONE VISION. Gemeinsam gegen den Klimawandel. Für eine nachhaltige Zukunft. Mittels Kommunikation, Kooperation und Konnektivität." />
        <meta itemProp="name" content="ONE PLANET" />
        <meta itemProp="description" content="ONE PLANET, ONE VISION. Gemeinsam gegen den Klimawandel. Für eine nachhaltige Zukunft. Mittels Kommunikation, Kooperation und Konnektivität." />
      </Head>
        <FadeIn delay="220" className={styles.header}>

        <h1 className={styles.headline}>ONE PLANET.<br /> ONE VISION</h1>

        <p className={styles.paragraph}>
          Eine prosperierende Zukunft für uns alle ist möglich – auch vor dem
          Hintergrund einer wachsenden Weltbevölkerung und einem erhöhten Bedarf
          an Ressourcen. Wir sind ONE PLANET, ein gemeinnütziges
          Umweltschutz-Start-up. Wir möchten informieren, inspirieren sowie
          Forschung anregen. <b>– ONE PLANET. ONE VISION</b>
        </p>

        <p className={styles.paragraphBold}>
          Gemeinsam gegen den Klimawandel. Für eine nachhaltige Zukunft.
        </p>
        </FadeIn>
      <Zoom className={styles.zoom}>
      <div className={styles.vimeoWrapper}>
        <Vimeo
          className={styles.vimeoVideo}
          video="702525682"
          autoplay="true"
          width={880}
          responsive
        />
      </div>
        </Zoom>

      <div className={styles.section}>
        <div className={styles.videoWrapper}>
          <video
            id={styles.video1}
            className={styles.video}
            autoPlay
            loop
            controls="true"
            muted
            playsinline
            poster="/schlieren1.png"
          >
            <source src="/schlieren1.mp4" type="video/mp4" />
          </video>

          <div className={styles.content}>
            <h2 className={styles.headline2}>Informationskampagne</h2>
          </div>
        </div>

        <div className={styles.gradientWrapper}>

          <div className={styles.lineWrapper}>

          </div>
          <div className={styles.textSection}>
          <Fade >
            <p className={styles.paragraph}>
              Was können wir konkret tun? Wie lassen sich gemeinschaftlich Mittel und
              Wege finden, um die globale Erderwärmung aufzuhalten? Was wir brauchen,
              ist eine ganzheitliche Vorstellung davon, welcher Herausforderung wir
              uns gegenübersehen. Untätigkeit ist keine Option.
            </p>

            <p className={styles.paragraph}>
              Daher haben wir uns zum Ziel gesetzt, mit führenden
              Klimawissenschaftlerinnen und Klimawissenschaftlern zu kooperieren. Um
              eine Informationsplattform zur <b>Veröffentlichung sämtlicher relevanten Klimadaten</b> zu schaffen.
              Als vertrauensvolle Grundlage für einen sachlich fundierten
              gesellschaftlichen Diskurs. Transparent und verständlich.
            </p>
          </Fade>
          </div>

          <div className={styles.lineWrapper2}>

          </div>
        </div >
      </div>
      <div className={styles.section}>
        <div className={styles.videoWrapper}>
          <video
            id={styles.video1}
            className={styles.video}
            autoPlay
            loop
            playsinline
            muted
            poster="/schlieren2.png"
          >
            <source src="/schlieren2.mp4" type="video/mp4" />
          </video>

          <div className={styles.content}>
            <h2 className={styles.headline2}>Forschung und Entwicklung</h2>
          </div>
        </div>
        <div className={styles.gradientWrapper}>
          <div className={styles.textSection}>
            <Fade>
            <p className={styles.paragraph}>
              Vor uns steht die größte zivilisatorische Transformation der
              Geschichte. Um diese gigantische Herausforderung zu meistern,
              benötigen wir eine Vielzahl von Ideen und Lösungen. Als nicht
              profitorientierte Organisation stehen uns <b>keine Interessenkonflikte</b> im Weg. Wir sind in der Lage,
              entkoppelt von jeglichen – ökonomischen wie politischen – Einflüssen
              oder Zwängen zu agieren. Um jene Technologien zu forcieren, die aus
              unserer Sicht die stärkste Kraft entfalten zur Gestaltung einer
              nachhaltigen Zukunft.
            </p>

            <p className={styles.paragraph}>
              So halten wir das friedliche Zusammenleben von 11 Milliarden Menschen
              für erreichbar. Mit einem Zeithorizont von 10.000 Jahren bei
              europäischem Lebensstandard – ohne dabei den Planeten an seine
              Belastungsgrenzen zu bringen. Es ist die Stunde der Wissenschaft, der
              Forschung, der Visionen und Taten.
            </p>
            </Fade>
            <h3 className={styles.headline3}>ONE PLANET. ONE SPIRIT</h3>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.videoWrapper}>
          <video
            id={styles.video1}
            className={styles.video}
            autoPlay
            loop
            playsinline
            muted
            poster="/schlieren3.png"
          >
            <source src="/schlieren3.mp4" type="video/mp4" />
          </video>

          <div className={styles.content}>
            <h2 className={styles.headline2}>ONE PLANET. ONE MISSION.</h2>
          </div>
        </div>
        <div className={styles.gradientWrapper}>
          <div className={styles.textSection}>
            <div className={styles.lineWrapper3}>

            </div>
            <Fade>
            <p className={styles.paragraph}>
              ONE PLANET verfolgt als vordringliches Ziel, die weltweiten
              CO2-Emissionen von jährlich 38 Gigatonnen zu neutralisieren – und
              langfristig
              <b
              >den CO2-Gehalt der Atmosphäre auf ein vorindustrielles Niveau zu
                senken</b
              >. Das Non-Profit-Start-up setzt auf einen lebendigen Austausch; auf
              Kommunikation, Kooperation und Konnektivität.
            </p>

            <p className={styles.paragraph}>
              Die Geschichte zeigt, dass wir imstande sind, Herausragendes leisten.
              Mit der uns Menschen angeborenen Fähigkeit, innovativ und kreativ zu
              sein, Allianzen zu bilden, unsere Kräfte zu vereinen und zu bündeln,
              ausgerichtet auf ein Ziel: den Weg für eine nachhaltige Zukunft zu
              ebenen.
            </p>
            </Fade>

            <h3 className={styles.headline3}>ONE PLANET. ONE MISSION</h3>

            <div className={styles.lineWrapper4}>

            </div>
          </div>
        </div>
        </div>

        <div className={styles.footer}>
          <h1 className={styles.headline}>KONTAKT</h1>

          <ContactUs />
        </div>
      </div>

      )
}
