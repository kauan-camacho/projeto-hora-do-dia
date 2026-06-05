
function carregar(){
    var msg = window.document.getElementById('msg')
    var p1 = window.document.getElementsByTagName ('p')[1]
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora <= 12) {
        //Bom dia 
        img.src = "img/foto-manha.png"
        p1.innerHTML = 'Bom Dia!'
        document.body.style.background = '#ffdea7'
    } else if (hora >= 12 && hora <= 18 ) {
        //Boa tarde
        img.src = "img/foto-tarde.png"
        p1.innerHTML = 'Boa Tarde!'
        document.body.style.background = '#da9856'
    } else {
        //Boa noite
        img.src = "img/foto-noite1.png"
        p1.innerHTML = 'Boa Noite!'
        document.body.style.background = '#727570'
    }
}