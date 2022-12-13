$("#login").click(function () {
    window.location.assign("sign.html")
})
$("#shop").click(function () {
    window.location.assign("shopping.html")
})

$("#myComps").click(function () {
    if (crntUser = ' ') {
        alert("Hesab yoxdur")
    }else{
        window.location.assign("mycomps.html")
    }
   
    
        
    
})

let crntUser = localStorage.getItem("currentUser")
$("#usernames").append(crntUser)



$("#exit").click(function () {

    crntUser = '  '

    localStorage.setItem('currentUser', crntUser)
    location.reload()
})
