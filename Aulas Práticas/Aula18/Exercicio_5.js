const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];

console.log(countries.filter(c => c.toLowerCase().startsWith('i')));


console.log(countries.filter(c => c.toLowerCase().endsWith('land')));