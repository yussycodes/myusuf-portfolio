let mobileMenuList = document.getElementById("menuLink");
let openMobileMenuButton = document.getElementById("openMobileMenu");
let closeMobileButton = document.getElementById("closeMobileMenu");

openMobileMenuButton.addEventListener('click', function(){
     openMobileMenuButton.style.display = "none"
     mobileMenuList.style.display = "flex"
     closeMobileButton.style.display = "block"
 })

closeMobileButton.addEventListener('click',function(){
    openMobileMenuButton.style.display = "block"
     mobileMenuList.style.display = "none"
     closeMobileButton.style.display = "none"
    });

    // function showTab(tabName){
    //     const tabs = document.querySelectorAll('.tab-content')
    //     tabs.forEach(tab=>{
    //         tab.classList.remove('active-tab')
    //     })
    //     const selectedTabs = document.getElementById(tabName)
    //     selectedTabs.classList.add('active-tab')
    // }
