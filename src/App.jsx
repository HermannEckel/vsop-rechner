
import { useState } from 'react';
import './index.css';

export default function App() {
  const [verzicht, setVerzicht] = useState(500);
  const [laufzeit, setLaufzeit] = useState(4);
  const [bewertung, setBewertung] = useState(5000000);
  const [ergebnis, setErgebnis] = useState(null);

  function berechne() {
    const gesamt = verzicht * 12 * laufzeit;
    const anteil = (gesamt / bewertung) * 100;
    setErgebnis({
      gesamtverzicht: gesamt.toFixed(2),
      virtuellerAnteil: anteil.toFixed(4) + '%',
    });
  }

  return (
    <div className="container">
      <h1>VSOP-Rechner</h1>
      <label>
        Gehaltsverzicht monatlich (€):
        <input type="number" value={verzicht} onChange={e => setVerzicht(+e.target.value)} />
      </label>
      <label>
        Laufzeit (Jahre):
        <input type="number" value={laufzeit} onChange={e => setLaufzeit(+e.target.value)} />
      </label>
      <label>
        Unternehmensbewertung (€):
        <input type="number" value={bewertung} onChange={e => setBewertung(+e.target.value)} />
      </label>
      <button onClick={berechne}>Berechnen</button>
      {ergebnis && (
        <div className="result">
          <p><strong>Gesamtverzicht:</strong> {ergebnis.gesamtverzicht} €</p>
          <p><strong>Virtueller Anteil:</strong> {ergebnis.virtuellerAnteil}</p>
        </div>
      )}
    </div>
  );
}
