function carregar(){
    var msg = window.document.getElementById('empresa')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //msg.innerText = `Agora são ${hora} horas. `  
    if (hora >= 0 && hora <12){
        //Bom dia!
        img.src = 'img/facebook.png'
        document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora <18 ){
        //Boa tarde!
        img.src = 'img/totvs.png'
        document.body.style.background = '#4682B4'
    }else{
        //Boa noite!
        mg.src = 'img/fluig.jpg'
        document.body.style.background = '#515154'
    }
}