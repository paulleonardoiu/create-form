export function changePageContent(pageID){
    if(pageID != ""){
        $.get(`pages/${pageID}/${pageID}.html`, function(data){
            $("#app").html(data);
            if(pageID == "edit"){
                var editObj = {
                    edit_firstName: "Old First Name",
                    edit_lastName: "Old Last Name",
                    edit_emailAddress: "Old Email",
                    edit_age: "100",
                    edit_company: "Old Company",
                    edit_phoneNumber: 12345678910
                };
                for (const property in editObj){
                    $("#"+`${property}`).val(`${editObj[property]}`);
                }
            }
        });
    }else{
        $.get(`pages/home/home.html`, function(data){
            $("#app").html(data);
        })
    }
}