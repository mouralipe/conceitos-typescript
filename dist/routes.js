"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function test(req, res) {
    var user = CreateUser_1.default({
        email: "Felipe",
        password: "21321",
        techs: [
            "Node",
            "React",
            "React Native",
            { title: "Javascript", experience: 100 },
        ],
    });
    return res.json({ test: "TESTE" });
}
exports.test = test;
