window.onload = () => {
    loadPortSamples();
    checkActive();
}



function showMobileMenu(e){

    var anchor = e.target.closest('div.nav-icon');
    
    //TOGGLE NAV ICON CLASS (ACTIVE)
    anchor.classList.toggle('active');
    
    //CHECK IF ACTIVE TO SHOW/HIDE BOX
    var navLinks = document.querySelector('.nav-links');
    
    if(anchor.classList.contains('active')){
        //SHOW BOX
        navLinks.style.display = "flex";
        anchor.innerHTML = '<i class="far fa-arrow-left"></i>';
    }else{
        //HIDE BOX
        navLinks.style.display = "none";
        anchor.innerHTML = '<i class="far fa-bars"></i>';
    }
}

function closeMenu(){
    var anchor = document.querySelector('.nav-icon');
    
    if(anchor.classList.contains('active')){
        anchor.classList.remove('active');
        //HIDE BOX
        var navLinks = document.querySelector('.nav-links');
        navLinks.style.display = "none";
        anchor.innerHTML = '<i class="far fa-bars"></i>';
    }
}

function removeLinkActive(){
    var allLinks = document.querySelectorAll('.nav-link');
    
    allLinks.forEach(link => {
        if(link.classList.contains('active')){
            link.classList.remove('active');
        }
    });
}


function linkHandle(e){
    
    var anchor = e.target.closest('div.nav-link');
    
    //CLOSE MENU
    closeMenu();
    //REMIVE ALL ACTIVE
    removeLinkActive();
    
    //ASSIGN NEW ACTIVE
    anchor.classList.add('active'); 
    
    //GET HREF
    var href = anchor.getAttribute('name');
    
    //SCROLL TO HREF
    var targetHref = document.querySelector(`a#${href}`);
    targetHref.scrollIntoView();
}

function openWhatsapp(){
    window.open("https://wa.me/2349077296904",'_self');
}




//PORTFOLIO SAMPLE HANDLE
function loadPortSamples(){
    
    //ASSIGN SAMPLES AS ARRAY
    var graphicArr = ['graphic1.png','graphic2.png','graphic3.png','graphic4.png','graphic5.png'];
    var socialArr = ['social1.png','social2.png','social3.png','social4.png','social5.png'];
    var mobileArr = ['mobile1.png','mobile2.png','mobile3.png','mobile4.png','mobile5.png'];

    //GET ALL SAMPLE SHOW
    var graphicShow = document.querySelector('.port-show#graphic');
    var socialShow = document.querySelector('.port-show#social');
    var mobileShow = document.querySelector('.port-show#mobile');

    //CREATE SAMPLE BOXES AND PUSH SAMPLE INTO THEM
    //THEN PUSH SAMPLE BOX INTO RESPECTIVE SHOW
    graphicArr.forEach(graphic => {
        var portBox = document.createElement('div');
        portBox.classList.add('port-box');
        portBox.setAttribute('onclick','openImage(event)');
        portBox.innerHTML = `<img src="./assets/portsample/${graphic}">`;
        
        ////////////
        graphicShow.append(portBox);
    });
    
    socialArr.forEach(show => {
        var sportBox = document.createElement('div');
        sportBox.classList.add('port-box');
        sportBox.setAttribute('onclick','openImage(event)');
        sportBox.innerHTML = `<img src="./assets/portsample/${show}">`;
        
        ////////////
        socialShow.append(sportBox);
    });
    
    mobileArr.forEach(mobile => {
        var mportBox = document.createElement('div');
        mportBox.classList.add('port-box');
        mportBox.setAttribute('onclick','openImage(event)');
        mportBox.innerHTML = `<img src="./assets/portsample/${mobile}">`;
        
        ////////////
        mobileShow.append(mportBox);
    });
}



function chooseSample(e){
    var anchor = e.target.closest('div.port');
    
    //REMOVE OLD ACTIVE
    var allPortBtn = document.querySelectorAll('.port');
    
    var btnName = 'graphic';
    
    allPortBtn.forEach(portBtn => {
        
        if(portBtn.classList.contains('active')){
            portBtn.classList.remove('active');
        }     
        
    });
    
    //ASSIGN NEW ACTIVE
    anchor.classList.add('active');
    checkActive();
}



function checkActive(){
    //GET ALL PORT BTN AND CHECK ACTIVE
    var allPortBtn = document.querySelectorAll('.port');
    
    var btnName = 'graphic';
    
    allPortBtn.forEach(portBtn => {
        
        if(portBtn.classList.contains('active')){
            btnName = portBtn.getAttribute('name');
        }     
        
    });
    
    var allPortShow = document.querySelectorAll('.port-show');
    allPortShow.forEach(portShow => {
        
        portShow.style.display = "none";
        
    });


    
    var targetShow = document.querySelector(`.port-show#${btnName}`);
    targetShow.style.display = "grid";
   
}


function openImage(e){
    var anchor = e.target.closest('div.port-box');
    
    var img = anchor.innerHTML;
    
    
    //CREATE DISPLAY BOX
    var display = document.createElement('div');
    display.classList.add('image-display');
    display.innerHTML = '<div class="display-bg"></div><div onclick="closeImage()" class="display-close center"><i class="far fa-arrow-left"></i></div><div class="image-box">'+img+'</div>';
    
    //GET TARGET
    var displayTarget = document.querySelector('.display-target');
    
    displayTarget.after(display);
}

function closeImage(){
    var displayTarget = document.querySelector('.image-display');
    
    displayTarget.remove();
    
}




function sendMsg(){
    //INITIATE VARIABLES
    var name = "";
    var number = "";
    var email = "";
    var msg = "";
    //GET INPUTS

    var allInputs = document.querySelectorAll('.form');
    
    allInputs.forEach(input => {
        if(input.id == 'name'){
            name = input.value;
        }else if(input.id == 'number'){
            number = input.value;
        }else if(input.id == 'email'){
            email = input.value;
        }else if(input.id == 'msg'){
            msg = input.value;
        }
    });
    
    var messageString = 'Hello, my name is '+name+'. \n\nHere is my number for you to save: '+number+' or my email to contact: '+email+'. \n\nBelow is my enquiry: \n\n'+msg;
    
    //CHECK IF MSG IS EMPTY OR NOT
    if(msg != "" && name != ""){
        var urlString = escape(messageString);
        var msgLink = `https://wa.me/2349077296904?text=${urlString}`;
        
        
        window.open(msgLink,'_self');
        alert('Enquiry sent successfully');
        
        allInputs.forEach(input => {
            input.value = "";
        })
        
        
    }else{
        alert('Fill in all details to send enquiry');
    }
}




