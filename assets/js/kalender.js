$('.card').click(function(){

    // set date header for card
    let id = $(this).attr("id")
    let content = cardContent[id-1]
   
    date = id + " December"
    
    let today = new Date();
    let currentMonth = today.getMonth();
    let currentDay = today.getDate();
    const isUnlocked = currentMonth > 11 || (currentMonth === 11 && currentDay >= parseInt(id));

    $("#kalender-date").text(date)

    // set card text content
    if (!isUnlocked) {
        let i = Math.floor(Math.random() * 2.5)
        let content = cheatContent[i]
        $("#modal-text").addClass("cheat-text").removeClass("secret-code")
        $("#modal-text2").hide()
        $("#modal-img").attr("src", content[1])
        $("#modal-text1").text(content[0])
    } else {
        $("#modal-text").removeClass("cheat-text").addClass("secret-code")
        $("#modal-textoned-backgroundt2").show().text("Super Secret Code: " + content[1])
        $("#modal-img").attr("src", content[2])
        $("#modal-text1").text(content[0])
    }

    $('#modal').modal('show')
})

cardContent = [
    [
        "Här var vi inte gamla! Tänk att vi har varit så där söta ;)",
        "",
        "assets/img/d1.jpg"
    ],
    [
        "Moa var i alla fall alltid glad - fast bildbevis på det saknas?",
        "",
        "assets/img/d2.jpg"
    ],
    [
        "Ibland var vi väldigt läskiga...",
        "",
        "assets/img/d3.jpg"
    ],
    [
        "Vad sysslar vi med här? Ingen aning!",
        "XTY4j",
        "assets/img/d4.jpg"
    ],
    [
        "Vilken barndom vi har haft - det var ju som att vara med i Barnen i Bullerbyn!",
        "kjCoK",
        "assets/img/d5.jpg"
    ],
    [
        "Hur många bad tror ni vi har ihop? Det är nog några stycken...",
        "eItUl",
        "assets/img/d6.jpg"
    ],
    [
        "Älskade Björnasjö! Så kul vi hade där tillsammans!",
        "1X7a8",
        "assets/img/d7.jpg"
    ],
    [
        "Som vi spexade! Kommer ni ihåg alla shower vi hade? De vuxna måste ha varit trötta på oss!",
        "BMO7B",
        "assets/img/d8.jpg"
    ],
    [
        "Världens sötaste pirater!",
        "7NzoJ",
        "assets/img/d9.jpg"
    ],
    [
        "Vem är det här då? Jo, lille Arvid som vi inte heller får glömma!",
        "i1Ou+",
        "assets/img/d10.jpg"
    ],
    [
        "Det känns som att det var lite vanligare att bara vara häxa eller djävul förr på Halloween... Vilken tur att man får vara vad man vill idag, allt från Harry Potter till bajskorv och prinsessa!",
        "dzmNN",
        "assets/img/d11.jpg"
    ],
    [
        "Här var vi på High Chaparall. Mamma har berättat att Noa blev så rädd när rånarna kom in i tåget och sa ''upp med händerna'' att han inte ville ta ner dem på jättelänge!",
        "ohNzV",
        "assets/img/d12.jpg"
    ],
    [
        "Sankta lucia, skänk mig en tia... Här var Nilsson-barnen ganska små!",
        "aAIal",
        "assets/img/d13.jpg"
    ],
    [
        "Här ser det ut som att vi är på resa! Undra vart vi ska...",
        "71NGj",
        "assets/img/d14.jpg"
    ],
    [
        "Noa och Alle är coolast, och har bevisligen alltid varit det!",
        "5cadu",
        "assets/img/d15.jpg"
    ],
    [
        "Här bygger vi snö-koja!",
        "0Rtgk",
        "assets/img/d16.jpg"
    ],
    [
        "Här är lille Arvid tom tomte och inte så gammal!",
        "/mvxs",
        "assets/img/d17.jpg"
    ],
     [
        "Alltså vilken sötnos!",
        "KcKu5",
        "assets/img/d18.jpg"
    ],
     [
        "Kan det här vara från någon marknad, tro? Tuff tuff!",
        "+Sefv",
        "assets/img/d19.jpg"
    ],
     [
        "Ska man tro datorns datum för den här bilden var det nyår 2003. Tiden går så fort!",
        "kApsZ",
        "assets/img/d20.jpg"
    ],
    [
        "Halloween, halloween, halloweeeeeeeeeeeeen!",
        "HTsvd",
        "assets/img/d21.jpg"
    ],
    [
        "Här firar vi nyår. Enligt datorn är året 2004. Jag är så glad att vi har fått fira så många högtider ihop!",
        "UujuL",
        "assets/img/d22.jpg"
    ],
    [
        "Vilka lantisar vi var! Jag älskar det!",
        "NG1lO",
        "assets/img/d23.jpg"
    ],
     [
        "Nyår, och vi var alla finklädda! Någon av er som har en boa idag? Det kanske är på gång att bli trendigt igen? GOD JUL PÅ ER!",
        "LsWC3",
        "assets/img/d24.jpg"
    ],
]

cheatContent = [
    [
        "Tomten säger att det inte är detta datum än!",
        "assets/img/cheat.jpg"
    ],
    [
        "Sluta försöka kolla på framtida datum!",
        "assets/img/cheat-2.jpg"
    ],
    [
        "Det är inte det här datumet än!",
        "assets/img/cheat.jpg"
    ]
]