"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const listings_1 = require("./listings");
const app = (0, express_1.default)();
const port = 9000;
app.use(body_parser_1.default.json());
// /listings route
app.get("/listings", (_req, res) => {
    return res.send(listings_1.listings);
});
// /delete-listing route
app.post("/delete-listing", (req, res) => {
    const id = req.body.id;
    for (let i = 0; i < listings_1.listings.length; i++) {
        if (listings_1.listings[i].id === id) {
            return res.send(listings_1.listings.splice(i, 1));
        }
    }
    return res.send("Failed to delete listing");
});
app.listen(port);
console.log(`[app] : http://localhost:${port}`);
