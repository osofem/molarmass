"use strict";
/**
*   Written by Oso Oluwafemi<osofem87@gmail.com>
*   Dependent on Molecules
*   Get the molar mass of a compound in g/mol
*/
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MolarMass_instances, _MolarMass_atomicMass;
Object.defineProperty(exports, "__esModule", { value: true });
//requires Molecules
const Molecules = require('molecules.js');
class MolarMass extends Molecules {
    /**
     * Initialize MolarMass
     */
    constructor() {
        super();
        _MolarMass_instances.add(this);
    }
    /**
    *	Returns the molar mass of the molecular formula in grams/mole to 2 decimal place
    *	function getMolarMass
    *	@param {string} mf The molecular formular of the compound
    *	@returns {number} The molar mass of the compound in g/mol.
    */
    getMolarMass(mf) {
        //Get the number of each atom in the compound in form of {O: 2, C: 3}
        const moles = this.getMolecules(mf);
        let mass = 0;
        for (let mole in moles) {
            //Get the atomic mass of elemeent element and multiply it with the number of atom present
            //Add the result to the mass
            mass += __classPrivateFieldGet(this, _MolarMass_instances, "m", _MolarMass_atomicMass).call(this, mole) * moles[mole];
        }
        return Number(mass.toFixed(2));
    }
}
exports.default = MolarMass;
_MolarMass_instances = new WeakSet(), _MolarMass_atomicMass = function _MolarMass_atomicMass(el) {
    const elements = [];
    elements['Ac'] = 227.028;
    elements['Al'] = 26.981539;
    elements['Am'] = 243;
    elements['Sb'] = 121.757;
    elements['Ar'] = 39.948;
    elements['As'] = 74.92159;
    elements['At'] = 210;
    elements['Ba'] = 137.327;
    elements['Bk'] = 247;
    elements['Be'] = 9.012182;
    elements['Bi'] = 208.98037;
    elements['Bh'] = 262;
    elements['B'] = 10.811;
    elements['Br'] = 79.904;
    elements['Cd'] = 112.411;
    elements['Ca'] = 40.078;
    elements['Cf'] = 251;
    elements['C'] = 12.011;
    elements['Ce'] = 140.115;
    elements['Cs'] = 132.90543;
    elements['Cl'] = 35.4527;
    elements['Cr'] = 51.9961;
    elements['Co'] = 58.9332;
    elements['Cu'] = 63.546;
    elements['Cm'] = 247;
    elements['Db'] = 262;
    elements['Dy'] = 162.5;
    elements['Es'] = 252;
    elements['Er'] = 167.26;
    elements['Eu'] = 151.965;
    elements['Fm'] = 257;
    elements['F'] = 18.9984032;
    elements['Fr'] = 223;
    elements['Gd'] = 157.25;
    elements['Ga'] = 69.723;
    elements['Ge'] = 72.61;
    elements['Au'] = 196.96654;
    elements['Hf'] = 178.49;
    elements['Hs'] = 265;
    elements['He'] = 4.002602;
    elements['Ho'] = 164.93032;
    elements['H'] = 1.00794;
    elements['In'] = 114.82;
    elements['I'] = 126.90447;
    elements['Ir'] = 192.22;
    elements['Fe'] = 55.847;
    elements['Kr'] = 83.8;
    elements['La'] = 138.9055;
    elements['Lr'] = 262;
    elements['Pb'] = 207.2;
    elements['Li'] = 6.941;
    elements['Lu'] = 174.967;
    elements['Mg'] = 24.305;
    elements['Mn'] = 54.93805;
    elements['Mt'] = 266;
    elements['Md'] = 258;
    elements['Hg'] = 200.59;
    elements['Mo'] = 95.94;
    elements['Nd'] = 144.24;
    elements['Ne'] = 20.1797;
    elements['Np'] = 237.048;
    elements['Ni'] = 58.6934;
    elements['Nb'] = 92.90638;
    elements['N'] = 14.00674;
    elements['No'] = 259;
    elements['Os'] = 190.2;
    elements['O'] = 15.9994;
    elements['Pd'] = 106.42;
    elements['P'] = 30.973762;
    elements['Pt'] = 195.08;
    elements['Pu'] = 244;
    elements['Po'] = 209;
    elements['K'] = 39.0983;
    elements['Pr'] = 140.90765;
    elements['Pm'] = 145;
    elements['Pa'] = 231.0359;
    elements['Ra'] = 226.025;
    elements['Rn'] = 222;
    elements['Re'] = 186.207;
    elements['Rh'] = 102.9055;
    elements['Rb'] = 85.4678;
    elements['Ru'] = 101.07;
    elements['Rf'] = 261;
    elements['Sm'] = 150.36;
    elements['Sc'] = 44.95591;
    elements['Sg'] = 263;
    elements['Se'] = 78.96;
    elements['Si'] = 28.0855;
    elements['Ag'] = 107.8682;
    elements['Na'] = 22.989768;
    elements['Sr'] = 87.62;
    elements['S'] = 32.066;
    elements['Ta'] = 180.9479;
    elements['Tc'] = 98;
    elements['Te'] = 127.6;
    elements['Tb'] = 158.92534;
    elements['Tl'] = 204.3833;
    elements['Th'] = 232.0381;
    elements['Tm'] = 168.93421;
    elements['Sn'] = 118.71;
    elements['Ti'] = 47.88;
    elements['W'] = 183.85;
    elements['U'] = 238.0289;
    elements['V'] = 50.9415;
    elements['Xe'] = 131.29;
    elements['Yb'] = 173.04;
    elements['Y'] = 88.90585;
    elements['Zn'] = 65.39;
    elements['Zr'] = 91.224;
    return elements[el];
};
;
module.exports = MolarMass;
