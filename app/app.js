import { changePageContent } from "./model.js";


function changeRoute(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    changePageContent(pageID);
}

function initURLListener(){
    $(window).on("hashchange", changeRoute);
    changeRoute();
}

$(document).ready(function(){
    initURLListener();
})


// Create Page Form
var createSubmit = "#createSubmit";

$(document).on("click", createSubmit, function(e){
    e.preventDefault();
    let createfName = $("#firstName").val();
    let createlName = $("#lastName").val();
    let createEmail = $("#emailAddress").val();
    let createAge = $("#age").val();
    let createCompany = $("#company").val();
    let createNumber = $("#phoneNumber").val();
    let createStreet = $("#streetAddress").val();
    let createState = $("#stateAddress").val();
    let createCountry = $("#countryAddress").val();
    let createAreacode = $("#areaCode").val();

    let createEmailList = $("#emailList");
    let createTerms = $("#agreeToTerms");
    
    if(createEmailList.is(":checked")){
        createEmailList = "Subscribed";
    }else{
        createEmailList = "Unsubscribed";
    }

    if(createTerms.is(":checked")){
        createTerms = "Agreed";
    }else{
        createTerms = "Disagreed";
    }

    let createObj = {
        firstName: createfName,
        lastName: createlName,
        email: createEmail,
        age: createAge,
        company: createCompany,
        number: createNumber,
        address: {
            street: createStreet,
            state: createState,
            country: createCountry,
            area: createAreacode
        },
        emailList: createEmailList,
        terms: createTerms
    };

    console.log(createObj);
});

// Edit Page Form

var editSubmit = "#editSubmit";

$(document).on("click", editSubmit, function(e){
    e.preventDefault();
    let edit_fName = $("#edit_firstName").val();
    let edit_lName = $("#edit_lastName").val();
    let edit_Email = $("#edit_emailAddress").val();
    let edit_Age = $("#edit_age").val();
    let edit_Company = $("#edit_company").val();
    let edit_Number = $("#edit_phoneNumber").val();
    
    var newEditObj = {
        edit_firstName: edit_fName,
        edit_lastName: edit_lName,
        edit_emailAddress: edit_Email,
        edit_age: edit_Age,
        edit_company: edit_Company,
        edit_phoneNumber: edit_Number
    }
    console.log(newEditObj);
})

// Login Create Account Page

// Login Form

var loginSubmit = "#login_Submit";
$(document).on("click", loginSubmit, function(e){
    e.preventDefault();

    var loginObj = {
        email: $("#login_email").val(),
        password: $("#login_password").val()
    };

    console.log(loginObj);
})

// Create Account Form
var createAccSubmit = "#createAcc_Submit";
$(document).on("click", createAccSubmit, function(e){
    e.preventDefault();

    var createAccObj = {
        username: $("#createAcc_email").val(),
        password: $("#createAcc_password").val(),
        firstName: $("#createAcc_fName").val(),
        lastName: $("#createAcc_lName").val()
    };

    console.log(createAccObj);
})