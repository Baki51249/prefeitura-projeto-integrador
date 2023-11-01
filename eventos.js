/*1 - cultural/ 2 - esportivo*/

var evento1 = {
    nome: "URT X MAMORÉ",
    desc: "A grande rivalidade patense entra em campo novamente, valendo o título da COPAPATO!",
    data: "10/10/2023 as 15h",
    local: "Estadio Zama Maciel Avenida Brasil, 1085",
    imagem: "img/eventos/classico11.jpg",
    classif: 2
}

var evento2 = {
    nome: "Mundial de Karatê",
    desc: "Valendo o cinturão/faixa, meio pesado, meio leve da copa nacional do Mundo!",
    data: "25/10/2023 às 12h",
    local: "Centro de Treinamento Ashtekan",
    imagem: "img/eventos/karate.jpg",
    classif: 2
}

var evento3 = {
    nome: "MEGA ENCONTRO AUTOMOTIVO",
    desc: "Mega encontro de carros rebaixados e som automotivo, onde o baixo e o grave se encontram ",
    data: "29/10/2023 de 9 às 18h",
    local: "Centro de Convençôes do Unipam, Patos de Minas - MG",
    imagem: "img/eventos/rebaixados.jpg",
    classif: 2
}

var evento4 = {
    nome: "Treinamento Funcional para a Saúde",
    desc: "Entender as características fisiológicas da mulher para a prescrição do treinamento de força seguro e eficiente.",
    data: "13/10/23 as 15:30",
    local: "Parque do Mocambo",
    imagem: "img/eventos/Academia.jpg",
    classif: 2
}

var evento5 = {
    nome: "Experiência rural",
    desc: "Evento voltado para a produção de hortaliças e prevenção de pragas.",
    data: "12/10/23 as 07:30",
    local: "Recanto da Zezé, São Gonçalo do Abaeté - MG",
    imagem: "img/eventos/roça.jpg",
    classif: 1
}

var evento6 = {
    nome: "Marcus Cirillo em Patos de Minas",
    desc: "Show de Stand-up mais caipira do momento.",
    data: "15/10/2023 às 22:00",
    local: "UNIPAM - Auditório Bloco N. Rua Major Gote, 808 - Caiçaras",
    imagem: "img/eventos/marcus-cirillo.webp",
    classif: 1
}

var evento7 = {
    nome: "Roupa Nova 40 Anos em Patos De Minas",
    desc: "Show de comemoração dos 40 anos de sucesso.",
    data: "20/10/2023 às 22h",
    local: "Centro de Convenções e Eventos UNIPAM - Patos De Minas - MG",
    imagem: "img/eventos/RoupaNova.jpg",
    classif: 1
}

var evento8 = {
    nome: "Show com PITTY em Patos De Minas",
    desc: "Show de comemoração dos 40 anos de sucesso. ",
    data: "25/11/2023 às 20h",
    local: "Centro de Convenções e Eventos UNIPAM - Patos De Minas - MG",
    imagem: "img/eventos/Pitty.jpg",
    classif: 1
}

var listaeventos = [evento1, evento2, evento3, evento4, evento5, evento6, evento7, evento8]
var listaElemento = document.getElementById("eventos")
var filtro = document.getElementById("filtro")

listaeventos.forEach(evento => {
    var li = document.createElement("li")
    li.className = "evento-item"
    li.innerHTML = `      
    <img src="${evento.imagem}" alt="">
    <div class="evento-texto">
      <div>
      
        <h2>${evento.nome}</h2>
        <p>${evento.desc} </p>
      </div>
      <ul>
        <li>
          <img src="img/icones/data.png" alt="imagem calendário">
          <p> ${evento.data} </p>
        </li>
        <li>
          <img src="img/icones/loc.png" alt="imagem de localizador">

          <p>${evento.local}</p>
        </li>
      </ul>
      <a href="https://www.ingressolive.com/login"target="_blank">
      <button class="button-82-pushable" role="button">
<span class="button-82-shadow"></span>
<span class="button-82-edge"></span>
<span class="button-82-front text">
Compre Agora

</span>
</button>
      </a>
    </div>`
    listaElemento.appendChild(li);
    if (evento.classif == 1) {
        li.style.backgroundColor = "#E4ECC5";
    }
    else {
        li.style.backgroundColor = "#508BAB"
    }
    console.log(li)
})

function filtrar() {
    if (filtro.value == 0) {
        listaElemento.innerHTML = ``
        listaeventos.forEach(evento => {
            var li = document.createElement("li")
            li.className = "evento-item"
            li.innerHTML = `      
            <img src="${evento.imagem}" alt="">
            <div class="evento-texto">
              <div>
     
                <h2>${evento.nome}</h2>
                <p>${evento.desc} </p>
              </div>
              <ul>
                <li>
                  <img src="img/icones/data.png" alt="imagem calendário">
                  <p> ${evento.data} </p>
                </li>
                <li>
                  <img src="img/icones/loc.png" alt="imagem de localizador">
        
                  <p>${evento.local}</p>
                </li>
              </ul>
              <a href="https://www.ingressolive.com/login"target="_blank">
              <button class="button-82-pushable" role="button">
<span class="button-82-shadow"></span>
<span class="button-82-edge"></span>
<span class="button-82-front text">
Compre Agora

</span>
</button>
              </a>
            </div>`
            listaElemento.appendChild(li);
            if (evento.classif == 1) {
                li.style.backgroundColor = "#E4ECC5";
            }
            else {
                li.style.backgroundColor = "#508BAB"
            }

        })
    }
    else if (filtro.value == 1) {
        listaElemento.innerHTML = ``
        listaeventos.forEach(evento => {
            if (evento.classif == 1) {
                var li = document.createElement("li")
                li.className = "evento-item"
                li.innerHTML = `      
            <img src="${evento.imagem}" alt="">
            <div class="evento-texto">
                <div>
               
                <h2>${evento.nome}</h2>
                <p>${evento.desc} </p>
                </div>
                <ul>
                <li>
                    <img src="img/icones/data.png" alt="imagem calendário">
                    <p> ${evento.data} </p>
                </li>
                <li>
                    <img src="img/icones/loc.png" alt="imagem de localizador">
        
                    <p>${evento.local}</p>
                </li>
                </ul>
                <a href="https://www.ingressolive.com/login"target="_blank">
                <button class="button-82-pushable" role="button">
  <span class="button-82-shadow"></span>
  <span class="button-82-edge"></span>
  <span class="button-82-front text">
    Compre Agora
  </span>
</button>
                </a>
            </div>`
                listaElemento.appendChild(li);
                if (evento.classif == 1) {
                    li.style.backgroundColor = "#E4ECC5";
                }
                else {
                    li.style.backgroundColor = "#508BAB"
                }
            }
        })
    }
    else if (filtro.value == 2) {
        listaElemento.innerHTML = ``
        listaeventos.forEach(evento=> {
            if (evento.classif == 2) {
                var li = document.createElement("li")
                li.className = "evento-item"
                li.innerHTML = `      
            <img src="${evento.imagem}" alt="">
            <div class="evento-texto">
                <div>
                <h2>${evento.nome}</h2>
                <p>${evento.desc} </p>
                </div>
                <ul>
                <li>
                    <img src="img/icones/data.png" alt="imagem calendário">
                    <p> ${evento.data} </p>
                </li>
                <li>
                    <img src="img/icones/loc.png" alt="imagem de localizador">
        
                    <p>${evento.local}</p>
                </li>
                </ul>
                <a href="https://www.ingressolive.com/login" target = "_blank">
                <button class = "button-82-pushable" role="button">
  <span class="button-82-shadow"></span>
  <span class="button-82-edge"></span>
  <span class="button-82-front text">
  Compre Agora

  </span>
</button>
                </a>

            </div>`
                listaElemento.appendChild(li);
                if (evento.classif == 1) {
                    li.style.backgroundColor = "#E4ECC5";
                }
                else {
                    li.style.backgroundColor = "#508BAB"
                }
            }
        })
    }
}

