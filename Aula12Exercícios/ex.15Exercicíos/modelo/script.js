function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique seus dados e tente novamente.')
    } else {
        var fsex= document.getElementsByName('radsex')
        var idade= ano - (fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
               gênero='Homem'
            if (idade >=0 && idade < 10) {
            // criança 
            img.setAttribute('src','fotobebe-m.png')
            } else if (idade<21) {
            //jovem
            img.setAttribute('src', 'fotojovem-m.png')
             } else if (idade<50) {
            //adulto
            img.setAttribute('src','fotohomem.png')
            } else {
            //idoso
            img.setAttribute('src','fotoidoso.png')
        }
        } else if (fsex[1].checked) {
            gênero='Mulher'
             if (idade >= 0 && idade < 10) {
             // criança 
             img.setAttribute('src','fotobebe-f.png')
            } else if (idade<21) {
             //jovem
             img.setAttribute('src', 'fotojovem-f.png')
             } else if (idade<50) {
             //adulta
             img.setAttribute('src', 'fotomulher.png')
            } else {
            //idosa
            img.setAttribute('src', 'fotoidosa.png')
         }
        }
        res.style.textAlign = 'center'
        res.innerHTML=`Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}