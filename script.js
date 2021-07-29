


document.getElementById("send").addEventListener('click', addRow)
function addRow() {
    var table = document.getElementById('results');
    var row = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td')
    var td8 = document.createElement('td');
    var letters = /^[A-Za-z]+$/;
    var emailFormat= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10){
            dd='0'+dd
        } 
        if(mm<10){
            mm='0'+mm
        } 

    today = yyyy+'-'+mm+'-'+dd;
    
    function getAge(dateString) {
            var today = new Date();
            var birthDate = new Date(dateString);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        }
    if(document.getElementById('name').value==""){
        alert("Name must be filled out");
    return false;
    }else if( document.getElementById('name').value.match(letters)){
        td1.innerHTML = document.getElementById('name').value;
    }else{
        
            alert("First Name should contain only Alphabet characters (A-Z or a-z)");
            return false;
        }
    if(document.getElementById('lname').value==""){
        alert("Last name must be filled out");
    return false;
    }else  if( document.getElementById('lname').value.match(letters)){
        td2.innerHTML = document.getElementById('lname').value;
    }else{        
            alert("Last Name should contain only Alphabet characters (A-Z or a-z)");
            return false;
        } 
    if(document.getElementById('date').value==""){
        alert("Date must be filled out");
    return false;
    }else if(document.getElementById('date').value>today){
        alert('Birthday cannot be more than today!')  
        return false
    }else{td4.innerHTML = document.getElementById('date').value}

    if(document.getElementById('email').value==""){
        alert("Email must be filled out");
    return false;
    }else  if( document.getElementById('email').value.match(emailFormat)){
        td6.innerHTML = document.getElementById('email').value;
    }else{        
            alert("Bad Email format");
            return false;
    }
    
    if(document.querySelector('input[name="Gender"]:checked')==null)
    {td3.innerHTML='Prefer not to say'
    }else {
        td3.innerHTML = document.querySelector('input[name="Gender"]:checked').value
    }
    
    if(getAge(td4.innerHTML)<=3){td5.innerHTML='Newborn'}
    else{td5.innerHTML = getAge(td4.innerHTML)}
   
    td7.innerHTML='<input type="button" id="delete" value=" " class="button-delete" onclick="deleteRow(this)"/> '
    i++
    td8.innerHTML=i
    row.appendChild(td8);
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);
    row.appendChild(td6);
    row.appendChild(td7);
    table.children[0].insertBefore(row, table.children[0].childNodes[1]);
    
    // var popup = document.getElementById("myPopup");
    // popup.classList.toggle("show");

    const popup = document.querySelector('.popup');
    
        popup.classList.add('open');
   
      
  
       
}

