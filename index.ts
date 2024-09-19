//לתת מספר ליד האינפוטים
const select = document.getElementById("select")
const value1 = document.getElementById("value")!;
const input1 = document.getElementById("pi_input")!;
value1.textContent = (input1 as HTMLInputElement).value;
input1.addEventListener("input", (event) => {
    const target = event.target as HTMLInputElement;
    value1.textContent = target.value;
});

const value2 = document.querySelector("#value1")!;
const input2 = document.querySelector("#pi_input1")!;
value2.textContent = (input2 as HTMLInputElement).value;
input2.addEventListener("input", (event) => {
    const target = event.target as HTMLInputElement;
    value2.textContent = target.value;
});

const value3 = document.querySelector("#value2")!;
const input3 = document.querySelector("#pi_input2")!;
value3.textContent = (input3 as HTMLInputElement).value;
input3.addEventListener("input", (event) => {
    const target = event.target as HTMLInputElement;
    value3.textContent = target.value;
});


interface Player{
    position: string;
    twoPercent: Number;
    threePercent: Number;
    points: Number;
}

interface PlayerRender{
    playerName: string;
    position: string;
    twoPercent: Number;
    threePercent: Number;
    points: Number;
}

const BASE_URL: string = "https://nbaserver-q21u.onrender.com/api/filter/"; 

const tbody = document.getElementById("tbody")!


async function renderPlayer(filterPlayer: PlayerRender[] = []): Promise<void>{
    tbody.textContent = "";
    filterPlayer.forEach(player =>{
        const tr = document.createElement("tr");
        //מייצר תא לשם השחקן
        const nameTd = document.createElement("td");
        nameTd.textContent = player.playerName;
        tr.append(nameTd);
        //מייצר תא לעמדה
        const positionTd = document.createElement("td");
        positionTd.textContent = player.position;
        tr.append(positionTd);

        //מייצר תא לנקודות
        const pointsTd = document.createElement("td");
        pointsTd.textContent =player.points.toString();
        tr.append(pointsTd);
        //מייצר תא ל2נקודות
        const twoPercentTd = document.createElement("td");
        twoPercentTd.textContent =player.twoPercent.toString();
        tr.append(twoPercentTd);
        //מייצר תא ל3נקודות
        const threePercentTd = document.createElement("td");
        threePercentTd.textContent =player.threePercent.toString();
        tr.append(threePercentTd);
        //מייצר תא לפעולות
        const actionsTd = document.createElement("td");
        const addPlayerBtn = document.createElement("button");
        addPlayerBtn.textContent = "Add Player";
        addPlayerBtn.onclick = () =>{
            addPlayerToBox(player)
        };
        actionsTd.append(addPlayerBtn)
        tr.append(actionsTd)
        tbody.append(tr);
    })
}

const searchBtn = document.getElementById("searchBtn");
searchBtn?.addEventListener("click", addNewPlayer)

async function addNewPlayer(): Promise<void> {
    const newPlayer: Player = {

        position: (document.getElementById("select") as HTMLSelectElement).value,
        twoPercent: Number((document.getElementById("value1") as HTMLInputElement).value),
        threePercent: Number((document.getElementById("value2") as HTMLInputElement).value),
        points: Number((document.getElementById("value") as HTMLInputElement).value),
    }
    try {
        const res = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newPlayer)
        });
          

        const jsonResponse = await res.json();
        console.log("Response from API:", jsonResponse);
        
        if (!res.ok) {
            throw new Error(`Error: ${jsonResponse.message || "Network error"}`);
        }
        console.log("Fantasy added", jsonResponse);
        // const allPlayers = await 
        renderPlayer(jsonResponse)
    } catch (error) {
        console.log("Error occurred:", error);
    }
}
const pointUl = document.getElementById("pointUl")
const shootingUl = document.getElementById("shootingUl")
const smallUl = document.getElementById("smallUl")
const powerUl = document.getElementById("powerUl")
const centerUl = document.getElementById("centerUl")

async function addPlayerToBox(player:any) {
    switch (player.position.value) {
        case "PG":
            const namePlayerLi = document.createElement("li")
            namePlayerLi.textContent = player.textContent
            pointUl?.append(namePlayerLi)
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

}}

