let home_cnt = document.getElementById("home_score");
let guest_cnt = document.getElementById("guest_score");
let reset_btn = document.getElementById("reset_btn");

// to also display who is leading curretly
let home_lead = document.getElementById("home_lead");
let guest_lead = document.getElementById("guest_lead");

// this part is to see which button is pressed & for who
const home_signal = document.getElementById("home_group");
const guest_signal = document.getElementById("guest_group");
// now for home i have 3 buttons 


function check_lead(){
    home_lead.textContent = "";
    guest_lead.textContent = "";

    let home_point_diff = home_display_cnt;
    let guest_point_diff = guest_display_cnt;

    let point_diff = Math.abs(home_point_diff - guest_point_diff);

    if(home_display_cnt > guest_display_cnt){
        home_lead.textContent = "Home is leading by " + point_diff + " points";
        guest_lead.textContent = "Guest is behind by " + point_diff + " points";

    }else if(home_display_cnt === guest_display_cnt){
        home_lead.textContent = "Draw";
        guest_lead.textContent = "Draw";

    }else{
        guest_lead.textContent = "Guest is leading by " + point_diff + " points";
        home_lead.textContent = "Home is behind by " + point_diff + " points";
    }
}


let home_display_cnt = 0;
let guest_display_cnt = 0;
// first identify which button is pressed & based on that update the value
/* 
    instead of event listenr for each btn
    add event listener to parent div & use event delegation to identift
    which is added keep value="1" or thing in html
*/
home_signal.addEventListener('click', (event) => {
    // console.log("Home button was clicked");
    let home_temp_cnt = Number(event.target.textContent);
    home_display_cnt += home_temp_cnt;
    home_cnt.textContent = home_display_cnt;
    home_temp_cnt = 0;
    // console.log(event.target);
    check_lead();
})


// and for guest i have 3 buttons
guest_signal.addEventListener('click', (event) =>{
    let guest_temp_cnt = Number(event.target.textContent);
    guest_display_cnt += guest_temp_cnt;
    guest_cnt.textContent = guest_display_cnt;
    guest_temp_cnt = 0;
    check_lead();
})


reset_btn.addEventListener('click', () =>{
    // console.log("reset button is clicked");
    home_cnt.textContent = 0;
    home_display_cnt = 0;

    guest_cnt.textContent = 0;
    guest_display_cnt = 0;
    check_lead();
})