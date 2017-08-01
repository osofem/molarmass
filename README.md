# molarmass.js
Get the molar mass of a compound in g/mol

### Install
Depending on the environment in which `molarmass.js` will be used, it can be installed via:

#### Server-side usage
1. Installing on node.js
	```javascript
	npm install molarmass.js
	```
  
  `molarmass.js` is however dependent on `molecules.js`  (on [github](github.com/osofem/molecules), on [npm](https://www.npmjs.com/package/molecules.js)). `molecules.js` should be automatically installed.

#### Client-side usage

Bacause of the dependence of `molarmass.js` on `molecules.js`, `molecules.js` will have to be included in the code before `molarmass.js`.
##### Including molecules.js
1. Including the library from the rawgit.com CDN.<br>
	You can do that by adding <code>&lt;script src=&quot;https&#58;&#47;&#47;cdn.rawgit.com/osofem/molecules/&lt;version tag&gt;/molecules.js&quot;&gt;&lt;/script&gt;</code> to your code. Replace <code>&lt;version tag&gt;</code> with the version targeted e.g. `v1.0.0`. Check [versions](https://github.com/osofem/molecules/tags) for the latest version (the latest version is always recommended).
2. Downloading the source from GitHub.com<br>
	You can also download `molecules.js` from [releases](https://github.com/osofem/molecules/releases/) on github.com (the latest version is always recommended). Extract the files and include the `molecules.js` file in your work.
  
##### Including molarmass.js
1. Including the library from the rawgit.com CDN.<br>
	You can do that by adding <code>&lt;script src=&quot;https&#58;&#47;&#47;cdn.rawgit.com/osofem/molarmass/&lt;version tag&gt;/molarmass.js&quot;&gt;&lt;/script&gt;</code> to your code. Replace <code>&lt;version tag&gt;</code> with the version targeted e.g. `v1.0.0`. Check [versions](https://github.com/osofem/molarmass/tags) for the latest version (the latest version is always recommended).
2. Downloading the source from GitHub.com<br>
	You can also download `molarmass.js` from [releases](https://github.com/osofem/molarmass/releases/) on github.com (the latest version is always recommended). Extract the files and include the `molarmass.js` file in your work.
  
### Usage
> In the server-side, always add the `var MolarMass = require('molarmass.js');` however every other thing remains the same in both server-side and client-side.
```javascript
var mm = new MolarMass();
console.log(mm.getMolarMass("H2O")); //This logs 18.02
console.log(mm.getMolarMass("NaCl")); //This logs 58.44
console.log(mm.getMolarMass("CaSO4")); //This logs 136.14
console.log(mm.getMolarMass("Al2(SO4)3")); //This logs 342.15
console.log(mm.getMolarMass("CH3COOH")); //This logs 60.05
console.log(mm.getMolarMass("K2Cr2O7")); //This logs 294.18
console.log(mm.getMolarMass("(NH4)2Cr2O7")); //This logs 252.06
console.log(mm.getMolarMass("C12H22O11")); //This logs 342.30 
```
