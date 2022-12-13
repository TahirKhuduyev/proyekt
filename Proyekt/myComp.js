
let compArr = [];
if (localStorage.getItem('compArr')) {
    compArr = JSON.parse(localStorage.getItem('compArr'))
}



$("#main").click(function () {
    window.location.assign("index.html")
})








let jsontxt = JSON.stringify(compArr);
localStorage.setItem("compArr", jsontxt);
let myJson = localStorage.getItem("compArr");
let myarr = JSON.parse(myJson);
let i;







function refreshData() {
    $('#computers').empty()
    for (let i = 0; i < compArr.length; i++) {

   
    

        let txt = `<tr>
        <th scope="row">${i}</th>
        <td>${compArr[i].adC}</td>
        <td><img src="${compArr[i].imgC}" ></td>
        <td>${compArr[i].qiymetC}</td>
        <td>
        <button btn-id='${i}' class='dlt'>
        Sil
        </button>
        <button edit-btn-id='${i}' type="button" class="edit btn-primary" data-bs-toggle="modal" data-bs-target="#redakte">
        Edit
        </button>
        </td>
      </tr> `;
        $("#computers").append(txt);
    }

    localStorage.setItem('compArr', JSON.stringify(compArr))

    $('.dlt').click(function() {
        let index = $(this).attr('btn-id')
            // console.log(index);
        compArr.splice(index, 1)
        refreshData()

    })
}




refreshData()










$("#inputt").click(function() {
    let kateqoriya = $("#kateqoriya").val()
    let ad = $("#ad").val()
    let qiymet = $("#qiymet").val()
    let tesvir = $("#tesvir").val()
    let yeni = $("#yeni").val()
    let img = $("#img").val()
    let emeliyaddas = $("#emeliyaddas").val()
    let merkeziprossessor = $("#merkeziprosessor").val()
    let daimiyaddas = $("#daimiyaddas").val()
    let daimiyaddastipi = $("#daimiyaddastipi").val()
    let emeliyyatsistemi = $("#emeliyyatsistemi").val()
    let videokart = $("#videkart").val()

    let inputobj = {
     kateqoriyaC:kateqoriya,
     adC:ad,
     qiymetC:qiymet,
     tesvirC:tesvir,
     yeniC:yeni,
     imgC:img,
     emeliyaddasC:emeliyaddas,
     merkeziprossessorC:merkeziprossessor,
     daimiyaddasC:daimiyaddas,
     daimiyaddastipiC:daimiyaddastipi,
     emeliyyatsistemiC:emeliyyatsistemi,
     videokartC:videokart,
    }

    localStorage.setItem (inputobj)
    compArr.push(inputobj)

    refreshData()






  

})








let index
    // console.log(index);
$(".edit").click(function() {
    index = Number($(this).attr('edit-btn-id'))

    

       


    let ckateqoriya = compArr[index].kateqoriyaC
    let cad = compArr[index].adC
    let cqiymet = compArr[index].qiymetC
    let ctesvir = compArr[index].tesvirC
    let cyeni = compArr[index].yeniC
    let cimg = compArr[index].imgC
    let cemeliyaddas = compArr[index].emeliyaddasC
    let cmerkeziprosessor = compArr[index].merkeziprossessorC
    let cdaimiyaddas = compArr[index].daimiyaddasC
    let cdaimiyaddastipi = compArr[index].daimiyaddastipiC
    let cemeliyyatsistemi = compArr[index].emeliyyatsistemiC
    let cvideokart = compArr[index].videokartC



    $("#kateqoriya").val(ckateqoriya)
       $("#adinput").val(cad)
       $("#qiymetinput").val(cqiymet)
       $("#tesvirinput").val(ctesvir)
       $("#yeniinput").val(cyeni)
       $("#imginput").val(cimg)
       $("#emeliyaddasinput").val(cemeliyaddas)
       $("#merkeziprosessorinput").val(cmerkeziprosessor)
       $("#daimiyaddasinput").val(cdaimiyaddas)
       $("#daimiyaddastipiinput").val(cdaimiyaddastipi)
       $("#emeliyyatsistemiinput").val(cemeliyyatsistemi)
       $("#videkartinput").val(cvideokart)










})

$("#edt-btn").click(function() {
    compArr[index].kateqoriyaC = $("#kateqoriyainput").val()
    compArr[index].adC = $("#adinput").val()
    compArr[index].qiymetC=$("#qiymetinput").val()
    compArr[index].tesvirC= $("#tesvirinput").val()
    compArr[index].yeniC=$("#yeniinput").val()
    compArr[index].imgC=$("#imginput").val()
    compArr[index].emeliyaddasC=$("#emeliyaddasinput").val()
    compArr[index].merkeziprossessorC=$("#merkeziprosessorinput").val()
    compArr[index].daimiyaddasC=$("#daimiyaddasinput").val()
    compArr[index].daimiyaddastipiC=$("#daimiyaddastipiinput").val()
    compArr[index].emeliyyatsistemiC=$("#emeliyyatsistemiinput").val()
    compArr[index].videokartC= $("#videkartinput").val()

    refreshData()

})



