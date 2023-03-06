var missions = [];

const addMission = () => {
    var missionContent = document.getElementById("mission").value;
    var deadlineDate = document.getElementById("date").value;
    var deadlineTime = document.getElementById("time").value;

    var mission = new Object;
    mission.content = missionContent;
    mission.date = deadlineDate;
    mission.time = deadlineTime;
    mission.id = Date.now();

    missions.push(mission);
    printMissions();
    document.getElementById("inputForm").reset();
    localStorage.setItem("oldMissions", JSON.stringify(missions));
};

const printMissions = () => {
    var result = '';
    for(let index=missions.length-1; index>=0; index--){
        result += `
        <div class="note d-flex flex-column px-3 pt-4 pb-2">
            <i class="bi bi-x-square-fill align-self-end mx-3 removeButton" onclick="eraseNote(${missions[index].id})"></i>
            <div class="noteContent">${missions[index].content}</div>
            <div class="align-self-start mt-auto">${missions[index].date}</div>
            <div class="justify-content-end align-self-start">${missions[index].time}</div>
        </div>
        `
    };
    document.getElementById("notesArea").innerHTML = result;
};

const eraseNote = (id) => {
    missions = missions.filter((item)=>item.id != id);
    localStorage.setItem("oldMissions", JSON.stringify(missions));
    printMissions();
};

const retrieveData = () => {
    var history = JSON.parse(localStorage.getItem("oldMissions"));
    if (history) {
        missions = history;
        printMissions();
    }
};

retrieveData();