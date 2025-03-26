
function berechne() {
  const verzicht = parseFloat(document.getElementById('verzicht').value);
  const laufzeit = parseFloat(document.getElementById('laufzeit').value);
  const bewertung = parseFloat(document.getElementById('bewertung').value);

  const gesamt = verzicht * 12 * laufzeit;
  const anteil = (gesamt / bewertung) * 100;

  document.getElementById('ergebnis').innerHTML =
    `<p><strong>Gesamtverzicht:</strong> ${gesamt.toFixed(2)} €</p>
     <p><strong>Virtueller Anteil:</strong> ${anteil.toFixed(4)}%</p>`;
}
