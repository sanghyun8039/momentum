
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")
// const link = document.querySelector("a");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,savedUserName);
    paintGreetings()
}

function paintGreetings(){
    const userName =localStorage.getItem(USERNAME_KEY)
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}

function handleLinkClick(event){
    event.preventDefault();
    console.dir(event);
}
// link.addEventListener("click",handleLinkClick)

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null)
{
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else
{
    paintGreetings(savedUserName)
}


