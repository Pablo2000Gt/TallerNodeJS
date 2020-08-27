"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var indexRoutes = /** @class */ (function () {
    function indexRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    indexRoutes.prototype.config = function () {
        this.router.get('/', function (req, res) {
            res.send('Hola Mundo!');
        });
        this.router.get('/prueba', function (req, res) {
            res.send('Prueba funciona');
        });
    };
    return indexRoutes;
}());
var indexroutes = new indexRoutes();
exports.default = indexroutes.router;
