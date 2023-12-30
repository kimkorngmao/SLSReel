const categoriesBtn = document.getElementById("categories-btn");
const subMenuList = document.getElementById("sub-menu-list");
if(categoriesBtn){
    categoriesBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        subMenuList.classList.toggle("active");
    })
}

const menuBtn = document.getElementById("menu-btn");
const navTopMiddle = document.getElementById('nav-top-bar-middle');

if(menuBtn && navTopMiddle){
    menuBtn.addEventListener('click',()=>{
        navTopMiddle.classList.toggle("active");
    })
}

document.addEventListener("click", function (e) {
    if(subMenuList){
        if(!subMenuList.contains(e.target) && !categoriesBtn.contains(e.target)) {
            subMenuList.classList.remove("active");
        }
    }

    if(navTopMiddle){
        if(!navTopMiddle.contains(e.target) && !menuBtn.contains(e.target)) {
            navTopMiddle.classList.remove('active');
        }
    }
});

function openSearchPanel(){
    const searchPanel = document.getElementById("search-panel");
    searchPanel.classList.add("active");
}

function closeSearchPanel(){
    const searchPanel = document.getElementById("search-panel");
    searchPanel.classList.remove("active");
}

function showSearchClearBtn(){
    const searchInputValue = document.getElementById("search-input").value;
    const searchClearBtn = document.getElementById("search-clear-btn");
    if(searchInputValue.length > 0){
        searchClearBtn.classList.add("active");
    }else{
        searchClearBtn.classList.remove("active");
    }
}

function clearSearchInput(){
    document.getElementById("search-input").value = "";
}
