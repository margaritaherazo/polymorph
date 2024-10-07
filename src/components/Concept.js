import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Concept() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <section id="concept" className="container">
      <h2 className="text-center">Mein Konzept</h2>
      <div className="row">
        <div className="col-md-8">
          <p>
            Ich begreife den Menschen als ein lebendiges, atmendes und vernetztes Ökosystem. In der Selbsterfahrung und meiner Arbeit mit anderen erlebe ich immer wieder eindrücklich, dass die Verbindung von Atem, Stimme, Faszien und dem neurogenen Tremor neue Dimensionen der Heilung eröffnen kann.
          </p>

          <p>
            Dabei gehe ich von einem ganzheitlichen Ansatz aus, der sich unter anderem an den Erkenntnissen der Quantenphysik und dem Wissen der Neurophysiologie orientiert.
          </p>

          <p>
            Ich verbinde <Link to="/vocalbreath">Atem und Stimmcoaching</Link> mit <Link to="/fascialmanuvers">faszialen Techniken</Link> und der <Link to="/tre">TRE®-Methode</Link> (Tension & Trauma Releasing Exercises), um Menschen bei der Stressbewältigung und der Wiederherstellung innerer Balance zu unterstützen.
          </p>

          <p>
            Der menschliche Körper besteht aus einem komplexen Netzwerk von Systemen, die durch Schwingungen, Frequenzen und energetische Impulse miteinander kommunizieren. Die Faszien, als kristallines Bindegewebe, spielen hierbei eine zentrale Rolle, da sie Schwingungen und Informationen im gesamten Körper weiterleiten. Indem Spannungen im faszialen Gewebe gelöst werden, können stagnierende Energien wieder in Fluss gebracht und das allgemeine Wohlbefinden gesteigert werden. Die gezielte Arbeit an den Faszien ist daher nicht nur eine körperliche Entlastung, sondern auch ein Schlüsselfaktor in der Wiederherstellung des energetischen Gleichgewichts.
          </p>

          {showMore && (
            <div>
              <p>
                <Link to="/vocalbreath">Atem und Stimmtechniken</Link> spielen ebenfalls eine wesentliche Rolle in diesem Heilungsprozess. Der Atem ist die Brücke zwischen Körper und Geist, die es ermöglicht, das autonome Nervensystem zu regulieren und tiefere Bewusstseinsebenen zu erreichen. Die Stimme, die über ihre Resonanz in den Körper wirkt, beeinflusst nicht nur das emotionale Befinden, sondern stimuliert auch das fasziale Netzwerk und den Vagusnerv. Durch gezielte Atem- und Stimmübungen können emotionale Spannungen abgebaut und das Nervensystem beruhigt werden. Die Polyvagal-Theorie, entwickelt von Dr. Stephen Porges, unterstützt diesen Ansatz, indem sie erklärt, wie das autonome Nervensystem auf Stress reagiert und durch die Stimulation des Vagusnervs Entspannung gefördert wird.
              </p>

              <p>
                Die <Link to="/tre">TRE®-Methode</Link> ist ein weiterer zentraler Bestandteil meiner Arbeit. Durch das Auslösen eines neurogenen Tremors – also das natürliche Zittern des Körpers – werden muskuläre und energetische Spannungen auf tiefster Ebene abgebaut. Dieser Mechanismus, der in enger Verbindung mit der Polyvagal-Theorie steht, ermöglicht es dem Körper, sich selbst zu regulieren und in einen Zustand tiefer Entspannung zu gelangen. Das Zittern löst nicht nur physische Blockaden, sondern harmonisiert auch die energetischen Schwingungen im Körper.
              </p>
            </div>
          )}

          <button onClick={toggleShowMore} className="btn btn-primary mt-3">
            {showMore ? "Weniger anzeigen" : "Mehr anzeigen"}
          </button>
        </div>

        <div className="col-md-4">
            <img src="/assets/imgs/tre.jpg" alt="TRE" className="img-fluid concept-img" />
        </div>
      </div>
    </section>
  );
}

export default Concept;
