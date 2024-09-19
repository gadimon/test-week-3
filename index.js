var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//לתת מספר ליד האינפוטים
var select = document.getElementById("select");
var value1 = document.getElementById("value");
var input1 = document.getElementById("pi_input");
value1.textContent = input1.value;
input1.addEventListener("input", function (event) {
    var target = event.target;
    value1.textContent = target.value;
});
var value2 = document.querySelector("#value1");
var input2 = document.querySelector("#pi_input1");
value2.textContent = input2.value;
input2.addEventListener("input", function (event) {
    var target = event.target;
    value2.textContent = target.value;
});
var value3 = document.querySelector("#value2");
var input3 = document.querySelector("#pi_input2");
value3.textContent = input3.value;
input3.addEventListener("input", function (event) {
    var target = event.target;
    value3.textContent = target.value;
});
var BASE_URL = "https://nbaserver-q21u.onrender.com/api/filter/";
var tbody = document.getElementById("tbody");
function renderPlayer() {
    return __awaiter(this, arguments, void 0, function (filterPlayer) {
        if (filterPlayer === void 0) { filterPlayer = []; }
        return __generator(this, function (_a) {
            tbody.textContent = "";
            filterPlayer.forEach(function (player) {
                var tr = document.createElement("tr");
                //מייצר תא לשם השחקן
                var nameTd = document.createElement("td");
                nameTd.textContent = player.playerName;
                tr.append(nameTd);
                //מייצר תא לעמדה
                var positionTd = document.createElement("td");
                positionTd.textContent = player.position;
                tr.append(positionTd);
                //מייצר תא לנקודות
                var pointsTd = document.createElement("td");
                pointsTd.textContent = player.points.toString();
                tr.append(pointsTd);
                //מייצר תא ל2נקודות
                var twoPercentTd = document.createElement("td");
                twoPercentTd.textContent = player.twoPercent.toString();
                tr.append(twoPercentTd);
                //מייצר תא ל3נקודות
                var threePercentTd = document.createElement("td");
                threePercentTd.textContent = player.threePercent.toString();
                tr.append(threePercentTd);
                //מייצר תא לפעולות
                var actionsTd = document.createElement("td");
                var addPlayerBtn = document.createElement("button");
                addPlayerBtn.textContent = "Add Player";
                addPlayerBtn.onclick = function () {
                    addPlayerToBox(player);
                };
                actionsTd.append(addPlayerBtn);
                tr.append(actionsTd);
                tbody.append(tr);
            });
            return [2 /*return*/];
        });
    });
}
var searchBtn = document.getElementById("searchBtn");
searchBtn === null || searchBtn === void 0 ? void 0 : searchBtn.addEventListener("click", addNewPlayer);
function addNewPlayer() {
    return __awaiter(this, void 0, void 0, function () {
        var newPlayer, res, jsonResponse, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newPlayer = {
                        position: document.getElementById("select").value,
                        twoPercent: Number(document.getElementById("value1").value),
                        threePercent: Number(document.getElementById("value2").value),
                        points: Number(document.getElementById("value").value),
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch(BASE_URL, {
                            method: "POST",
                            headers: {
                                "Content-type": "application/json"
                            },
                            body: JSON.stringify(newPlayer)
                        })];
                case 2:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 3:
                    jsonResponse = _a.sent();
                    console.log("Response from API:", jsonResponse);
                    if (!res.ok) {
                        throw new Error("Error: ".concat(jsonResponse.message || "Network error"));
                    }
                    console.log("Fantasy added", jsonResponse);
                    // const allPlayers = await 
                    renderPlayer(jsonResponse);
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.log("Error occurred:", error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
var pointUl = document.getElementById("pointUl");
var shootingUl = document.getElementById("shootingUl");
var smallUl = document.getElementById("smallUl");
var powerUl = document.getElementById("powerUl");
var centerUl = document.getElementById("centerUl");
function addPlayerToBox(player) {
    return __awaiter(this, void 0, void 0, function () {
        var namePlayerLi;
        return __generator(this, function (_a) {
            switch (player.position.value) {
                case "PG":
                    namePlayerLi = document.createElement("li");
                    namePlayerLi.textContent = player.textContent;
                    pointUl === null || pointUl === void 0 ? void 0 : pointUl.append(namePlayerLi);
                    break;
                case "SG":
                    // statement 2
                    break;
                case "SF":
                    // statement N
                    break;
                case "PF":
                    // statement N
                    break;
                case "C":
                    // statement N
                    break;
            }
            return [2 /*return*/];
        });
    });
}
