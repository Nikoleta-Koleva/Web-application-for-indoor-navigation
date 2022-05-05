/* Menu */
function openSlideMenu() {
    document.getElementById('side-menu').style.width = '250px';
}

function closeSlideMenu() {
    document.getElementById('side-menu').style.width = '0px';
}

// Get the modal
const aboutModal = document.getElementById("aboutModal");
const aboutBtn = document.getElementById("aboutButton");

// Get the <span> element that closes the modal
const spanAbout = document.getElementById("closeAboutModalWindow");

// When the user clicks the button, open the modal
aboutBtn.onclick = function () {
    aboutModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanAbout.onclick = function () {
    aboutModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == aboutModal) {
        aboutModal.style.display = "none";
    }
}

/* Navigation */
const destination = document.querySelector("#destination");
const firstFloorButton = document.getElementById("firstFloorButton");
const startButton = document.querySelector("#startButton");
const restartButton = document.querySelector("#restartButton");
const instructionsTextArea = document.querySelector("#instructions");
const floorPlan = document.getElementById("floorPlan");
const startPoint = document.getElementById("startPoint");

document.querySelectorAll('.required').forEach(item => {
    item.addEventListener('change', function () {
        if (startPoint.value !== '' && destination.value !== '') {
            startButton.style.display = "block";
        }
    })
})

function staffRoomFirstScenario() {
    instructionsTextArea.innerHTML = "Follow the path to Room 0.10";
    floorPlan.setAttribute('src', "/src/images/groundFloorNavigation.png");
    restartButton.style.display = "block";
}

function goToFirstFloor() {
    instructionsTextArea.innerHTML = "Follow the path to Room 1.41";
    floorPlan.setAttribute('src', "/src/images/firstFloorNavigation.png");
    firstFloorButton.style.display = "none";
    restartButton.style.display = "block";
}

function staffRoomSecondScenario() {
    instructionsTextArea.innerHTML = "Follow the path to the first floor";
    floorPlan.setAttribute('src', "/src/images/groundFloorInstructionsToFirst.png");
}

function startNavigation() {
    startPoint.style.display = "none";
    startButton.style.display = "none";
    destination.style.display = "none";
    instructionsTextArea.readOnly = true;

    if (destination.value === "staffOffice0.10") {
        staffRoomFirstScenario();
        restartButton.style.display = "block";
    }
    if (destination.value === "staffOffice1.41") {
        staffRoomSecondScenario();
        firstFloorButton.style.display = "block";
    }
    instructionsTextArea.style.display = "block";
}

//Restarts the Route
function restartScenario() {
    floorPlan.setAttribute('src', "/src/images/groundFloor.png");
    instructionsTextArea.style.display = "none";
    destination.style.display = "block";
    restartButton.style.display = "none";
    startPoint.style.display = "block";
    startButton.style.display = "block";
}

function init() {
    startButton.addEventListener('click', startNavigation);
    firstFloorButton.addEventListener('click', goToFirstFloor);
    restartButton.addEventListener('click', restartScenario);
}

window.addEventListener("load", init);