let cal = document.querySelector('#calendar');

$(document).ready(function() { $('#calendar').fullCalendar({ 
    defaultView: 'listWeek',
    googleCalendarApiKey: 'AIzaSyBsosKuN91ELrOaJ2PpIxSmSYHcrYSllhE', 
    events: { googleCalendarId: 'cornell.edu_ugjtscehl3thqdg9vh8eg89ulk@group.calendar.google.com' }, 
    eventRender: function( evt, elem ) { if (evt.location) elem.find(".fc-title").append("<span class='event-location'>" + evt.location + "</span>"); } }); 
});

window.onload = function() { 
    let calBox = ((document.getElementsByClassName("fc-view-container"))[0])
    if ($('.fc-view-container').has('.fc-list-empty')) {
        let info = document.createElement("h3");
        let text = document.createTextNode('There are no events this week.');

        console.log('no events');
        calBox.style.display = 'none';

        info.appendChild(text);
        cal.appendChild(info);
        info.classList.add('text-center');
        info.classList.add('display-3');
        info.style.marginTop = '2em';
    } else {
        console.log('YES EVENTS');  
        calBox.style.display = 'block'; 
    }
}

// documentation link : https://developers.google.com/calendar/v3/reference/events/list?apix_params=%7B%22calendarId%22%3A%22cornell.edu_uvd5bb84i557fp4mfqa1gs6ta4%40group.calendar.google.com%22%7D#try-it
// let apiKey = 'AIzaSyDTDka1KSTFXGPykFu5mAsfBhxUPTI80lc';
// let clientId = '283607811610-ut28mvjiu8cttad2k2hrak214vbg23eq.apps.googleusercontent.com';
// let eventCal = document.querySelector('#eventCal');

// const req = new XMLHttpRequest();
// req.open('GET', `https://www.googleapis.com/calendar/v3/calendars/${calId}/events`);
// req.send();

// let calId = 'cornell.edu_uvd5bb84i557fp4mfqa1gs6ta4@group.calendar.google.com';
// let url = `https://www.googleapis.com/calendar/v3/calendars/${calId}/events`


// function httpGet(url) {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open( "GET", url, false ); // false for synchronous request
//     xmlHttp.send( null );
//     return xmlHttp.responseText;
// }

// console.log(httpGet(url));

// var clientId = '283607811610-ut28mvjiu8cttad2k2hrak214vbg23eq.apps.googleusercontent.com'; 
// var apiKey = 'AIzaSyDTDka1KSTFXGPykFu5mAsfBhxUPTI80lc'; 
// var userEmail = "cornell.edu_uvd5bb84i557fp4mfqa1gs6ta4@group.calendar.google.com"; 
// var userTimeZone = "Los_Angeles"; 
// var maxRows = 10; 
// var scopes = 'https://www.googleapis.com/auth/calendar';
    
// function padNum(num) {
//     if (num <= 9) { return "0" + num;}
//     return num;
// }

// function AmPm(num) {
//     if (num <= 12) { return "am " + num; }
//     return "pm " + padNum(num - 12);
// }

// function monthString(num) {
//     if (num === "01") { return "JAN"; } 
//     else if (num === "02") { return "FEB"; } 
//     else if (num === "03") { return "MAR"; } 
//     else if (num === "04") { return "APR"; } 
//     else if (num === "05") { return "MAJ"; } 
//     else if (num === "06") { return "JUN"; } 
//     else if (num === "07") { return "JUL"; } 
//     else if (num === "08") { return "AUG"; } 
//     else if (num === "09") { return "SEP"; } 
//     else if (num === "10") { return "OCT"; } 
//     else if (num === "11") { return "NOV"; } 
//     else if (num === "12") { return "DEC"; }
// }

// function dayString(num){
//     if (num == "1") { return "mon" }
//     else if (num == "2") { return "tue" }
//     else if (num == "3") { return "wed" }
//     else if (num == "4") { return "thu" }
//     else if (num == "5") { return "fri" }
//     else if (num == "6") { return "sat" }
//     else if (num == "0") { return "sun" }
// }

// function handleClientLoad() {
//     gapi.client.setApiKey(apiKey);
//     checkAuth();
// }

// function checkAuth() {
//     gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, handleAuthResult);
// }

// function handleAuthResult(authResult) {
//     if (authResult) { makeApiCall(); }
// }

// function makeApiCall() {
//     var today = new Date(); 
//     gapi.client.load('calendar', 'v3', function () {
//         var request = gapi.client.calendar.events.list({
//             'calendarId' : userEmail,
//             'timeZone' : userTimeZone, 
//             'singleEvents': true, 
//             'timeMin': today.toISOString(), 
//             'maxResults': maxRows, 
//             'orderBy': 'startTime'});
//     request.execute(function (resp) {
//             for (var i = 0; i < resp.items.length; i++) {
//                 var li = document.createElement('li');
//                 var item = resp.items[i];
//                 var classes = [];
//                 var allDay = item.start.date? true : false;
//                 var startDT = allDay ? item.start.date : item.start.dateTime;
//                 var dateTime = startDT.split("T"); //split date from time
//                 var date = dateTime[0].split("-"); //split yyyy mm dd
//                 var startYear = date[0];
//                 var startMonth = monthString(date[1]);
//                 var startDay = date[2];
//                 var startDateISO = new Date(startMonth + " " + startDay + ", " + startYear + " 00:00:00");
//                 var startDayWeek = dayString(startDateISO.getDay());
//                 if( allDay == true){ 
//                     var str = [
//                     '<font size="4" face="courier">',
//                     startDayWeek, ' ',
//                     startMonth, ' ',
//                     startDay, ' ',
//                     startYear, '</font><font size="5" face="courier"> @ ', item.summary , '</font><br><br>'
//                     ];
//                 }
//                 else{
//                     var time = dateTime[1].split(":"); //split hh ss etc...
//                     var startHour = AmPm(time[0]);
//                     var startMin = time[1];
//                     var str = [ 
//                         '<font size="4" face="courier">',
//                         startDayWeek, ' ',
//                         startMonth, ' ',
//                         startDay, ' ',
//                         startYear, ' - ',
//                         startHour, ':', startMin, '</font><font size="5" face="courier"> @ ', item.summary , '</font><br><br>'
//                         ];
//                 }
//                 li.innerHTML = str.join('');
//                 li.setAttribute('class', classes.join(' '));
//                 document.getElementById('events').appendChild(li);
//             }
//         document.getElementById('eventsCal').innerHTML = "updated " + today;
//         });
//     });
// }
// </script>
// <script src='https://apis.google.com/js/client.js?onload=handleClientLoad'></script>
