const formPopup = document.querySelector(".form-popup");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");
// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        // formPopup.classListlink.id === 'signup-link' ? 'add' : 'remove';
        formPopup.classList.toggle("show-signup")
    });
});