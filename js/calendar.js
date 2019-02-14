

const current_date = new Date();
const currentMonth = current_date.getMonth();
const currentYear = current_date.getFullYear();
const selectYear = document.getElementById("year");
const eventBody = document.getElementById("event_input");
const eventInput =document.getElementById('event_form');
const selectMonth = document.getElementById("month");
const eventBtn = document.getElementById("event_btn");
const eventDate = document.getElementById('event_date');
const day = document.getElementsByTagName('td');
const showEvents = document.getElementById('show_events')
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let monthYear = document.getElementById("month_year");




const showCalendar = (month, year) => {
    const  daysInMonth = (Month, Year) => {
        return 32 - new Date(Year, Month, 32).getDate();
    }
    let firstDay = (new Date(year, month)).getDay();

    let calendar = document.getElementById("calendar-body"); 

    calendar.innerHTML = "";

    monthYear.innerHTML = months[month] + " " + year;
    
    let date = 1;
    for (let i = 0; i < 6; i++) {
        let tableRow = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                tableCell = document.createElement("td");
                tableText = document.createTextNode("");
                tableCell.appendChild(tableText);
                tableRow.appendChild(tableCell);
            }
            else if (date > daysInMonth(month, year)) {
                break;
            }
            else {
                tableCell = document.createElement("td");
                tableText = document.createTextNode(date);
                if (date === current_date.getDate() && year === current_date.getFullYear() && month === current_date.getMonth()) {
                    tableCell.classList.add("todays-date");
                } 
                tableCell.appendChild(tableText);
                tableRow.appendChild(tableCell);
                date++;
            }
        }
        calendar.appendChild(tableRow);
    }
}
showCalendar(currentMonth, currentYear);

const calendarInput = () => {
	const getDayHandler = (ev) => { 
		const calday = ev.target.firstChild.data;
        const date = monthYear.firstChild.data;

        if(calday === ''){
            alert('date has passed');
        } else{
            
            eventBody.style.display = "block"
            eventDate.innerHTML =  `${calday}  ${date} `;
        }
	}	
	for(let i = 0; i< day.length; i++)	{
		day[i].addEventListener('click', getDayHandler);	
	}
}

const eventArr =[];

const getEventdata = () => {
    const eventDataHandler = (ev) => {
        const eventdate = eventDate.firstChild.data;
        const eventdetails = eventInput.value;
        const eventdata = {
            eventDate: eventdate,
            eventDetails:eventdetails
        }
        
        eventArr.push(eventdata);
        verifyDate();
    }
    eventBtn.addEventListener('click', eventDataHandler);
}

const verifyDate = () => {
    let givendate = new Date(eventDate.firstChild.data);
    const curr_date = new Date().setHours(0,0,0,0);
    if(givendate < curr_date ){
        alert('you cannot set event for date passed');
        return ;
    }
    showWarning();
    DisplayEvents();
}

const DisplayEvents = () => {    
    for(let i = 0; i < eventArr.length; i++){

        let date = eventArr[i].eventDate;
        let details = eventArr[i].eventDetails;

        let tableRow = document.createElement('tr');
        let dateCell = document.createElement('td');
        let detailsCell = document.createElement('td');
        let actionCell = document.createElement('td');

        dateCell.appendChild(document.createTextNode(date));
        detailsCell.innerHTML = `
            <div contentEditable title='click to edit appointment'>${details}</div>
        `;
        actionCell.innerHTML= `
            <input type="button" class="btn btn-sm btn-danger delete-btn" value="del" />
        `;

        tableRow.appendChild(dateCell);
        tableRow.appendChild(detailsCell);
        tableRow.appendChild(actionCell);
        showEvents.appendChild(tableRow);
    }
    deleteEvent();
}

const showWarning = () => {
    if (eventArr.length > 1){
        alert('Note: You already have an appointment today');
    } 
}

const deleteEvent = () => {
    const deleteBtn = document.getElementsByClassName('delete-btn');

    const deleteEventhandler = (ev) => {
        const td = event.target.parentNode; 
        const tr = td.parentNode;
        tr.parentNode.removeChild(tr);
    }

    for(let i = 0; i < deleteBtn.length; i ++){
        deleteBtn[i].addEventListener('click', deleteEventhandler);
    }
}

getEventdata();
calendarInput();
