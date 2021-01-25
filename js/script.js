// Organizzare un array di carte (oggetti) Magic  (almeno 5 all'inizio), con tutte le loro proprietà. Partite dalla base che abbiamo definito qui https://github.com/ott-fogliata/boolean-code/blob/main/js-struttura-dati/js/script.js
// Visualizzare nell'html la lista di queste carte mostrando SOLO il nome della carta. Non grafichiamo nulla.
// Creaiamo una select nell'html per filtrare le carte attraverso la proprietà power, per un valore che va da 1 a 5. (anche se in Magic è diverso)
// Superpoweredbonus. E se volessi un'altra select e filtrare gli elementi attraverso la proprietà che abbiamo chiamato cardType?


const fieldCodes = [
  'W', 'U', 'B', 'R', 'G'
];

const cardTypes = [
  'terre',
  'creature',
  'incantesimi',
  'artefatti',
  'instantanei',
  'stregonerie'
];


const valuePower = [1,2,3,4,5];
// Abbiamo creato un oggetto di oggetti, come riferimento
// di una edizione. Se ad esempio scrivo editions['SP']
// allora otterrò tutto un oggetto che descrive
// con più dettagli l'edizione.
// come oggetto di oggetti, può essere navigato solo con il for-in
const editions = {

  'BL': {
      edition: 'Boolean',
      rarity: 'blue'
  },

  'SP': {
      edition: 'Special',
      rarity: 'red'
  }

}


const cards = [{

  cardName: 'Grizzly Bears',

  cost: {
    genericCostNumber: 1,
    costFields: [ // colors array con riferimento a fieldCodes
      fieldCodes[0],  // 'W',  - un suo riferimento
      fieldCodes[2]   // 'B'
    ],
  },

  picture: 'images/i.png',
  cardType: cardTypes[2],
  cardObject: 'Bear',

  editionType: editions['BL'],

  description: 'Lorem ipsum',
  story: 'Naltro Lorem Ipsum',

  score: {
    power: 2,  // filtrarlo per power
    toughness: 2
  }

  },
  {

    cardName: 'Sviluppatore guerriero',

    cost: {
      genericCostNumber: 3,
      costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[2],
        fieldCodes[3]
      ],
    },

    picture: 'images/g.png',  // da inserire immagine
    cardType: cardTypes[1],
    cardObject: 'Bear',

    editionType: editions['BL'],

    description: 'Lo sviluppatore guerriero spezza i byte in bit!',
    story: 'Lo sviluppatore guerriero è una forma di essere umano evoluto.',

    score: {
      power: 5,  // r
      toughness: 3
    }

    },
  {

    cardName: 'Aranzulla',

    cost: {
      genericCostNumber: 3,
      costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[2],
        fieldCodes[3]
      ],
    },

    picture: 'images/g.png',  // da inserire immagine
    cardType: cardTypes[5],
    cardObject: 'Bear',

    editionType: editions['BL'],

    description: 'Lo sviluppatore guerriero spezza i byte in bit!',
    story: 'Lo sviluppatore guerriero è una forma di essere umano evoluto.',

    score: {
      power: 4,  // r
      toughness: 3
    }

    },
  {

    cardName: 'Monopattino',

    cost: {
      genericCostNumber: 3,
      costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[2],
        fieldCodes[3]
      ],
    },

    picture: 'images/g.png',  // da inserire immagine
    cardType: cardTypes[4],
    cardObject: 'Bear',

    editionType: editions['BL'],

    description: 'Lo sviluppatore guerriero spezza i byte in bit!',
    story: 'Lo sviluppatore guerriero è una forma di essere umano evoluto.',

    score: {
      power: 3,  // r
      toughness: 3
    }

    },
  {

    cardName: 'Trullo',

    cost: {
      genericCostNumber: 3,
      costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[2],
        fieldCodes[3]
      ],
    },

    picture: 'images/g.png',  // da inserire immagine
    cardType: cardTypes[3],
    cardObject: 'Bear',

    editionType: editions['BL'],

    description: 'Lo sviluppatore guerriero spezza i byte in bit!',
    story: 'Lo sviluppatore guerriero è una forma di essere umano evoluto.',

    score: {
      power: 3,  // r
      toughness: 3
    }

    },
]

function filterPower(powerValue, array){
  return array.filter((element) =>{
    return element.score.power === powerValue;
  })
}

function render(DOMElementId, array){
  const lista = document.getElementById(DOMElementId);
  lista.innerHTML = '';

  array.forEach((element) => {
    lista.innerHTML+=`
    <li>
      ${element.cardName}
    </li>
    `
  });

}

render('lista', cards);

function renderSelect(DOMElement, array){
  const select = document.getElementById(DOMElement);

  array.forEach((element)=>{
    select.innerHTML+= `<option value="${element}"> ${element} </option>`
  })
}

renderSelect('power', valuePower);


$('#power').change(function(){
  if(isNaN($(this).val())){
    alert('Scegli un numero');
  }else{
    console.log($(this).val());
    const selectValue= parseInt($(this).val());
    const filteredArray = filterPower(selectValue, cards);
    console.log(filteredArray);
    render('lista', filteredArray);

  }
})
