"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userController_1 = __importDefault(require("./controllers/userController"));
var routes = express_1.Router();
routes.get("/user", userController_1.default.index);
routes.post("/user", userController_1.default.creatUser);
exports.default = routes;
