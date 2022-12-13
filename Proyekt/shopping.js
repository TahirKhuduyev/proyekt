$("#main").click(function () {
    window.location.assign("index.html")
})


let lenovoArr = [
    { lenovoPhoto: "proyekt lenovo.jpg", lenovoname: "lenovo 1 Desc", lenovoPrice: "2000", lenovoyeni: "Beli",lenovoTelefon: "123-123-12-12" },
    { lenovoPhoto: "proyekt lenovo.jpg", lenovoname: "lenovo 2 Desc", lenovoPrice: "2001", lenovoyeni: "Xeyr",lenovoTelefon: "123-123-12-12" },
    { lenovoPhoto: "proyekt lenovo.jpg", lenovoname: "lenovo 3 Desc", lenovoPrice: "2002", lenovoyeni: "Beli",lenovoTelefon: "123-123-12-12" },
    { lenovoPhoto: "proyekt lenovo.jpg", lenovoname: "lenovo 4 Desc", lenovoPrice: "2003", lenovoyeni: "Xeyr",lenovoTelefon: "123-123-12-12" },
    { lenovoPhoto: "proyekt lenovo.jpg", lenovoname: "lenovo 5 Desc", lenovoPrice: "2004", lenovoyeni: "Beli",lenovoTelefon: "123-123-12-12" },
    { lenovoPhoto: "proyekt lenovo.jpg", lenovoname: "lenovo 6 Desc", lenovoPrice: "2005", lenovoyeni: "Xeyr",lenovoTelefon: "123-123-12-12" },
    { lenovoPhoto: "proyekt lenovo.jpg", lenovoname: "lenovo 7 Desc", lenovoPrice: "2006", lenovoyeni: "Beli",lenovoTelefon: "123-123-12-12" },
    { lenovoPhoto: "proyekt lenovo.jpg", lenovoname: "lenovo 8 Desc", lenovoPrice: "2007", lenovoyeni: "Xeyr",lenovoTelefon: "123-123-12-12" },
    { lenovoPhoto: "proyekt lenovo.jpg", lenovoname: "lenovo 9 Desc", lenovoPrice: "2008", lenovoyeni: "Beli",lenovoTelefon: "123-123-12-12" },
    { lenovoPhoto: "proyekt lenovo.jpg", lenovoname: "lenovo 10 Desc", lenovoPrice: "2090", lenovoyeni: "Xeyr",lenovoTelefon: "123-123-12-12" },
    { lenovoPhoto: "proyekt lenovo.jpg", lenovoname: "lenovo 11 Desc", lenovoPrice: "2090", lenovoyeni: "Beli",lenovoTelefon: "123-123-12-12" },
    { lenovoPhoto: "proyekt lenovo.jpg", lenovoname: "lenovo 12 Desc", lenovoPrice: "2000", lenovoyeni: "Xeyr",lenovoTelefon: "123-123-12-12" },
    { lenovoPhoto: "proyekt lenovo.jpg", lenovoname: "lenovo 13 Desc", lenovoPrice: "2040", lenovoyeni: "Beli",lenovoTelefon: "123-123-12-12" },
    { lenovoPhoto: "proyekt lenovo.jpg", lenovoname: "lenovo 14 Desc", lenovoPrice: "2003", lenovoyeni: "Xeyr",lenovoTelefon: "123-123-12-12" },
    { lenovoPhoto: "proyekt lenovo.jpg", lenovoname: "lenovo 15 Desc", lenovoPrice: "20005", lenovoyeni: "Beli",lenovoTelefon: "123-123-12-12" },
    { lenovoPhoto: "proyekt lenovo.jpg", lenovoname: "lenovo 16 Desc", lenovoPrice: "2060", lenovoyeni: "Xeyr",lenovoTelefon: "123-123-12-12" },
    { lenovoPhoto: "proyekt lenovo.jpg", lenovoname: "lenovo 17 Desc", lenovoPrice: "20060", lenovoyeni: "Beli",lenovoTelefon: "123-123-12-12" },
    { lenovoPhoto: "proyekt lenovo.jpg", lenovoname: "lenovo 18 Desc", lenovoPrice: "2080", lenovoyeni: "Xeyr",lenovoTelefon: "123-123-12-12" },
    { lenovoPhoto: "proyekt lenovo.jpg", lenovoname: "lenovo 19 Desc", lenovoPrice: "4700", lenovoyeni: "Beli",lenovoTelefon: "123-123-12-12" },
    { lenovoPhoto: "proyekt lenovo.jpg", lenovoname: "lenovo 20 Desc", lenovoPrice: "2500", lenovoyeni: "Xeyr",lenovoTelefon: "123-123-12-12" }
    ]
    
    function  lenovomakebox() {
        $(".computers").empty();
        for (let i = 0; i < lenovoArr.length; i++) {
           
            let txt = ` <div class="col-3">
                   <div class="box">
                   <img src="${lenovoArr[i].lenovoPhoto}" alt="">
                    <p>Ad: <span>${lenovoArr[i].lenovoname}</span></p>
                    <p>Price: <span>${lenovoArr[i].lenovoPrice}</span></p>
                    <p>Yeni: <span>${lenovoArr[i].lenovoyeni}</span></p>
                    <p>Telefon: <span>${lenovoArr[i].lenovoTelefon}</span></p>
                    <button btn-id='${i}' class='etrafli class="btn btn-primary"'>Etrafli</button>
                    </div>
                    </div>`;
                    $(".computers").append(txt);
                    
        }
        localStorage.setItem('lenovoArr', JSON.stringify(lenovoArr))
    
        $('.dlt').click(function() {
            let index = $(this).attr('btn-id')
                // console.log(index);
            lenovoArr.splice(index, 1)
         lenovomakebox()
    
        })
    }
    
    $("#list-lenovo-list").click(function () {
       
        lenovomakebox()
    })




    let asusArr = [
{ asusPhoto: "proyekt asus.jpg", asusname: "Asus 1 Desc", asusPrice: "2000", asusyeni: "Beli",asusTelefon: "123-123-12-12" },
{ asusPhoto: "proyekt asus.jpg", asusname: "Asus 2 Desc", asusPrice: "2001", asusyeni: "Xeyr",asusTelefon: "123-123-12-12" },
{ asusPhoto: "proyekt asus.jpg", asusname: "Asus 3 Desc", asusPrice: "2002", asusyeni: "Beli",asusTelefon: "123-123-12-12" },
{ asusPhoto: "proyekt asus.jpg", asusname: "Asus 4 Desc", asusPrice: "2003", asusyeni: "Xeyr",asusTelefon: "123-123-12-12" },
{ asusPhoto: "proyekt asus.jpg", asusname: "Asus 5 Desc", asusPrice: "2004", asusyeni: "Beli",asusTelefon: "123-123-12-12" },
{ asusPhoto: "proyekt asus.jpg", asusname: "Asus 6 Desc", asusPrice: "2005", asusyeni: "Xeyr",asusTelefon: "123-123-12-12" },
{ asusPhoto: "proyekt asus.jpg", asusname: "Asus 7 Desc", asusPrice: "2006", asusyeni: "Beli",asusTelefon: "123-123-12-12" },
{ asusPhoto: "proyekt asus.jpg", asusname: "Asus 8 Desc", asusPrice: "2007", asusyeni: "Xeyr",asusTelefon: "123-123-12-12" },
{ asusPhoto: "proyekt asus.jpg", asusname: "Asus 9 Desc", asusPrice: "2008", asusyeni: "Beli",asusTelefon: "123-123-12-12" },
{ asusPhoto: "proyekt asus.jpg", asusname: "Asus 10 Desc", asusPrice: "2090", asusyeni: "Xeyr",asusTelefon: "123-123-12-12" },
{ asusPhoto: "proyekt asus.jpg", asusname: "Asus 11 Desc", asusPrice: "2090", asusyeni: "Beli",asusTelefon: "123-123-12-12" },
{ asusPhoto: "proyekt asus.jpg", asusname: "Asus 12 Desc", asusPrice: "2000", asusyeni: "Xeyr",asusTelefon: "123-123-12-12" },
{ asusPhoto: "proyekt asus.jpg", asusname: "Asus 13 Desc", asusPrice: "2040", asusyeni: "Beli",asusTelefon: "123-123-12-12" },
{ asusPhoto: "proyekt asus.jpg", asusname: "Asus 14 Desc", asusPrice: "2003", asusyeni: "Xeyr",asusTelefon: "123-123-12-12" },
{ asusPhoto: "proyekt asus.jpg", asusname: "Asus 15 Desc", asusPrice: "20005", asusyeni: "Beli",asusTelefon: "123-123-12-12" },
{ asusPhoto: "proyekt asus.jpg", asusname: "Asus 16 Desc", asusPrice: "2060", asusyeni: "Xeyr",asusTelefon: "123-123-12-12" },
{ asusPhoto: "proyekt asus.jpg", asusname: "Asus 17 Desc", asusPrice: "20060", asusyeni: "Beli",asusTelefon: "123-123-12-12" },
{ asusPhoto: "proyekt asus.jpg", asusname: "Asus 18 Desc", asusPrice: "2080", asusyeni: "Xeyr",asusTelefon: "123-123-12-12" },
{ asusPhoto: "proyekt asus.jpg", asusname: "Asus 19 Desc", asusPrice: "4700", asusyeni: "Beli",asusTelefon: "123-123-12-12" },
{ asusPhoto: "proyekt asus.jpg", asusname: "Asus 20 Desc", asusPrice: "2500", asusyeni: "Xeyr",asusTelefon: "123-123-12-12" }
]

function  asusmakebox() {
    $(".computers").empty();
    for (let i = 0; i < asusArr.length; i++) {
       
        let txt = ` <div class="col-3">
               <div class="box">
               <img src="${asusArr[i].asusPhoto}" alt="">
                <p>Ad: <span>${asusArr[i].asusname}</span></p>
                <p>Price: <span>${asusArr[i].asusPrice}</span></p>
                <p>Yeni: <span>${asusArr[i].asusyeni}</span></p>
                <p>Telefon: <span>${asusArr[i].asusTelefon}</span></p>
                <button btn-id='${i}' class='etrafli class="btn btn-primary"'>Etrafli</button>
                </div>
                </div>`;
                $(".computers").append(txt);
                
    }
    localStorage.setItem('asusArr', JSON.stringify(asusArr))

    $('.dlt').click(function() {
        let index = $(this).attr('btn-id')
            // console.log(index);
        asusArr.splice(index, 1)
     asusmakebox()

    })
}

$("#list-asus-list").click(function () {
    console.log("sa"
        );
    asusmakebox()
})





let acerArr = [
    { acerPhoto: "proyekt acer.jpg", acername: "acer 1 Desc", acerPrice: "2000", aceryeni: "Beli",acerTelefon: "123-123-12-12" },
    { acerPhoto: "proyekt acer.jpg", acername: "acer 2 Desc", acerPrice: "2001", aceryeni: "Xeyr",acerTelefon: "123-123-12-12" },
    { acerPhoto: "proyekt acer.jpg", acername: "acer 3 Desc", acerPrice: "2002", aceryeni: "Beli",acerTelefon: "123-123-12-12" },
    { acerPhoto: "proyekt acer.jpg", acername: "acer 4 Desc", acerPrice: "2003", aceryeni: "Xeyr",acerTelefon: "123-123-12-12" },
    { acerPhoto: "proyekt acer.jpg", acername: "acer 5 Desc", acerPrice: "2004", aceryeni: "Beli",acerTelefon: "123-123-12-12" },
    { acerPhoto: "proyekt acer.jpg", acername: "acer 6 Desc", acerPrice: "2005", aceryeni: "Xeyr",acerTelefon: "123-123-12-12" },
    { acerPhoto: "proyekt acer.jpg", acername: "acer 7 Desc", acerPrice: "2006", aceryeni: "Beli",acerTelefon: "123-123-12-12" },
    { acerPhoto: "proyekt acer.jpg", acername: "acer 8 Desc", acerPrice: "2007", aceryeni: "Xeyr",acerTelefon: "123-123-12-12" },
    { acerPhoto: "proyekt acer.jpg", acername: "acer 9 Desc", acerPrice: "2008", aceryeni: "Beli",acerTelefon: "123-123-12-12" },
    { acerPhoto: "proyekt acer.jpg", acername: "acer 10 Desc", acerPrice: "2090", aceryeni: "Xeyr",acerTelefon: "123-123-12-12" },
    { acerPhoto: "proyekt acer.jpg", acername: "acer 11 Desc", acerPrice: "2090", aceryeni: "Beli",acerTelefon: "123-123-12-12" },
    { acerPhoto: "proyekt acer.jpg", acername: "acer 12 Desc", acerPrice: "2000", aceryeni: "Xeyr",acerTelefon: "123-123-12-12" },
    { acerPhoto: "proyekt acer.jpg", acername: "acer 13 Desc", acerPrice: "2040", aceryeni: "Beli",acerTelefon: "123-123-12-12" },
    { acerPhoto: "proyekt acer.jpg", acername: "acer 14 Desc", acerPrice: "2003", aceryeni: "Xeyr",acerTelefon: "123-123-12-12" },
    { acerPhoto: "proyekt acer.jpg", acername: "acer 15 Desc", acerPrice: "20005", aceryeni: "Beli",acerTelefon: "123-123-12-12" },
    { acerPhoto: "proyekt acer.jpg", acername: "acer 16 Desc", acerPrice: "2060", aceryeni: "Xeyr",acerTelefon: "123-123-12-12" },
    { acerPhoto: "proyekt acer.jpg", acername: "acer 17 Desc", acerPrice: "20060", aceryeni: "Beli",acerTelefon: "123-123-12-12" },
    { acerPhoto: "proyekt acer.jpg", acername: "acer 18 Desc", acerPrice: "2080", aceryeni: "Xeyr",acerTelefon: "123-123-12-12" },
    { acerPhoto: "proyekt acer.jpg", acername: "acer 19 Desc", acerPrice: "4700", aceryeni: "Beli",acerTelefon: "123-123-12-12" },
    { acerPhoto: "proyekt acer.jpg", acername: "acer 20 Desc", acerPrice: "2500", aceryeni: "Xeyr",acerTelefon: "123-123-12-12" }
    ]


    function  acermakebox() {
        $(".computers").empty();
        for (let i = 0; i < acerArr.length; i++) {
           
            let txt = ` <div class="col-3">
                   <div class="box">
                   <img src="${acerArr[i].acerPhoto}" alt="">
                    <p>Ad: <span>${acerArr[i].acername}</span></p>
                    <p>Price: <span>${acerArr[i].acerPrice}</span></p>
                    <p>Yeni: <span>${acerArr[i].aceryeni}</span></p>
                    <p>Telefon: <span>${acerArr[i].acerTelefon}</span></p>
                    <button btn-id='${i}' class='etrafli class="btn btn-primary"'>Etrafli</button>
                    </div>
                    </div>`;
                    $(".computers").append(txt);
                    
        }
        localStorage.setItem('acerArr', JSON.stringify(acerArr))
    
        $('.etrafli').click(function() {
            let index = $(this).attr('btn-id')
                // console.log(index);
            acerArr.splice(index, 1)
         acermakebox()
    
        })
    }
    $("#list-acer-list").click(function () {
        acermakebox()
    })



let hpArr = [
    { hpPhoto: "proyekt hp.jpg", hpname: "hp 1 Desc", hpPrice: "2000", hpyeni: "Beli",hpTelefon: "123-123-12-12" },
    { hpPhoto: "proyekt hp.jpg", hpname: "hp 2 Desc", hpPrice: "2001", hpyeni: "Xeyr",hpTelefon: "123-123-12-12" },
    { hpPhoto: "proyekt hp.jpg", hpname: "hp 3 Desc", hpPrice: "2002", hpyeni: "Beli",hpTelefon: "123-123-12-12" },
    { hpPhoto: "proyekt hp.jpg", hpname: "hp 4 Desc", hpPrice: "2003", hpyeni: "Xeyr",hpTelefon: "123-123-12-12" },
    { hpPhoto: "proyekt hp.jpg", hpname: "hp 5 Desc", hpPrice: "2004", hpyeni: "Beli",hpTelefon: "123-123-12-12" },
    { hpPhoto: "proyekt hp.jpg", hpname: "hp 6 Desc", hpPrice: "2005", hpyeni: "Xeyr",hpTelefon: "123-123-12-12" },
    { hpPhoto: "proyekt hp.jpg", hpname: "hp 7 Desc", hpPrice: "2006", hpyeni: "Beli",hpTelefon: "123-123-12-12" },
    { hpPhoto: "proyekt hp.jpg", hpname: "hp 8 Desc", hpPrice: "2007", hpyeni: "Xeyr",hpTelefon: "123-123-12-12" },
    { hpPhoto: "proyekt hp.jpg", hpname: "hp 9 Desc", hpPrice: "2008", hpyeni: "Beli",hpTelefon: "123-123-12-12" },
    { hpPhoto: "proyekt hp.jpg", hpname: "hp 10 Desc", hpPrice: "2090", hpyeni: "Xeyr",hpTelefon: "123-123-12-12" },
    { hpPhoto: "proyekt hp.jpg", hpname: "hp 11 Desc", hpPrice: "2090", hpyeni: "Beli",hpTelefon: "123-123-12-12" },
    { hpPhoto: "proyekt hp.jpg", hpname: "hp 12 Desc", hpPrice: "2000", hpyeni: "Xeyr",hpTelefon: "123-123-12-12" },
    { hpPhoto: "proyekt hp.jpg", hpname: "hp 13 Desc", hpPrice: "2040", hpyeni: "Beli",hpTelefon: "123-123-12-12" },
    { hpPhoto: "proyekt hp.jpg", hpname: "hp 14 Desc", hpPrice: "2003", hpyeni: "Xeyr",hpTelefon: "123-123-12-12" },
    { hpPhoto: "proyekt hp.jpg", hpname: "hp 15 Desc", hpPrice: "20005", hpyeni: "Beli",hpTelefon: "123-123-12-12" },
    { hpPhoto: "proyekt hp.jpg", hpname: "hp 16 Desc", hpPrice: "2060", hpyeni: "Xeyr",hpTelefon: "123-123-12-12" },
    { hpPhoto: "proyekt hp.jpg", hpname: "hp 17 Desc", hpPrice: "20060", hpyeni: "Beli",hpTelefon: "123-123-12-12" },
    { hpPhoto: "proyekt hp.jpg", hpname: "hp 18 Desc", hpPrice: "2080", hpyeni: "Xeyr",hpTelefon: "123-123-12-12" },
    { hpPhoto: "proyekt hp.jpg", hpname: "hp 19 Desc", hpPrice: "4700", hpyeni: "Beli",hpTelefon: "123-123-12-12" },
    { hpPhoto: "proyekt hp.jpg", hpname: "hp 20 Desc", hpPrice: "2500", hpyeni: "Xeyr",hpTelefon: "123-123-12-12" }
    ]
    
    function  hpmakebox() {
        $(".computers").empty();
        for (let i = 0; i < hpArr.length; i++) {
           
            let txt = ` <div class="col-3">
                   <div class="box">
                   <img src="${hpArr[i].hpPhoto}" alt="">
                    <p>Ad: <span>${hpArr[i].hpname}</span></p>
                    <p>Price: <span>${hpArr[i].hpPrice}</span></p>
                    <p>Yeni: <span>${hpArr[i].hpyeni}</span></p>
                    <p>Telefon: <span>${hpArr[i].hpTelefon}</span></p>
                    <button btn-id='${i}' class='etrafli class="btn btn-primary"'>Etrafli</button>
                    </div>
                    </div>`;
                    $(".computers").append(txt);
                    
        }
        localStorage.setItem('hpArr', JSON.stringify(hpArr))
    
        $('.dlt').click(function() {
            let index = $(this).attr('btn-id')
                // console.log(index);
            hpArr.splice(index, 1)
         hpmakebox()
    
        })
    }
    
    $("#list-hp-list").click(function () {
       
        hpmakebox()
    })



let dellArr = [
    { dellPhoto: "proyekt dell.jpg", dellname: "dell 1 Desc", dellPrice: "2000", dellyeni: "Beli",dellTelefon: "123-123-12-12" },
    { dellPhoto: "proyekt dell.jpg", dellname: "dell 2 Desc", dellPrice: "2001", dellyeni: "Xeyr",dellTelefon: "123-123-12-12" },
    { dellPhoto: "proyekt dell.jpg", dellname: "dell 3 Desc", dellPrice: "2002", dellyeni: "Beli",dellTelefon: "123-123-12-12" },
    { dellPhoto: "proyekt dell.jpg", dellname: "dell 4 Desc", dellPrice: "2003", dellyeni: "Xeyr",dellTelefon: "123-123-12-12" },
    { dellPhoto: "proyekt dell.jpg", dellname: "dell 5 Desc", dellPrice: "2004", dellyeni: "Beli",dellTelefon: "123-123-12-12" },
    { dellPhoto: "proyekt dell.jpg", dellname: "dell 6 Desc", dellPrice: "2005", dellyeni: "Xeyr",dellTelefon: "123-123-12-12" },
    { dellPhoto: "proyekt dell.jpg", dellname: "dell 7 Desc", dellPrice: "2006", dellyeni: "Beli",dellTelefon: "123-123-12-12" },
    { dellPhoto: "proyekt dell.jpg", dellname: "dell 8 Desc", dellPrice: "2007", dellyeni: "Xeyr",dellTelefon: "123-123-12-12" },
    { dellPhoto: "proyekt dell.jpg", dellname: "dell 9 Desc", dellPrice: "2008", dellyeni: "Beli",dellTelefon: "123-123-12-12" },
    { dellPhoto: "proyekt dell.jpg", dellname: "dell 10 Desc", dellPrice: "2090", dellyeni: "Xeyr",dellTelefon: "123-123-12-12" },
    { dellPhoto: "proyekt dell.jpg", dellname: "dell 11 Desc", dellPrice: "2090", dellyeni: "Beli",dellTelefon: "123-123-12-12" },
    { dellPhoto: "proyekt dell.jpg", dellname: "dell 12 Desc", dellPrice: "2000", dellyeni: "Xeyr",dellTelefon: "123-123-12-12" },
    { dellPhoto: "proyekt dell.jpg", dellname: "dell 13 Desc", dellPrice: "2040", dellyeni: "Beli",dellTelefon: "123-123-12-12" },
    { dellPhoto: "proyekt dell.jpg", dellname: "dell 14 Desc", dellPrice: "2003", dellyeni: "Xeyr",dellTelefon: "123-123-12-12" },
    { dellPhoto: "proyekt dell.jpg", dellname: "dell 15 Desc", dellPrice: "20005", dellyeni: "Beli",dellTelefon: "123-123-12-12" },
    { dellPhoto: "proyekt dell.jpg", dellname: "dell 16 Desc", dellPrice: "2060", dellyeni: "Xeyr",dellTelefon: "123-123-12-12" },
    { dellPhoto: "proyekt dell.jpg", dellname: "dell 17 Desc", dellPrice: "20060", dellyeni: "Beli",dellTelefon: "123-123-12-12" },
    { dellPhoto: "proyekt dell.jpg", dellname: "dell 18 Desc", dellPrice: "2080", dellyeni: "Xeyr",dellTelefon: "123-123-12-12" },
    { dellPhoto: "proyekt dell.jpg", dellname: "dell 19 Desc", dellPrice: "4700", dellyeni: "Beli",dellTelefon: "123-123-12-12" },
    { dellPhoto: "proyekt dell.jpg", dellname: "dell 20 Desc", dellPrice: "2500", dellyeni: "Xeyr",dellTelefon: "123-123-12-12" }
    ]
    
    function  dellmakebox() {
        $(".computers").empty();
        for (let i = 0; i < dellArr.length; i++) {
           
            let txt = ` <div class="col-3">
                   <div class="box">
                   <img src="${dellArr[i].dellPhoto}" alt="">
                    <p>Ad: <span>${dellArr[i].dellname}</span></p>
                    <p>Price: <span>${dellArr[i].dellPrice}</span></p>
                    <p>Yeni: <span>${dellArr[i].dellyeni}</span></p>
                    <p>Telefon: <span>${dellArr[i].dellTelefon}</span></p>
                    <button btn-id='${i}' class='etrafli class="btn btn-primary"'>Etrafli</button>
                    </div>
                    </div>`;
                    $(".computers").append(txt);
                    
        }
        localStorage.setItem('dellArr', JSON.stringify(dellArr))
    
        $('.dlt').click(function() {
            let index = $(this).attr('btn-id')
                // console.log(index);
            dellArr.splice(index, 1)
         dellmakebox()
    
        })
    }
    
    $("#list-dell-list").click(function () {
       
        dellmakebox()
    })

    
    