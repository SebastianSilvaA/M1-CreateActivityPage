const {Repository, Activity} = require("../scripts/models");


describe('testeos', () => {
    it('tiene que ser una clase', () => {
        expect(typeof Activity.prototype.constructor).toBe('function')
    })
    it('debe tener el metodo activity', () => {
        
    })
} ) 