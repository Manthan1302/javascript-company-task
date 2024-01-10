var companyList = []
// let count = 1
function getData() {
    class Company {
        companyId = null
        companyName = ""
        companyLocation = ""
        companyGst = null
    }

    let company = new Company();
    company.companyId = document.getElementById("companyId").value;
    company.companyName = document.getElementById("companyName").value;
    company.companyLocation = document.getElementById("companyLocation").value;
    company.companyGst = document.getElementById("companyGst").value;

    let checkId = companyList.findIndex(ele => ele.companyId === company.companyId)
    let checkComanyName = companyList.findIndex(ele => ele.companyName === company.companyName)
    let checkGst = companyList.findIndex(ele => ele.companyGst === company.companyGst)

    if (checkId !== -1) {
        alert("ReEnter Id!!! This Id Already exists");
        return;
    }
    if (checkComanyName !== -1) {
        alert("ReEnter Comany Name!!! This Compny Name Already exists");
        return;
    }
    if (checkGst !== -1) {
        alert("ReEnter Gst Number!!! This Gst Number Already exists");
        return;
    }
    if (company.companyId === "" || company.companyName === "" || company.companyLocation === "" || company.companyGst === "") {
        alert("Enter Details")
        return;
    }

    companyList.push({
        "companyId": company.companyId,
        "companyName": company.companyName,
        "companyLocation": company.companyLocation,
        "companyGst": company.companyGst
    })
    showData();

}


function showData() {
    var table = document.getElementById("myTable");
    var tbody = table.querySelector('tbody');

    // Clear existing rows in the tbody
    tbody.innerHTML = "";

    companyList.forEach(function (element) {
        var row = tbody.insertRow(-1);

        var c1 = row.insertCell(0);
        var c2 = row.insertCell(1);
        var c3 = row.insertCell(2);
        var c4 = row.insertCell(3);
        var c5 = row.insertCell(4);
        var c6 = row.insertCell(5);

        c1.innerText = element.companyId;
        c2.innerText = element.companyName;
        c3.innerText = element.companyLocation;
        c4.innerText = element.companyGst;

        var deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = function () {
            deleteCompany(element.companyId);
        };

        var editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.onclick = function () {
            editCompany(element.companyId);
        };

        c5.appendChild(deleteButton);
        c6.appendChild(editButton);
    });

    console.log("companyList", companyList);
}


function deleteCompany(companyId) {
    var index = companyList.findIndex(function(ele) {
        return ele.companyId === companyId;
    });

    if (index !== -1) {
        companyList.splice(index, 1);
        showData();
    }
}

function editCompany(companyId) {
    var index = companyList.findIndex(function(ele) {
        return ele.companyId === companyId;
    });

    if (index !== -1) {
        var company = companyList[index];
        document.getElementById("companyId").value = company.companyId;
        document.getElementById("companyName").value = company.companyName;
        document.getElementById("companyLocation").value = company.companyLocation;
        document.getElementById("companyGst").value = company.companyGst;
    }
}

function updateData() {
    var cid = document.getElementById("companyId").value;
    var index = companyList.findIndex(function(ele) {
        return ele.companyId === cid;
    });

    if (index !== -1) {
        var cname = document.getElementById("companyName").value;
        var cloc = document.getElementById("companyLocation").value;
        var cgst = document.getElementById("companyGst").value;

        companyList[index].companyName = cname;
        companyList[index].companyLocation = cloc;
        companyList[index].companyGst = cgst;

        showData();
    }
}

function SearchComapny() {
    let table = document.getElementById("searchtable");

    document.getElementById("sid").innerHTML = "";
    document.getElementById("sname").innerHTML = "";
    document.getElementById("sloc").innerHTML = "";
    document.getElementById("sgst").innerHTML = "";
    document.getElementById("sdlt").innerHTML = "";


    let companyExist = document.getElementById("companySearch").value;

    if (companyExist === "") {
        alert("Enter Company Name For Search");
        return;
    }
    let searchData = companyList.filter(ele => ele.companyName.includes(companyExist))
    // let searchData = companyList.filter(ele =>ele.companyName)
    console.log(searchData);
    let row = table.insertRow(0);


    let button = document.createElement('BUTTON');
    let text = document.createTextNode("Delete");
    button.appendChild(text);


    searchData.forEach(element => {
        // c1.innerText = element.companyId
        // c2.innerText = element.companyName
        // c3.innerText = element.companyLocation
        // c4.innerText = element.companyGst
        // c5.appendChild(button);
        document.getElementById("sid").innerHTML = element.companyId;
        document.getElementById("sname").innerHTML = element.companyName;
        document.getElementById("sloc").innerHTML = element.companyLocation;
        document.getElementById("sgst").innerHTML = element.companyGst;
        document.getElementById("sdlt").appendChild(button);


        button.onclick = (function () {
            let index = companyList.findIndex(ele => ele.companyId === element.companyId)
            console.log(index);
            // console.log(companyList);
            companyList.splice(index, 1);
            var i = this.parentNode.parentNode.rowIndex;
            console.log(i);
            table.deleteRow(i);
        })


    });

}
// function showData() {

//     let table = document.getElementById("myTable");
//     let row = table.insertRow(-1);

//     let c1 = row.insertCell(0);
//     let c2 = row.insertCell(1);
//     let c3 = row.insertCell(2);
//     let c4 = row.insertCell(3);
//     let c5 = row.insertCell(4);
//     let c6 = row.insertCell(5);

//     let deleteButton = document.createElement('BUTTON');
//     let text = document.createTextNode("Delete");
//     deleteButton.appendChild(text);

//     let editButton = document.createElement('button');
//     let updateText = document.createTextNode("Edit");
//     editButton.appendChild(updateText)

//     companyList.forEach(element => {
//         console.log(element);
//         c1.innerText = element.companyId
//         c2.innerText = element.companyName
//         c3.innerText = element.companyLocation
//         c4.innerText = element.companyGst
//         c5.appendChild(deleteButton);
//         c6.appendChild(editButton);

//         deleteButton.onclick = (function () {
//             let index = companyList.findIndex(ele => ele.companyId === element.companyId)
//             console.log(index);
//             // console.log(companyList);
//             companyList.splice(index, 1);
//             var i = this.parentNode.parentNode.rowIndex;
//             console.log(i);
//             table.deleteRow(i);
//         })

//         editButton.onclick = (function () {
//             let index = companyList.findIndex(ele => ele.companyId === element.companyId);
//             console.log(companyList[index])

//             document.getElementById("companyId").value = companyList[index].companyId
//             document.getElementById("companyName").value = companyList[index].companyName
//             document.getElementById("companyLocation").value = companyList[index].companyLocation
//             document.getElementById("companyGst").value = companyList[index].companyGst
//         })
//     });
//     console.log("companyList", companyList);
// }




// function updateData() {

//     let cid = document.getElementById("companyId").value
//     let index = companyList.findIndex(ele => ele.companyId === cid);
//     let cname = document.getElementById("companyName").value
//     let cloc = document.getElementById("companyLocation").value
//     let cgst = document.getElementById("companyGst").value


//     if (index !== -1) {
//         console.log(companyList[index]);
//         companyList[index].companyName = cname;
//         companyList[index].companyLocation = cloc;
//         companyList[index].companyGst = cgst;
//     }

//     console.log(companyList);

//     // document.getElementById("sid").innerHTML = "";
//     // document.getElementById("sname").innerHTML = "";
//     // document.getElementById("sloc").innerHTML = "";
//     // document.getElementById("sgst").innerHTML = "";
//     // document.getElementById("sdlt").innerHTML = "";
//     var tableHeaderRowCount = 1;
//     var table = document.getElementById('myTable');
//     var rowCount = table.rows.length;
//     for (var i = tableHeaderRowCount; i < rowCount; i++) {
//         table.deleteRow(tableHeaderRowCount);
//     }
//     // document.getElementById("myTable").innerHTML = ""
//     // showData();
//     showData()

// }



