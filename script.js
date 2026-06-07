function scrollToStory(){
    document.getElementById("story").scrollIntoView({
        behavior:"smooth"
    });
}

const startDate = new Date("2026-04-24");

function updateCounter(){

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff/(1000*60*60*24));

    const years = Math.floor(days/365);
    const months = Math.floor((days%365)/30);
    const remainingDays = (days%365)%30;

    document.getElementById("loveCounter").innerHTML =
    `${years} Years ❤️ ${months} Months ❤️ ${remainingDays} Days`;
}

updateCounter();

setInterval(updateCounter,1000);