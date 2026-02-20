const pervoeChislo = document.getElementById('pervoe-chislo');
const vtoroeChislo = document.getElementById('vtoroe-chislo');
const znakRezultata = document.getElementById('znak-rezultata');
const knopkaSravnit = document.getElementById('knopka-sravnit');

knopkaSravnit.addEventListener('click', function() {
  const chislo1 = parseFloat(pervoeChislo.value);
  const chislo2 = parseFloat(vtoroeChislo.value);

  if (isNaN(chislo1) || isNaN(chislo2)) {
    znakRezultata.textContent = '?';
    znakRezultata.style.color = '#999';
    return;
  }

  if (chislo1 > chislo2) {
    znakRezultata.textContent = '>';
    znakRezultata.style.color = '#e74c3c';
  } else if (chislo1 < chislo2) {
    znakRezultata.textContent = '<';
    znakRezultata.style.color = '#3498db';
  } else {
    znakRezultata.textContent = '=';
    znakRezultata.style.color = '#2ecc71';
  }
});