// objects
const timelyWindow = document.querySelector(".timelyWindow")
const timelyReport = document.querySelector(".timelyReport")
const timelyHistory = document.querySelector(".timelyHistory")
const timelySettings = document.querySelector(".timelySettings")
const settingsHeader = document.querySelector(".settingsHeader")

const timelyExit = document.querySelector(".timelyExit")
const timelyReportExit = document.querySelector(".timelyReportExit")
const timelyHistoryExit = document.querySelector(".timelyHistoryExit")
const timelySettingsExit = document.querySelector(".timelySettingsExit")

const timelyIcon = document.querySelector(".timely");
const timelyReportIcon = document.querySelector(".timelyReportIcon")
const timelyHistoryIcon = document.querySelector(".timelyHistoryIcon")
const timelySettingsIcon = document.querySelector(".timelySettingsIcon")

const counters = document.querySelectorAll(".counter")

let tubs = document.getElementById("timeUntilBreak");
let bts = document.getElementById("breakTime");
let TUBSoutput = document.querySelector(".timeUntilBreakValue");
let BToutput = document.querySelector(".breakTimeValue");

const breakNotification = document.querySelector(".breakNotification")
const speaker = document.querySelector(".fa-volume-high")
const code = document.querySelector(".codeText")


// functions
let toggleInvisible = (elem) => {
    elem.classList.toggle("invisible")
}

tubs.oninput = function() {
    TUBSoutput.innerHTML = this.value;
}

bts.oninput = function() {
    BToutput.innerHTML = this.value;
}

function onDragWindow({movementX, movementY}){
    let getStyle = window.getComputedStyle(timelyWindow);
    let leftVal = parseInt(getStyle.left);
    let topVal = parseInt(getStyle.top);
    timelyWindow.style.left = `${leftVal + movementX}px`;
    timelyWindow.style.top = `${topVal + movementY}px`;
}

function onDragReport({movementX, movementY}){
    let getStyle = window.getComputedStyle(timelyReport);
    let leftVal = parseInt(getStyle.left);
    let topVal = parseInt(getStyle.top);
    timelyReport.style.left = `${leftVal + movementX}px`;
    timelyReport.style.top = `${topVal + movementY}px`;
}

function onDragHistory({movementX, movementY}){
    let getStyle = window.getComputedStyle(timelyHistory);
    let leftVal = parseInt(getStyle.left);
    let topVal = parseInt(getStyle.top);
    timelyHistory.style.left = `${leftVal + movementX}px`;
    timelyHistory.style.top = `${topVal + movementY}px`;
}

function onDragSettings({movementX, movementY}){
    let getStyle = window.getComputedStyle(timelySettings);
    let leftVal = parseInt(getStyle.left);
    let topVal = parseInt(getStyle.top);
    timelySettings.style.left = `${leftVal + movementX}px`;
    timelySettings.style.top = `${topVal + movementY}px`;
}

function setTime()
{
    ++totalSeconds;
    let seconds = pad(totalSeconds%60);
    let minutes = pad(parseInt(totalSeconds/60));
    let hours = 0;

    counters.forEach(element => {
        element.innerHTML = hours + ":" + minutes + ":" + seconds
    });
}

function pad(val)
{
    var valString = val + "";
    if(valString.length < 2)
    {
        return "0" + valString;
    }
    else
    {
        return valString;
    }
}


// eventListneners
timelyIcon.addEventListener("click", () => {
    let el = document.querySelector(".timelyWindow")
    toggleInvisible(el)
})

timelyReportIcon.addEventListener("click", () => {
    let el = document.querySelector(".timelyReport")
    toggleInvisible(el)
    el = document.querySelector(".timelyWindow")
    toggleInvisible(el)
})

timelyHistoryIcon.addEventListener("click", () => {
    let el = document.querySelector(".timelyHistory")
    toggleInvisible(el)
    el = document.querySelector(".timelyWindow")
    toggleInvisible(el)
})

timelySettingsIcon.addEventListener("click", () => {
    let el = document.querySelector(".timelySettings")
    toggleInvisible(el)
    el = document.querySelector(".timelyWindow")
    toggleInvisible(el)
})

timelyExit.addEventListener("click", () => {
    let el = document.querySelector(".timelyWindow")
    toggleInvisible(el)
})

timelyReportExit.addEventListener("click", () => {
    let el = document.querySelector(".timelyReport")
    toggleInvisible(el)
    el = document.querySelector(".timelyWindow")
    toggleInvisible(el)
})

timelyHistoryExit.addEventListener("click", () => {
    let el = document.querySelector(".timelyHistory")
    toggleInvisible(el)
    el = document.querySelector(".timelyWindow")
    toggleInvisible(el)
})

timelySettingsExit.addEventListener("click", () => {
    let el = document.querySelector(".timelySettings")
    toggleInvisible(el)
    el = document.querySelector(".timelyWindow")
    toggleInvisible(el)
})

breakNotification.addEventListener("click", () => {
    breakNotification.style.transition = "2s"
    breakNotification.style.transform = "translateX(500px)"
})

speaker.addEventListener("click", () => {
    speaker.classList.toggle("fa-beat")
    
    setTimeout(() => {
        code.innerHTML = `Console.WriteLine("Hello World")`
        code.classList.remove("blink")

    }, 3000)


})

timelyWindow.addEventListener("mousedown", ()=>{
    timelyWindow.classList.add("active");
    timelyWindow.addEventListener("mousemove", onDragWindow);
});

timelyReport.addEventListener("mousedown", ()=>{
    timelyReport.classList.add("active");
    timelyReport.addEventListener("mousemove", onDragReport);
});

timelyHistory.addEventListener("mousedown", ()=>{
    timelyHistory.classList.add("active");
    timelyHistory.addEventListener("mousemove", onDragHistory);
});

settingsHeader.addEventListener("mousedown", ()=>{
    settingsHeader.classList.add("active");
    settingsHeader.addEventListener("mousemove", onDragSettings);
});

document.addEventListener("mouseup", ()=>{
    timelyWindow.classList.remove("active");
    timelyWindow.removeEventListener("mousemove", onDragWindow);
    timelyReport.classList.remove("active");
    timelyReport.removeEventListener("mousemove", onDragReport);
    timelyHistory.classList.remove("active");
    timelyHistory.removeEventListener("mousemove", onDragHistory);
    settingsHeader.classList.remove("active");
    settingsHeader.removeEventListener("mousemove", onDragSettings);
    taskManager.classList.remove("active");
    taskManager.removeEventListener("mousemove", onDragtaskManager);
});

// other
let totalSeconds = 0;
setInterval(setTime, 1000);


let distance = 180000
let changer = true

let breakTimeCounter = () => {
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.querySelector(".break .timeCount").innerHTML =
    + minutes + "m " + seconds + "s ";
    
    if (distance < 0 && changer) {
        document.querySelector(".break .timeContent").innerHTML = "Przerwa skończy się za:";
        document.querySelector(".break .timeCount").innerHTML = "15m 0s";
        breakNotification.style.transition = "2s"
        breakNotification.style.transform = "translateX(0px)"
        distance = 180000
        let tico = document.querySelector(".tico")
        tico.classList.remove("fa-clock")
        tico.classList.add("fa-hourglass")
        tico.classList.add("fa-spin")
        changer = !changer
    } 
    else if (distance < 0 && !changer){
        document.querySelector(".break .timeContent").innerHTML = "Przerwa za:";
        document.querySelector(".break .timeCount").innerHTML = "3m 0s";
        distance = 180000
        let tico = document.querySelector(".tico")
        tico.classList.add("fa-clock")
        tico.classList.remove("fa-hourglass")
        tico.classList.remove("fa-spin")
        changer = !changer
    }
    distance-=1000;
}

setInterval(breakTimeCounter, 1000);

// TASK MANAGER

const taskManager = document.querySelector(".taskManager")
const taskManagerIcon = document.querySelector(".tasks")
const taskManagerExit = document.querySelector(".taskManagerExit")
const removeMember = document.querySelectorAll(".removeMember")
const newMember = document.querySelector(".newMember")
const addMember = document.querySelector(".fa-plus")
const memberCreator = document.querySelector(".memberCreator")
const memberCreatorAdd = document.querySelector(".memberCreatorAdd")
const footer = document.querySelector("footer")
const membersHeader = document.querySelector(".membersHeader")
const tasksHeader = document.querySelector(".tasksHeader")
const taskManagerMembers = document.querySelector(".taskManagerMembers")
const taskManagerTasks = document.querySelector(".taskManagerTasks")
const taskPriority = document.querySelectorAll(".taskPriority")
const taskStatus = document.querySelectorAll(".taskStatus")
const removeTask = document.querySelectorAll(".removeTask")
const addTask = document.querySelector(".newTaskBtn")
const taskCreator = document.querySelector(".taskCreator")
const taskCreatorAdd = document.querySelector(".taskCreatorAdd")

function onDragtaskManager({movementX, movementY}){
    let getStyle = window.getComputedStyle(taskManager);
    let leftVal = parseInt(getStyle.left);
    let topVal = parseInt(getStyle.top);
    taskManager.style.left = `${leftVal + movementX}px`;
    taskManager.style.top = `${topVal + movementY}px`;
}

taskManagerIcon.addEventListener("click", () => {
    let el = document.querySelector(".taskManager")
    toggleInvisible(el)
})

taskManagerExit.addEventListener("click", () => {
    let el = document.querySelector(".taskManager")
    toggleInvisible(el)
})

taskManager.addEventListener("mousedown", () =>{
    taskManager.classList.add("active");
    taskManager.addEventListener("mousemove", onDragtaskManager);
});

removeMember.forEach((el) => {
    el.addEventListener("click", (e) => {
        e.currentTarget.parentElement.remove()
    })
})

addMember.addEventListener("click", () => {
    memberCreator.style.transition = ".5s"
    memberCreator.style.transform = "translateY(0px)"
})

addTask.addEventListener("click", () => {
    taskCreator.style.transition = ".5s"
    taskCreator.style.transform = "translateY(0px)"
})

taskCreatorAdd.addEventListener("click", () => {
    taskCreator.style.transition = "1s"
    taskCreator.style.transform = "translateY(-300px)"

    let inputName = document.querySelector(".inputNameT").value
    let inputOwner = document.querySelector(".inputOwnerT").value
    let inputDate = document.querySelector(".inputDateT").value

    let task = document.createElement("div")
    task.classList.add("task")

    let exit = document.createElement("i")
    exit.classList.add("fa-solid", "fa-xmark", "removeTask")
    
    exit.addEventListener("click", (e) => {
        e.currentTarget.parentElement.remove()
    })

    task.appendChild(exit)

    let taskName = document.createElement("div")
    taskName.classList.add("taskName")
    
    let hammer = document.createElement("i")
    hammer.classList.add("fa-solid", "fa-hammer")

    taskName.appendChild(hammer)
    
    let span = document.createElement("span")
    span.innerHTML = inputName


    taskName.appendChild(span)
    task.appendChild(taskName)

    let taskOwner = document.createElement("div")
    taskOwner.classList.add("taskOwner")
    let user = document.createElement("i")
    user.classList.add("fa-regular", "fa-user")
    taskOwner.appendChild(user)

    let taskStatus = document.createElement("div")
    taskStatus.classList.add("taskStatus")
    let xmark = document.createElement("i")
    xmark.classList.add("fa-regular", "fa-circle-xmark")
    taskStatus.appendChild(xmark)

    taskStatus.addEventListener("click", (e) => {
        let statusIcon = e.currentTarget.childNodes[0].classList[1]
        if(statusIcon == "fa-circle-check"){
            e.currentTarget.childNodes[0].classList.remove("fa-circle-check")
            e.currentTarget.childNodes[0].classList.add("fa-hourglass-half")
            e.currentTarget.style.color = "#0099ff"
        }
        else if (statusIcon == "fa-hourglass-half"){
            e.currentTarget.childNodes[0].classList.remove("fa-hourglass-half")
            e.currentTarget.childNodes[0].classList.add("fa-circle-xmark")
            e.currentTarget.style.color = "#ac2626"
        } else {
            e.currentTarget.childNodes[0].classList.remove("fa-circle-xmark")
            e.currentTarget.childNodes[0].classList.add("fa-circle-check")
            e.currentTarget.style.color = "#248f24"
        }
    })

    let taskPriority = document.createElement("div")
    taskPriority.classList.add("taskPriority")
    let star = document.createElement("i")
    star.classList.add("fa-regular", "fa-star")
    taskPriority.appendChild(star)

    taskPriority.addEventListener("click", (e) => {
        e.currentTarget.childNodes[0].classList.toggle("fa-solid")
        e.currentTarget.childNodes[0].classList.toggle("fa-regular")
    })

    let taskEndDate = document.createElement("div")
    taskEndDate.classList.add("taskEndDate")
    let day = document.createElement("i")
    day.classList.add("fa-regular", "fa-calendar-days")
    taskEndDate.appendChild(day)

    taskOwner.innerHTML += " " + inputOwner
    taskEndDate.innerHTML += " " + inputDate

    task.appendChild(taskEndDate)
    task.appendChild(taskOwner)
    task.appendChild(taskStatus)
    task.appendChild(taskPriority)

    taskManagerTasks.appendChild(task)
})

memberCreatorAdd.addEventListener("click", () => {
    let inputRank = document.querySelector(".inputRank").value
    let inputName = document.querySelector(".inputName").value

    memberCreator.style.transition = "1s"
    memberCreator.style.transform = "translateY(-300px)"

    let member = document.createElement("div")
    let exit = document.createElement("i")
    let userData = document.createElement("div")
    let avatar = document.createElement("img")
    let rankNname = document.createElement("div")
    let rank = document.createElement("div")
    let name = document.createElement("div")
    
    member.classList.add("member")
    exit.classList.add("fa-solid", "fa-xmark", "removeMember")
    userData.classList.add("userData")
    avatar.classList.add("avatar")
    avatar.src = "user.png"
    rankNname.classList.add("rankNname")
    rank.classList.add("rank")
    name.classList.add("name")

    rank.innerHTML = inputRank
    name.innerHTML = inputName

    exit.addEventListener("click", (e) => {
        e.currentTarget.parentElement.remove()
    })

    member.appendChild(exit)
    member.appendChild(userData)
    userData.appendChild(avatar)
    userData.appendChild(rankNname)
    rankNname.appendChild(rank)
    rankNname.appendChild(name)
    taskManagerMembers.appendChild(member)
    
})

footer.addEventListener("click", () => {
    breakNotification.style.transition = "2s"
    breakNotification.style.transform = "translateX(0px)"
})

membersHeader.addEventListener("click", () => {
    membersHeader.classList.add("active")
    tasksHeader.classList.remove("active")
    taskManager.appendChild(taskManagerMembers)
    taskManagerTasks.remove()
    
})

tasksHeader.addEventListener("click", () => {
    tasksHeader.classList.add("active")
    membersHeader.classList.remove("active")
    taskManager.appendChild(taskManagerTasks)
    taskManagerMembers.remove()
})


taskPriority.forEach(element => {
    element.addEventListener("click", (e) => {
        e.currentTarget.childNodes[0].classList.toggle("fa-solid")
        e.currentTarget.childNodes[0].classList.toggle("fa-regular")
    })
})

taskStatus.forEach(element => {
    element.addEventListener("click", (e) => {
        let statusIcon = e.currentTarget.childNodes[0].classList[1]
        if(statusIcon == "fa-circle-check"){
            e.currentTarget.childNodes[0].classList.remove("fa-circle-check")
            e.currentTarget.childNodes[0].classList.add("fa-hourglass-half")
            e.currentTarget.style.color = "#0099ff"
        }
        else if (statusIcon == "fa-hourglass-half"){
            e.currentTarget.childNodes[0].classList.remove("fa-hourglass-half")
            e.currentTarget.childNodes[0].classList.add("fa-circle-xmark")
            e.currentTarget.style.color = "#ac2626"
        } else {
            e.currentTarget.childNodes[0].classList.remove("fa-circle-xmark")
            e.currentTarget.childNodes[0].classList.add("fa-circle-check")
            e.currentTarget.style.color = "#248f24"
        }
    })
})

removeTask.forEach((el) => {
    el.addEventListener("click", (e) => {
        e.currentTarget.parentElement.remove()
    })
})

