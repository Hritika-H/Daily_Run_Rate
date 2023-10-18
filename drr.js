var formRow = document.getElementById("mainform");
var table = document.getElementById("drrTable");

formRow.setAttribute("hidden", "hidden");

$(document).ready(function () {
    $('#datePick').multiDatesPicker();
  });



function addnew() {
    formRow.removeAttribute("hidden");
    document.getElementById("addButton").style.display = "none";
}

function onCancel() {
    formRow.setAttribute("hidden", "hidden");
    document.getElementById("addButton").style.display = "Block";
}

function computeDays(date1,date2) {  
    

   //define two date object variables to store the date values  
    var date1 = new Date(date1);  
    var date2 = new Date(date2);  

    

   //calculate time difference  
    var time_difference = date2.getTime() - date1.getTime();  

    //calculate days difference by dividing total milliseconds in a day  
    var result = time_difference / (1000 * 60 * 60 * 24);  

    return result;
        
}  

function onSave(){
    //define two variables and fetch the input from HTML form  
    var date1 = document.getElementById("startDate").value;  
    var date2 = document.getElementById("endDate").value; 

    var datesCount = $('#datePick').val().split(',').length;

    var no_of_days=computeDays(date1,date2)-datesCount;

    var leadCount = document.getElementById("leadCount").value; 

    var d1 = new Date(date1);  
    var month = d1.getMonth(); 
    var year =  d1.getYear();


    var row = table.insertRow(2);

    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);
    var cell6 = row.insertCell(6);
    var cell7 = row.insertCell(7);
    var cell8 = row.insertCell(8);



    cell0.innerHTML = "action";
    cell1.innerHTML = "id";
    cell2.innerHTML = date1;
    cell3.innerHTML = date2;
    cell4.innerHTML = month +" "+ year;
    cell5.innerHTML = $('#datePick').val();
    cell6.innerHTML = no_of_days;
    cell7.innerHTML = leadCount;
    cell8.innerHTML = leadCount/no_of_days;

}