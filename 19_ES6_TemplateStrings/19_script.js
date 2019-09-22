let employee1 = {
  sno : 120,
  eName : 'John',
  eAge : 40,
  eDesg : 'Manager'
};

let employee2 = {
    sno : 110,
    eName : 'Williams',
    eAge : 35,
    eDesg : 'Sr.Tech Lead'
};

let tableBody = document.querySelector('#table_body');


// ES5 version of HTML String
let htmlStr = '<tr>'+
                    '<td>'+employee1.sno+'</td>' +
                    '<td>'+employee1.eName+'</td>' +
                    '<td>'+employee1.eAge+'</td>' +
                    '<td>'+employee1.eDesg+'</td>' +
               '</tr>';
//tableBody.innerHTML = htmlStr;

// ES6 Version
let templateStr = `<tr style="background-color: lightgreen">
                       <td>${employee1.sno}</td>
                       <td>${employee1.eName}</td>
                       <td>${employee1.eAge}</td>
                       <td>${employee1.eDesg}</td>
                   </tr>
                   <tr style="background-color: lightgreen">
                        <td>${employee2.sno}</td>
                        <td>${employee2.eName}</td>
                        <td>${employee2.eAge}</td>
                        <td>${employee2.eDesg}</td>
                    </tr>`;

tableBody.innerHTML = templateStr;