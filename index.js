import inquirer from "inquirer";
import gradient from "gradient-string";

let onoo = 0;

const ner = await inquirer.prompt({
  name: "Ner",
  type: "input",
  message: "Neree oruul",
});

const asuult1 = await inquirer.prompt({
  name: "hariult",
  type: "rawlist",
  message: gradient("red", "red")("2 + 2 хэд вэ?"),
  choices: [
    gradient("blue", "blue")("3"),
    gradient("blue", "blue")("4"),
    gradient("blue", "blue")("5"),
  ],
});
console.log(asuult1);

if (asuult1.hariult === "4") {
  onoo++;
}

const asuult2 = await inquirer.prompt({
  name: "hariult",
  type: "rawlist",
  message: gradient("red", "red")("Монгол улсын нийслэл аль вэ?"),
  choices: [
    gradient("blue", "blue")("Darkhan"),
    gradient("blue", "blue")("Erdenet"),
    gradient("blue", "blue")("Ulaanbaatar"),
  ],
});

if (asuult2.hariult === "Ulaanbaatar") {
  onoo++;
}

const asuult3 = await inquirer.prompt({
  name: "hariult",
  type: "rawlist",
  message: gradient("red", "red")("Нар хаанаас манддаг вэ?"),
  choices: [
    gradient("blue", "blue")("Baruun"),
    gradient("blue", "blue")("Tugsuguus"),
    gradient("blue", "blue")("Zuun"),
  ],
});

if (asuult3.hariult === "Zuun") {
  onoo++;
}

const asuult4 = await inquirer.prompt({
  name: "hariult",
  type: "rawlist",
  message: gradient("red", "red")("Ус ямар өнгөтэй вэ (ихэнхдээ)?"),
  choices: [
    gradient("blue", "blue")("Ulaan"),
    gradient("blue", "blue")("Har"),
    gradient("blue", "blue")("Tungalag"),
  ],
});

if (asuult4.hariult === "Tungalag") {
  onoo++;
}

const asuult5 = await inquirer.prompt({
  name: "hariult",
  type: "rawlist",
  message: gradient("red", "red")("Дэлхий хэдэн сар дагуултай вэ?"),
  choices: [
    gradient("blue", "blue")("1"),
    gradient("blue", "blue")("2"),
    gradient("blue", "blue")("3"),
  ],
});

if (asuult5.hariult === "1") {
  onoo++;
}

const asuult6 = await inquirer.prompt({
  name: "hariult",
  type: "rawlist",
  message: gradient("red", "red")("Муур ямар дуу гаргадаг вэ?"),
  choices: [
    gradient("blue", "blue")("how how"),
    gradient("blue", "blue")("Miav"),
    gradient("blue", "blue")("aaaaaaaaa"),
  ],
});

if (asuult6.hariult === "Miav") {
  onoo++;
}

const asuult7 = await inquirer.prompt({
  name: "hariult",
  type: "rawlist",
  message: gradient("red", "red")("5 - 3 хэд вэ?"),
  choices: [
    gradient("blue", "blue")("999"),
    gradient("blue", "blue")("50k"),
    gradient("blue", "blue")("zuw hariult 2"),
  ],
});

if (asuult7.hariult === "zuw hariult 2") {
  onoo++;
}

const asuult8 = await inquirer.prompt({
  name: "hariult",
  type: "rawlist",
  message: gradient("red", "red")("Өвөл ямар улирал вэ?"),
  choices: [
    gradient("blue", "blue")("Goy"),
    gradient("blue", "blue")("Muuhai"),
    gradient("blue", "blue")("Huiten"),
  ],
});

if (asuult8.hariult === "Huiten") {
  onoo++;
}

const asuult9 = await inquirer.prompt({
  name: "hariult",
  type: "rawlist",
  message: gradient("red", "red")("Нохой ямар амьтан бэ?"),
  choices: [
    gradient("blue", "blue")("Amitan bish"),
    gradient("blue", "blue")("Muur"),
    gradient("blue", "blue")("Amitan"),
  ],
});

if (asuult9.hariult === "Amitan") {
  onoo++;
}

const asuult10 = await inquirer.prompt({
  name: "hariult",
  type: "rawlist",
  message: gradient("red", "red")("10-аас 1-ийг хасвал хэд вэ?"),
  choices: [
    gradient("blue", "blue")("9"),
    gradient("blue", "blue")("1"),
    gradient("blue", "blue")("arwan zuu mynga"),
  ],
});

if (asuult10.hariult === "9") {
  onoo++;
}

console.log(gradient("blue", "red")(`${ner.Ner} tanii onoo ${onoo}`));
