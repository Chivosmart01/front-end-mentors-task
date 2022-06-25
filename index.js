const toggleButton = document.getElementById("toggle-button")
const sideBar = document.querySelector(".side-bar-nav");
const backdrop = document.querySelector(".backdrop");
const removeSideBarElement = document.getElementById("remove-sidebar-btn");


//add Sidebar

function addSideBar() {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';
  sideBar.classList.add("open");
  backdrop.style.display = "block";
  setTimeout(function() {
    backdrop.classList.add("open");
  }, 10);}
  
//remove Sidebar
function removeSideBar(){
  sideBar.classList.remove("open")
  backdrop.style.display = "none";
  setTimeout(function() {
    backdrop.classList.remove("open");
  }, 10);
}



//eventListeners
toggleButton.addEventListener("click", addSideBar)
removeSideBarElement.addEventListener("click", removeSideBar )
