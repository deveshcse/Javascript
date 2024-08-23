const marvel_heros = ['thor', "IronMan", "spidrman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

console.log(marvel_heros);

// const newsuperheros = marvel_heros.concat(dc_heros)
 
// console.log(newsuperheros);

const allnewheros = [...dc_heros, ...marvel_heros]
// console.log(allnewheros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "Hitesh"})); // interestuing case


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
