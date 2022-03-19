/* Navigation Page */

/* Google Sign Out */
const signOutBtn = document.getElementById("signOutBtn");

function signOut() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}

//signOutBtn.onclick = signOut();

/* Favourite route */
function addRating(obj) {
    $('li').each(function(index) {
        $(this).toggleClass('selected');
        $('#rating').val((index + 1));
        if (index == $("li").index(obj)) {
            return false;
        }
    });
}

$("#fav").on('click',function() {
    addRating(this);
});

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
const spanAbout = document.getElementsByClassName("closeAboutModalWindow")[0];

// When the user clicks the button, open the modal
aboutBtn.onclick = function() {
    aboutModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanAbout.onclick = function() {
    aboutModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == aboutModal) {
        aboutModal.style.display = "none";
    }
}