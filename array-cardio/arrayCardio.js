// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1
// Some data we can work with
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const filterInventors = inventors.filter((inventor) => inventor.year >= 1500 && inventor.year < 1600);
console.log(`Inventors of 1500 century`);
console.table(filterInventors);
console.log('------------------------------------------');

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const inventorNames = inventors.map((inventor) => inventor.first + ' ' + inventor.last);
console.log(`Inventor's first & last names`, inventorNames);
console.log('------------------------------------------');

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortedInventors = inventors.sort((leftInventor, rightInventor) => leftInventor.year - rightInventor.year);
console.log(`Inventor's sorted, oldest to youngest`);
console.table(sortedInventors);
console.log('------------------------------------------');

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const yearsLived = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(`Inventor's lived`, yearsLived);
console.log('------------------------------------------');

// 5. Sort the inventors by years lived
const inventorsLivedSorted = inventors.sort((a,b) => {
  const aLife = a.passed - a.year;
  const bLife = b.passed - b.year;

  return aLife - bLife;
});
console.log(`Inventors sorted by age`);
console.table(inventorsLivedSorted);
console.log('------------------------------------------');

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const links = document.querySelectorAll('.mw-category-group a');
// const arrayLinks = Array.from(links);
// const de = arrayLinks
//   .map((link) => link.text)
//   .filter((text) => text.includes('de'));
// console.log(de);

// 7. sort Exercise
// Sort the people alphabetically by last name
const lastNameSorted = people.sort((a, b) => {
  var [aFirst, aLast] = a.split(', ');
  var [bFirst, bLast] = b.split(', ');

  return aLast > bLast ? 1 : -1;
});
console.log('People sorted by last name ');
console.log(lastNameSorted);
console.log('------------------------------------------');

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
const eachVehicleCount = data.reduce((vehicles, name) => {
  if(!vehicles.hasOwnProperty(name)) {
    vehicles[name] = 0;
  }
  vehicles[name] += 1;

  return vehicles;
}, {});
console.log(data, '\nEach Vehicle Counts: ',eachVehicleCount);
console.log('------------------------------------------');
