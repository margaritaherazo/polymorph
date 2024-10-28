import React, { useState } from 'react';

function About() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <section id="about">
      <div className="container">
      <h2 className="text-center">Über Mich</h2>
      <div className="row align-items-start">
        <div className="col-md-4 text-center">
          <img src="/assets/imgs/misha1.jpg" alt="About Me" className="img-fluid about-image" />
        </div>
        <div className="col-md-8">
          <div className="about-content">
            <p>
              Ich möchte gerne eine neue Geschichte erzählen, anstatt an der alten festzuhalten.
              Doch was hat mich dazu gebracht? Es war mein Körper, der "Stop" sagte. Inmitten von
              Angststörungen und Panikattacken bin ich der Intelligenz meines Körpers begegnet. Ich
              verstand nicht, was geschah, war verwundert und versuchte, mich aus der Situation
              herauszudenken, auf der Suche nach Wahrheiten und Dingen, die mir entgingen. Je mehr
              ich jedoch nachdachte, desto schlimmer wurde alles. Alles, was ich bis dahin wusste und
              gelesen hatte, war absolut nicht hilfreich. Ruhe und Frieden schien unerreichbar.
            </p>

            <p>
              Als ich schließlich in der Lage war, mit meinem inneren Alarm zu sitzen, ihn zu
              spüren, nicht wegzulaufen oder wegzuwollen, sondern hineinzuatmen und meinen Körper
              leicht zu bewegen, erlebte ich neue Dimensionen. Ich erlaubte mir, "nicht okay" zu
              sein, und dadurch öffneten sich neue Türen. Es gab vieles, was mein Körper nicht
              länger zurückhalten konnte. Mein Organismus hatte so vieles für mich wegsortiert,
              damit ich es nicht fühlen musste – bis zu dem Punkt, an dem der Deckel hochging. Es
              musste so sein.
            </p>

            {showMore && (
              <div>
                <p>
                  Orthomolekulare Medizin, Körperarbeit und heilende Frequenzen waren mein Anker. Ich
                  habe diesen Weg ohne Klinik und ohne Psychopharmaka gewählt. Es hat gedauert, und
                  der Weg war holprig, vor allem wegen meiner Zweifel. Es gab so viel Tiefe, Tränen,
                  Trauer, Schmerz und Angst. Doch ich hatte Glück. Es waren einige Menschen an meiner
                  Seite, die an mich glaubten, die die nötige Ruhe hatten und mir auf verschiedene
                  Weisen immer wieder sagten: "Vertraue deinem Prozess."
                </p>
                <p>Aus heutiger Sicht kann ich sagen: Mein Körper meldet sich manchmal noch mit Alarm, 
                  aber ich gehe anders damit um. Ich halte inne und bleibe dabei, kehre zu mir zurück,
                   fühle es und lasse es sein, so gut ich kann. Ich habe erkannt, dass mein Körper mein
                    größter Verbündeter ist – immer in meinem Dienst, immer. Mir ist klar geworden, dass
                     körperliche und/oder mentale Schmerzen (die sich eh von einander nicht trennen lassen),
                      Wachstumsschmerzen sind, und deshalb kann uns niemand diese einfach abnehmen, denn 
                      dann würden wir unsere Lektion nicht lernen.</p>

                <p>Ich habe begriffen, dass Angststörungen ein körperlicher Zustand sind, und das war für
                   mich revolutionär. Deshalb reicht es nicht aus, nur kognitive Ansätze zu verfolgen. Wir
                    müssen den Körper mitnehmen und in tiefen Kontakt mit ihm treten.</p>
                
                <div className="bio-content">
                  <h4>Ausbildung und Weiterbildungen:</h4>
                  <ul>
                    <li>1986-1994: Volksschule der Musik in Žacléř und Trutnov</li>
                    <li>1994-1999: Studium am Staatlichen Konservatorium in Prag, Fächer: Gesang, Klavier und Tanz</li>
                    <li>2023-jetzt: Weiterbildung in Körperarbeit: Vagusnerv, Breathwork, Stimme, neurogenes Zittern, faszialle Manöver und selbstgesteuertes Studium des Nervensystems basierend auf der Polyvagal-Theorie (Traumaheilung)</li>
                    <li>2023-2024: Ausbildung zum TRE® Provider (Tension and Trauma Releasing Exercises) nach David Berceli</li>
                  </ul>

                  <h4>Erfahrungen:</h4>
                  <ul>
                    <li>2014: Beginn der Gestalttherapeutischen Aufstellungsarbeit und Integration in die körperbezogene Praxis</li>
                    <li>2022: Über 4 Monate Aufenthalt in Costa Rica</li>
                    <li>2023: Über 3 Monate Aufenthalt in Brasilien</li>
                    <li>Seit 05/2024: Arbeit in der Privatpraxis für ganzheitliche Medizin bei Frau Dr. med. Sabine Lodes/ Jena /Zöllnitz</li>
                  </ul>

                  <h4>Frühere Projekte und Bands:</h4>
                  <ul>
                    <li>1995-1999: Mitglied der Hip-Hop-Band "Forbidden Fruit"</li>
                    <li>1996-1998: Arbeit beim Tschechischen Fernsehen/Radio</li>
                    <li>1998: Drum-and-Bass-Projekt "ATMOPRODUCKT" mit DJ, Live-Percussionist und Gesang</li>
                    <li>2004-2020: Drum'n'Bass-Projekt mit DJ und Gesang: "12 Inch Kid & Misa"</li>
                    <li>2004-2006: Chorleitung am Theater Jena für Stücke wie "JOHANNA", "ORESTIE" und "DER STURM"</li>
                    <li>2007-2010: Mitglied der Weltmusikband "LITTLE TONGUE VIBRATION ORCHESTRA" in Leipzig</li>
                    <li>2010-2020: Mitglied der Weltmusikband "ANNULUK" mit weltweiten Auftritten</li>
                    <li>2013: Internationaler Sommercamp-Acapella-Workshop</li>
                    <li>2013: Preisträger von Creole Mitteldeutschland</li>
                    <li>2013-2020: Leitung von Stimm- und Atem-Workshops in Jena und Leipzig</li>
                    <li>2013: CD-Veröffentlichung "USHNA"</li>
                    <li>2014: CD-Veröffentlichung "MALAM"</li>
                    <li>2014: Preisträger der Via Vut Indie Awards (best newcomer)</li>
                    <li>2016: CD-Veröffentlichung "B*A*M" - beautiful and massive</li>
                    <li>2020: EP-Veröffentlichung "MIHO"</li>
                  </ul>
                </div>
              </div>
            )}

            <button onClick={toggleShowMore} className="btn btn-primary mt-3">
              {showMore ? "Weniger anzeigen" : "Mehr anzeigen"}
            </button>
          </div>
        </div>
      </div>
     </div>
    </section>
  );
}

export default About;
