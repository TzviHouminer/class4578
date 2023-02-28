var missions = [];

const addMission = () => {
    var missionContent = document.getElementById("mission").value;
    var deadlineDate = document.getElementById("date").value;
    var deadlineTime = document.getElementById("time").value;

    var mission = new Object;
    mission.content = missionContent;
    mission.date = deadlineDate;
    mission.time = deadlineTime;

    missions.push(mission);
    printMissions();
    document.getElementById("inputForm").reset();
    localStorage.setItem("oldMissions", JSON.stringify(missions));
};

const printMissions = () => {
    var result = '';
    missions.map((mission) => {
        result += `
        <div class="note d-flex flex-column px-3 pt-4 pb-2" onmouseover="">
            <button id="removeButton"><i class="bi bi-x-square-fill align-self-end mx-3"></i></button>
            <div class="noteContent">${mission.content}</div>
            <div class="align-self-start mt-auto">${mission.date}</div>
            <div class="justify-content-end align-self-start">${mission.time}</div>
        </div>
        `
    });
    document.getElementById("notesArea").innerHTML = result;
};

const retrieveData = () => {
    var history = JSON.parse(localStorage.getItem("oldMissions"));
    if (history) {
        missions = history;
        printMissions();
    }
};

retrieveData();