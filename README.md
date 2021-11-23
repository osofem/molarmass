# molarmass.js
Get the molar mass of a compound in g/mol

### Installation

```javascript
npm i molarmass.js
```


### Usage

```javascript
const MolarMass = require('molarmass.js');
const mm = new MolarMass();
console.log(mm.getMolarMass("H2O")); //This logs 18.02
console.log(mm.getMolarMass("NaCl")); //This logs 58.44
console.log(mm.getMolarMass("CaSO4")); //This logs 136.14
console.log(mm.getMolarMass("Al2(SO4)3")); //This logs 342.15
console.log(mm.getMolarMass("CH3COOH")); //This logs 60.05
console.log(mm.getMolarMass("K2Cr2O7")); //This logs 294.18
console.log(mm.getMolarMass("(NH4)2Cr2O7")); //This logs 252.06
console.log(mm.getMolarMass("C12H22O11")); //This logs 342.30 
```