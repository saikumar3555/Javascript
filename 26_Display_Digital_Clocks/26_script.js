// India Clock
function indiaClock() {
    var  today = new Date();
    var options = {timeZone : 'Asia/Kolkata'};
    var  indiaDate = today.toLocaleDateString('en-US',options);
    var  indiaTime = today.toLocaleTimeString('en-US',options);
    document.querySelector('#india-date').textContent = indiaDate;
    document.querySelector('#india-time').textContent = indiaTime;
}
setInterval(indiaClock,1000);

// USA Clock
function usaClock() {
    var  today = new Date();
    var options = {timeZone : 'America/New_York'};
    var  usaDate = today.toLocaleDateString('en-US',options);
    var  usaTime = today.toLocaleTimeString('en-US',options);
    document.querySelector('#usa-date').textContent = usaDate;
    document.querySelector('#usa-time').textContent = usaTime;
}
setInterval(usaClock,1000);

// China Clock
function chinaClock() {
    var  today = new Date();
    var options = {timeZone : 'Asia/Shanghai'};
    var  chinaDate = today.toLocaleDateString('en-US',options);
    var  chinaTime = today.toLocaleTimeString('en-US',options);
    document.querySelector('#china-date').textContent = chinaDate;
    document.querySelector('#china-time').textContent = chinaTime;
}
setInterval(chinaClock,1000);