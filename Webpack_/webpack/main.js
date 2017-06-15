
import _ from 'lodash';

console.log('Hello from Webpack');

const name = 'Scotch.io';

setTimeout(() => alert(`Hello there from ${name}`), 300); // ${...} er template literaler, indeholder expressions

function Person(fn,ln,s){
  this.firstName = fn;
  this.lastName = ln;
  this.favoriteSport = s;
}

const persons = [
  new Person("Kurt", "Wonnegut","Socker"),
  new Person("Jan", "Peterson","Hockey"),
  new Person("Jane", "Peterson","Skating"),
  new Person("John", "Hansen","Socker"),
]

function getTable(data,sport){
  const filtered = sport ? data.filter(p => p.favoriteSport === sport) : data; // 1 filter
  const headers = _.keys(filtered[0]); // 2 _.keys(object)
  const headerHTML = headers.map(h=>`<th>${_.startCase(h)}</th>`).join(" "); // 3 map, 4 _startCase, 5 join
  const bodyHTML = filtered.map((p)=> `<tr>
  <td>${p.firstName}</td>
  <td>${p.lastName}</td>
  <td>${p.favoriteSport}</td>
  </tr>`).join(" ");
  return  `<table class="table">
  <thead><tr>${headerHTML}</tr></thead>
  <tbody>${bodyHTML}</tbody>
  </table>`
}

// 1) filter
// 2) opretter et array af filtered objektet
// 3) key-value pairs
// 4) konverterer strings til string med stort forbogstav
// 5) konverterer alle strings til én string
const table = getTable(persons);
document.getElementById('my-table').innerHTML = table;