let mobileBar = document.getElementById("fa-bars")
let mobileNavigation = document.getElementById("mobile-nav-bar")
let codeSectionButton = document.getElementById("code")
let desSectionButton = document.getElementById("des")
let productDesignProjects = document.getElementById("product-design")
let codeDesignProjects = document.getElementById("front-end-dev")

mobileBar.addEventListener("click", mobileNavBar);
function mobileNavBar(){
    mobileNavigation.style.visibility = "visible"
}

codeSectionButton.addEventListener("click", switchToCodedDesigns)
function switchToCodedDesigns (){
    productDesignProjects.style.visibility = "collapse"
    codeDesignProjects.style.visibility = "visible"
    desSectionButton.style.textDecoration = "none"
    codeSectionButton.style.textDecoration = "underline"
}

desSectionButton.addEventListener("click", switchToProductDesigns)
function switchToProductDesigns (){
    codeDesignProjects.style.visibility = "collapse"
    productDesignProjects.style.visibility = "visible"
    codeSectionButton.style.textDecoration = "none"
    desSectionButton.style.textDecoration = "underline"
}