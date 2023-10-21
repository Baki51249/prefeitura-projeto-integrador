/*1 - cultural/ 2 - esportivo*/

var evento1 = {
    nome: "URT X MAMORÉ",
    desc: "A grande rivalidade patense entra em campo novamente, valendo o título da COPAPATO!",
    data: "10/10/2023 as 15h",
    local: "Estadio Zama Maciel Avenida Brasil, 1085",
    imagem: "img/classico11.jpg",
    classif: 2 
}

var evento2 = {
    nome: "Mundial de Karatê-Valendo cordão de ouro 5º dan",
    desc: "Valendo o cinturão/faixa, meio pesado, meio leve da copa nacional do Mundo!",
    data: "25/10/2023 às 12h",
    local: "Centro de Treinamento Ashtekan",
    imagem: "img/IMG-20230930-WA0033.jpg",
    classif: 2 
}

var evento3 = {
    nome: "MEGA ENCONTRO AUTOMOTIVO",
    desc: "Mega encontro de carros rebaixados e som automotivo, onde o baixo e o grave se encontram ",
    data: "29/10/2023 de 9 às 18h",
    local: "Centro de Convençôes do Unipam, Patos de Minas - MG",
    imagem: "img/IMG-20230930-WA0041.jpg",
    classif: 2 
}

var evento4 = {
    nome: "Treinamento Funcional para a Saúde",
    desc: "Entender as características anatômicas, fisiológicas e biomecânicas da mulher para a prescrição do treinamento de força seguro e eficiente. Prescrever o Treinamento Funcional baseado em aspectos teóricos e práticos.",
    data: "13/10/23 as 15:30",
    local: "Parque do Mocambo",
    imagem: "img/Academia.jpg",
    classif: 2
}

var evento5 = {
    nome: "Experiência rural",
    desc: "Evento voltado para a produção de hortaliças e prevenção de pragas.",
    data: "12/10/23 as 07:30",
    local: "Recanto da Zezé, São Gonçalo do Abaeté - MG",
    imagem: "img/Screenshot.jpg",
    classif: 1 
}

var evento6 = {
    nome: "Marcus Cirillo em Patos de Minas",
    desc: "Show de Stand-up mais caipira do momento.",
    data: "15/10/2023 às 22:00",
    local: "UNIPAM - Auditório Bloco N. Rua Major Gote, 808 - Caiçaras",
    imagem: "img/MarcusCirilo.jpg",
    classif: 1
}

var evento7 = {
    nome: "Roupa Nova 40 Anos em Patos De Minas",
    desc: "Show de comemoração dos 40 anos de sucesso.",
    data: "20/10/2023 às 22h",
    local: "Centro de Convenções e Eventos UNIPAM - Patos De Minas - MG",
    imagem: "img/RoupaNova.jpg",
    classif: 1
}

var evento8 = {
    nome: "Show com PITTY em Patos De Minas",
    desc: "Show de comemoração dos 40 anos de sucesso. ",
    data: "25/11/2023 às 20h",
    local: "Centro de Convenções e Eventos UNIPAM - Patos De Minas - MG",
    imagem: "img/Pitty.jpg",
    classif: 1
}

var listaeventos = [evento1, evento2, evento3, evento4, evento5, evento6, evento7, evento8]
var listaElemento = document.getElementById("eventos")
var filtro = document.getElementById("filtro")

listaeventos.forEach(evento=>{
    var li = document.createElement("li")
    li.className = "evento-item"
    li.innerHTML = `      
    <img src="${evento.imagem}" alt="">
    <div class="evento-texto">
      <div>
        <a href="https://www.ingressolive.com/login"target="_blank"><button >COMPRAR AGORA</button></a>
        <h2>${evento.nome}</h2>
        <p>${evento.desc} </p>
      </div>
      <ul>
        <li>
          <img src="img/data.png" alt="">
          <p> ${evento.data} </p>
        </li>
        <li>
          <img src="img/loc.png" alt="">

          <p>${evento.local}</p>
        </li>
      </ul>
    </div>`
    listaElemento.appendChild(li);
    if (evento.classif == 1){
        li.style.backgroundColor = "#E4ECC5";
    }
    else{
        li.style.backgroundColor = "#508BAB"
    }
    console.log(li)
})

function filtrar(){
    if (filtro.value == 0){
        listaElemento.innerHTML = ``
        listaeventos.forEach(evento=>{
            var li = document.createElement("li")
            li.className = "evento-item"
            li.innerHTML = `      
            <img src="${evento.imagem}" alt="">
            <div class="evento-texto">
              <div>
                <a href="https://www.ingressolive.com/login"target="_blank"><button >COMPRAR AGORA</button></a>
                <h2>${evento.nome}</h2>
                <p>${evento.desc} </p>
              </div>
              <ul>
                <li>
                  <img src="img/data.png" alt="">
                  <p> ${evento.data} </p>
                </li>
                <li>
                  <img src="img/loc.png" alt="">
        
                  <p>${evento.local}</p>
                </li>
              </ul>
            </div>`
            listaElemento.appendChild(li);
            if (evento.classif == 1){
                li.style.backgroundColor = "#E4ECC5";
            }
            else{
                li.style.backgroundColor = "#508BAB"
            }

        })
    }
else if (filtro.value == 1){
    listaElemento.innerHTML = ``
    listaeventos.forEach(evento=>{
        if (evento.classif == 1){
            var li = document.createElement("li")
            li.className = "evento-item"
            li.innerHTML = `      
            <img src="${evento.imagem}" alt="">
            <div class="evento-texto">
                <div>
                <a href="https://www.ingressolive.com/login"target="_blank"><button >COMPRAR AGORA</button></a>
                <h2>${evento.nome}</h2>
                <p>${evento.desc} </p>
                </div>
                <ul>
                <li>
                    <img src="img/data.png" alt="">
                    <p> ${evento.data} </p>
                </li>
                <li>
                    <img src="img/loc.png" alt="">
        
                    <p>${evento.local}</p>
                </li>
                </ul>
            </div>`
            listaElemento.appendChild(li);
            if (evento.classif == 1){
                li.style.backgroundColor = "#E4ECC5";
            }
            else{
                li.style.backgroundColor = "#508BAB"
            }
        }
    })
}
else if (filtro.value == 2){
    listaElemento.innerHTML = ``
    listaeventos.forEach(evento=>{
        if (evento.classif == 2){
            var li = document.createElement("li")
            li.className = "evento-item"
            li.innerHTML = `      
            <img src="${evento.imagem}" alt="">
            <div class="evento-texto">
                <div>
                <a href="https://www.ingressolive.com/login"target="_blank"><button >COMPRAR AGORA</button></a>
                <h2>${evento.nome}</h2>
                <p>${evento.desc} </p>
                </div>
                <ul>
                <li>
                    <img src="img/data.png" alt="">
                    <p> ${evento.data} </p>
                </li>
                <li>
                    <img src="img/loc.png" alt="">
        
                    <p>${evento.local}</p>
                </li>
                </ul>
            </div>`
            listaElemento.appendChild(li);
            if (evento.classif == 1){
                li.style.backgroundColor = "#E4ECC5";
            }
            else{
                li.style.backgroundColor = "#508BAB"
            }
        }
    })
}
}

