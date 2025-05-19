
  const chaty = document.getElementById('chaty')
  const cancel = document.getElementById('cancel')
  const line = document.getElementById('line')
  const call = document.getElementById('call')

  chaty.addEventListener('click', () =>{

    chaty.style.opacity = 0; 
    cancel.style.opacity = 1; 
    call.style.opacity = 1; 
    line.style.opacity = 1; 

    cancel.style.zIndex = 2; 
    chaty.style.zIndex = 1; 
    // call.style.zIndex = 2; 
    // line.style.zIndex = 2; 

    cancel.style.transform = "rotate(0deg)"; 
    chaty.style.transform = "rotate(360deg)"; 
    
    call.style.bottom= "140px"; 
    line.style.bottom= "80px"; 
    
  });
  cancel.addEventListener('click', () =>{

    chaty.style.opacity = 1; 
    cancel.style.opacity = 0; 
    call.style.opacity = 0.3; 
    line.style.opacity = 0.3;

    cancel.style.zIndex = 1; 
    chaty.style.zIndex = 2; 
    
    chaty.style.transform = "rotate(0deg)"; 
    cancel.style.transform = "rotate(-360deg)"; 

    call.style.bottom= "21px"; 
    line.style.bottom= "21px"; 
  });
  