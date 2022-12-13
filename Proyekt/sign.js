



$("#buttona").click(function () {
    window.location.assign("index.html")
})
$("#make").click(function () {
    window.location.assign("signin.html")
})



$('#login').submit(function() {
    myArr = JSON.parse(localStorage.getItem("users"))
    let usernames = $("#istifadeciadi").val()
    let passwords = $("#sifre").val()
    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i]['username'] == usernames) {
            if (myArr[i]['password'] == passwords) {
                localStorage.setItem('currentUser', usernames)
                alert("Hesaba daxil olundu")
                window.open("index.html")

            }
        }
    }
})