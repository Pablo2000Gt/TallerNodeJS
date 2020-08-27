"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var peliculasRoutes = /** @class */ (function () {
    function peliculasRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    peliculasRoutes.prototype.config = function () {
        this.router.get('/obtener', function (req, res) {
            res.send('Esta es una pelicula');
        });
        this.router.get('/prueba', function (req, res) {
            res.send('Prueba funciona');
        });
    };
    return peliculasRoutes;
}());
var peliculasroutes = new peliculasRoutes();
exports.default = peliculasroutes.router;
