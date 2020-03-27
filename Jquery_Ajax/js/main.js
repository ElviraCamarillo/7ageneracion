var kodersArray = [];
const getKoderData = () => {
    let name = $("#koder-name").val();
    let email = $("#koder-email").val();
    let phone = $("#koder-phone").val();
    let koderObject = {name, email, phone}
    //kodersArray.push(koderObject)
    addKodersFromDb(koderObject)
    getKodersFromDb()
    //printKoders();
}
$("#save-koder").on("click",getKoderData)

const assignDeleteKoderListener = () => {
    console.log('add lis')
    $(".delete-koder").on("click",deleteKoderInDb)
}

const printKoders = () => {
    $("#koders-table").find("tbody").empty();
    kodersArray.forEach((koder,index) => {
        console.log(koder, index)
        $("#koders-table").find("tbody").append(`
            <tr>
                <td>${index + 1}</td>
                <td>
                    <span class="openToEdit">${koder.name}</span>
                    <input type="text" value="${koder.name}" class="d-none textInput" data-koder-index=${koder.key} data-type="name">
                </td>w
                <td>
                    <span class="openToEdit">${koder.email}</span>
                    <input type="text" value="${koder.email}" class="d-none textInput" data-koder-index=${koder.key} data-type="email">
                </td>
                <td>
                    <span class="openToEdit">${koder.phone}</span>
                    <input type="text" value="${koder.phone}" class="d-none textInput" data-koder-index=${koder.key} data-type="phone">
                </td>
                <td>
                    <div class="btn btn-danger delete-koder" data-koder-index=${koder.key}>X</div>
                </td>
            </tr>
        `)
    })
    assignDeleteKoderListener();
}

$("#koders-table").on('click', '.openToEdit', function(){
    $(this).addClass('d-none')
    $(this).next('input').removeClass('d-none')
})

// function for patch a single koder property

const patchKoder = (idKoder, property, newVal)  =>{
    var newDeclaration = {}
    
    if(property === 'name'){
        newDeclaration = { name: newVal }
    } else if(property === 'email'){
        newDeclaration = { email: newVal }
    } else if(property === 'phone'){
        newDeclaration = { phone: newVal }
    }
    console.log(newDeclaration)

    $.ajax({
        type: "Patch",
        url: `https://javascript-ajax-d0ce6.firebaseio.com/elvira/koders/${idKoder}.json`,
        data: JSON.stringify(newDeclaration),
        dataType: "json",
        contentType: 'application/json; charset=utf-8'
    })
}

$("#koders-table").on('blur', '.textInput', function(){
    const idKoder = $(this).data("koder-index")
    const property =  $(this).data('type')
    const newVal = $(this).val()
    patchKoder(idKoder, property, newVal)

    $(this).prev('span').text(newVal)
    $(this).prev('span').removeClass('d-none')
    $(this).addClass('d-none')
})


const deleteKoder = (event) => {
    let koderIndex = $(event.target).data("koder-index")
    kodersArray.splice(koderIndex,1)
    printKoders();
}
const getKodersFromDb = () => {
    kodersArray = [];
    $.ajax({
        url:"https://javascript-ajax-d0ce6.firebaseio.com/elvira/koders/.json",
        method:"GET",
        success:(response)=>{
            console.log(response)
            $.each(response, (key,value) => {
                console.log(key, value)
                kodersArray.push({...value,key})
                //console.log(kodersArray)
            })
            printKoders();
            //kodersArray.push(response)
        }
    })
}

const deleteKoderInDb = () => {
    let koderKey = $(event.target).data("koder-index")
    console.log(koderKey)
    $.ajax({
        url:`https://javascript-ajax-d0ce6.firebaseio.com/elvira/koders/${koderKey}.json`,
        method:"DELETE",
        success:(response)=>{
            console.log(response);
            getKodersFromDb();
        }
    })
}

const addKodersFromDb = (koderObject) => {
    $.ajax({
        url:"https://javascript-ajax-d0ce6.firebaseio.com/elvira/koders/.json",
        method:"POST",
        data:JSON.stringify(koderObject),
        success:(response)=>{
           getKoderData
           //printKoders();
        }
    
    })
}


getKodersFromDb();
