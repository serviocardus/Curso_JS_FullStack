//Desestruturação 

const numberOfMoons = [0, 2, 14]

//let venus = numberOfMoons[0];
//let mars = numberOfMoons[1];
//let neptune = numberOfMoons[2];

const [venus, mars, neptune] = numberOfMoons;

console.log(venus);
console.log(mars);
console.log(neptune);


//Desestruturação 

const countries = [['Finland', 'Helsink'], ['Sweden', 'Stockolm'], ['Norway', 'Oslo']]

for (const [country, city] of countries){
  
console.log(country, city);
};


const countries2 = [['Finland', 'Helsink'], ['Sweden', 'Stockolm'], ['Norway', 'Oslo']]

for (const [, city] of countries2){
  
console.log(city);
}

const countries3 = [['Finland', 'Helsink'], ['Sweden', 'Stockolm'], ['Norway', 'Oslo']]

for (const [country, city] of countries3){
  
console.log(city);
}