/**
*   Written by Oso Oluwafemi<osofem87@gmail.com>
*   Dependent on Molecules
*   Get the molar mass of a compound in g/mol
*/
declare const Molecules: any;
export default class MolarMass extends Molecules {
    #private;
    /**
     * Initialize MolarMass
     */
    constructor();
    /**
    *	Returns the molar mass of the molecular formula in grams/mole to 2 decimal place
    *	function getMolarMass
    *	@param {string} mf The molecular formular of the compound
    *	@returns {number} The molar mass of the compound in g/mol.
    */
    getMolarMass(mf: string): number;
}
export {};
