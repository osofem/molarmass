const assert = require('chai').assert;
const Molarmass = require("../dist/molarmass.js");

const mm = new Molarmass();

describe('Molar Mass Test', ()=>{

    it('singulars', ()=>{
        assert.equal(mm.getMolarMass("Ti"), 47.88);
        assert.equal(mm.getMolarMass("Na"), 22.99);
        assert.equal(mm.getMolarMass("Cl"), 35.45);
    });

    it('compounds', ()=>{
        assert.equal(mm.getMolarMass("H2O"), 18.02);
        assert.equal(mm.getMolarMass("NaCl"), 58.44);
        assert.equal(mm.getMolarMass("CaSO4"), 136.14);
        assert.equal(mm.getMolarMass("Al2(SO4)3"), 342.15);
        assert.equal(mm.getMolarMass("CH3COOH"), 60.05);
        assert.equal(mm.getMolarMass("K2Cr2O7"), 294.18);
        assert.equal(mm.getMolarMass("(NH4)2Cr2O7"), 252.06);
        assert.equal(mm.getMolarMass("C12H22O11"), 342.30);
    });

    it('complex compounds', ()=>{
        assert.equal(mm.getMolarMass("Mg(C17H35COO)2"), 591.25);
        assert.equal(mm.getMolarMass("(C17H35COO)2Mg"), 591.25);
        assert.equal(mm.getMolarMass("Ca(C17H35COO)2"), 607.03);
        assert.equal(mm.getMolarMass("Ca(HCO3)2"), 162.11);
        assert.equal(mm.getMolarMass("Ca3(PO4)2"), 310.18);
        assert.equal(mm.getMolarMass("Mg3(PO4)2"), 262.86);
    });


   it('Compounds starting with numbers', ()=>{
        assert.equal(mm.getMolarMass("6NaHCO3"), 504.04);
        assert.equal(mm.getMolarMass("2Na3PO4"), 327.88);
    });

});

