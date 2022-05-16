"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("./services");
const enums_1 = require("./enums");
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    let { data: users } = yield services_1.userService.getAll();
    for (const user of users) {
        console.log(user.name);
    }
});
getAllUsers();
console.log(enums_1.MyEnum.ADD);
//# sourceMappingURL=app2.js.map