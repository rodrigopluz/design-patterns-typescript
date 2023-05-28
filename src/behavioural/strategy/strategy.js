"use strict";
exports.__esModule = true;
exports.Personagem = void 0;
/**
 * The Context defines the interface of interest to clients.
 */
var Personagem = /** @class */ (function () {
    function Personagem(arma) {
        this.arma = arma;
    }
    Personagem.prototype.lutar = function () {
        this.arma.usarArma();
    };
    Personagem.prototype.setArma = function (arma) {
        this.arma = arma;
    };
    Personagem.prototype.getArma = function () {
        return this.arma;
    };
    Personagem.prototype.getNomeArma = function () {
        return this.arma.getNome();
    };
    Personagem.prototype.getNome = function () {
        return 'Personagem';
    };
    return Personagem;
}());
exports.Personagem = Personagem;
