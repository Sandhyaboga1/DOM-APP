function switchOn(){
    document.getElementById("bulbImg").src="https://res.cloudinary.com/dcizd1l0f/image/upload/v1762448721/e9392d927e7f58b8f020148257539f21_pplp1s.jpg";
    document.getElementById("catImg") .src="https://res.cloudinary.com/diaut5dvo/image/upload/v1766322648/cat_b7fw8u.jpg";

    
    document.getElementById("switchStatus") .textContent = "Switched ON";
    document.getElementById("onSwitch") .style.backgroundColor = "rgba(30, 238, 51, 1)";
    document.getElementById("offSwitch") .style.backgroundColor = "#e0d4d4ff";
   


}

function switchOff(){
    document.getElementById("bulbImg").src="https://res.cloudinary.com/dcizd1l0f/image/upload/v1762449438/realistic-light-bulb-turned-off-light-in-loft-style-vector_meod5r.jpg";
    document.getElementById("catImg") .src="https://res.cloudinary.com/diaut5dvo/image/upload/v1766322953/cat-off_rdqxiu.webp";

    
    document.getElementById("switchStatus") .textContent = "Switched OFF";
    document.getElementById("onSwitch") .style.background = "rgba(218, 212, 212, 1)";
    document.getElementById("offSwitch") .style.background = "rgba(219, 40, 34, 1)";


}
