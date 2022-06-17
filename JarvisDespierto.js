
// var ing = "jarvis estas despierto";
// var busca = "jarvis";
// var busca1 = "despierto";
// console.log(ing);
// var jarvis = 0;
// var escucha = ing.search(busca); //retorna el valor de donde esta la palabra, si no lo encuentra es -1
// var escucha1 = ing.search(busca1);

// if(escucha < 0){
//     var saludo = document.getElementById('despierto');
//     saludo.play();
// }else{
//     if(escucha1 > 0){
//         var saludo = document.getElementById('despierto');
//         saludo.play();
//     //activa escucha de espera de acción llamar a la función de escucha function acciones()
//     }
// }

(function(){
    let escuchando = function(){
        let rec;
            if(!("webkitSpeechRecognition" in window)){ //si el navegador no puede usar el Mic, lanza alerta.
                   alert("Tu navegador no reconoce la entrada de microfono. Usa Google Chrome");
                }else{
                 rec = new webkitSpeechRecognition(); //capturo lo obtenido por Mic y guardo el valor en rec
                 rec.lang = "es-AR"; //lenguaje español argentino
                 rec.continuous = true;
                 rec.interim = true;
                 rec.addEventListener('result', iniciar);
                }
                function iniciar(event){
                    for(i = event.resultIndex; i < event.resultIndex.length; i++){
                        let ing = event.results[i][0].transcript; //la escucha de Mic
                        var busca = "jarvis";
                        var busca1 = "despierto";
                        console.log(ing);
                        var jarvis = 0;
                        var escucha = ing.search(busca); //retorna el valor de donde esta la palabra, si no lo encuentra es -1
                        var escucha1 = ing.search(busca1);

                        if(escucha < 0){
                            var saludo = document.getElementById('despierto');
                            saludo.play();
                            rec1();
                        }else{
                            if(escucha1 > 0){
                                var saludo = document.getElementById('despierto');
                                saludo.play();
                                rec1();
                            }
                        }
                        let rec1 = new webkitSpeechRecognition(); //escucha para acciones
                            rec1.lang = 'es-AR';
                            rec1.continuous = true;
                            rec1.interim = true;
                            rec1.addEventListener('result', iniciar1);
                            function iniciar1(){
                                for(i = event.resultIndex; i < event.results.length; i++){
                                    //aca el arreglo name
                                    var  icon1 = document.getElementById('icon1');
                                    icono1 = icon1.getAttribute('name'),
                                    icon2 = document.getElementById('icon2'), 
                                    icono2 = icon2.getAttribute('name'),              
                                    icon3 = document.getElementById('icon3'),              
                                    icono3 = icon3.getAttribute('name'),                   
                                    icon4 = document.getElementById('icon4'),   
                                    icono4 = icon4.getAttribute('name'),
                                    icon5 = document.getElementById('icon5'),   
                                    icono5 = icon5.getAttribute('name'),
                                    icon6 = document.getElementById('icon6'),  
                                    icono6 = icon6.getAttribute('name'),       
                                    icon7 = document.getElementById('icon7'),   
                                    icono7 = icon7.getAttribute('name'),
                                    icon8 = document.getElementById('icon8'),   
                                    icono8 = icon8.getAttribute('name'),
                                    icon9 = document.getElementById('icon9'),  
                                    icono9 = icon9.getAttribute('name'),
                                    icon10 = document.getElementById('icon10'),   
                                    icono10 = icon10.getAttribute('name'), 
                                    icon11 = document.getElementById('icon11'),   
                                    icono11 = icon11.getAttribute('name'),
                                    icon12 = document.getElementById('icon12'),   
                                    icono12 = icon12.getAttribute('name'),
                                    icon13 = document.getElementById('icon13'),   
                                    icono13 = icon13.getAttribute('name'),
                                    icon14 = document.getElementById('icon14'),   
                                    icono14 = icon14.getAttribute('name'),
                                    icon15 = document.getElementById('icon15'),  
                                    icono15 = icon15.getAttribute('name'),
                                    icon16 = document.getElementById('muteBoton'),   
                                    icono16 = icon16.getAttribute('name'),
                                    icon17 = document.getElementById('icon17'),  
                                    icono17 = icon17.getAttribute('name'),
                                    icon18 = document.getElementById('icon18'), 
                                    icono18 = icon18.getAttribute('name'), 
                                    icon19 = document.getElementById('icon19'),   
                                    icono19 = icon19.getAttribute('name'),
                                    icon20 = document.getElementById('icon20'),  
                                    icono20 = icon20.getAttribute('name'),
                                    icon21 = document.getElementById('icon21'),    
                                    icono21 = icon21.getAttribute('name'), 
                                    icon22 = document.getElementById('icon22'),   
                                    icono22 = icon22.getAttribute('name');
                                    let arregloName = [icono1, icono2, icono3, icono4, icono5, icono6, icono7, 
                                    icono8, icono9, icono10, icono11, icono12, icono13, icono14, icono15, 
                                    icono16, icono17, icono18, icono19, icono20, icono21, icono22]; //arregloName de texto
                                    //aca el arreglo id .click
                                    let id1 = document.getElementById('i1'),
                                    id2 = document.getElementById('i2'),
                                    id3 = document.getElementById('i3'),
                                    id4 = document.getElementById('i4'),
                                    id5 = document.getElementById('i5'),
                                    id6 = document.getElementById('i6'),
                                    id7 = document.getElementById('i7'),
                                    id8 = document.getElementById('i8'),
                                    id9 = document.getElementById('i9'),
                                    id10 = document.getElementById('i10'),
                                    id11 = document.getElementById('i11'),
                                    id12 = document.getElementById('i12'),
                                    id13 = document.getElementById('i13'),
                                    id14 = document.getElementById('i14'),
                                    id15 = document.getElementById('i15'),
                                    id16 = document.getElementById('parlante'),
                                    id17 = document.getElementById('i17'),
                                    id18 = document.getElementById('i18'),
                                    id19 = document.getElementById('i19'),
                                    id20 = document.getElementById('i20'),
                                    id21 = document.getElementById('i21'),
                                    id22 = document.getElementById('i22');
                                    let arregloId = [id1, id2, id3, id4, id5, id6, id7, id8, id9,id10, 
                                    id11, id12, id13, id14, id15, id16, id17, id18, id19, id20, id21, id22];
                                    let ing1 = "youtube"
                                    //let ing1 = event.results[i][0].transcript; //ingreso "abrir twitch"
                                    let accion = ing1.search(arregloName[0]); //en el arreglo [0] existe la palabra twitch
//para el arrgloName[0], que es twitch, dale click a su id
                                        for (x = 0; x < accion; x++){
                                            let bus = ing1.search(arregloName[x]);
                                            if(bus > 0){
                                        arregloId[x].click();
                                            }else{x++};
                                        }
                                }
                            } 
                        rec1.start();                       
                    }
                }
        rec.start();
    };
    escuchando();
    let intervaloEscucha = setInterval(escuchando, 10000);
}());
