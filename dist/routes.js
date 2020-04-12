"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
function test(req, res) {
    return express_1.response.json({ test: "TESTE" });
}
exports.test = test;
