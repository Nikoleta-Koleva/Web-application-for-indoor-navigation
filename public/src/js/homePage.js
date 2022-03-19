/* Google Sign In */
function onSignIn(googleUser) {
    /* Get User Details */
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const profile = googleUser.getBasicProfile();
    name.text(profile.getName());
    email.text(profile.getEmail());

    /* Display Google Sign in data and Sign out button */
    const data = document.getElementById("data");
    const signOut = document.getElementById("signOutBtn");
    data.style.visibility = "visible";
    signOut.style.visibility = "visible";

    /* Hide Guest Text and Back button */
    const guestText = document.getElementById("guest");
    const backBtn = document.getElementById("backBtn");
    guestText.style.visibility = "hidden";
    backBtn.style.visibility = "hidden";
}

const signInBtn = document.getElementsByClassName("signin2");
//signInBtn.onclick = onSignIn(googleUser);