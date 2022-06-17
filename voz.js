function JARVIS(){
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
   
   function iniciar (event){
      for(var i = event.resultIndex; i < event.results.length; i++){
         let ing1 = event.results[i][0].transcript;
         console.log("Se ingresó por micrófono: "+ing1);
         // console.log(typeof(ing));
         let ing = ing1.toLowerCase();
         let patronAbrir = ["abrir", "abramos", "abre", "abras", "abrime", "ábreme"];
         let patronDespierto = ["estás despierto", "estás ahí", "estas ahi"];
         let patronPagina = ["twitch", "youtube", "binance", "cuevana", "mega peliculas", "pelis now", "netflix",
                            "whatsapp", "linkedin", "facebook", "instagram", "telegram", "twitter", "discord",
                            "mega", "pausar música", "google", "gmail", "tik tok", "mercadolibre", 
                            "xbox", "microsoft", "spotify"];
         let patronId = ["i1", "i2", "i3", "i4", "i5", "i6", "i7", "i8", "i9", "i10", "i11",
                        "i12", "i13", "i14", "i15", "parlante", "i17", "i18", "i19", "i20",
                        "i21", "i22", "spotify"];
         let patronHostil = ["mata a", "que mates","lastimar a", "hackea a", "hackees a", "hackear a"];
         let patronSoy = ["quién eres", "quién sos", "hola"];
         let patronQue = ["qué eres", "qué sos"];
         let patronMusica = ["apagar música", "silencio", "desactivar música", "silenciar música", "pausa",
                                 "pausar música", "detener música"];
         let patronRepro = ["reproducir música", "tocar música", "reproducir"];
         let patronGrabar =["detener grabación", "parar grabación", "dejar de grabar"];
         let patronBuscar = ["buscar en ", "quiero buscar en ", "busca en ", "busquemos en ","quiero que me busques ",
                             "quiero que busques "];
         let patronCerrar = ["cerrar", "cerremos", "cerrame", "cierra", "cierrame"];
         for (var a = 0; a < patronAbrir.length; a++){//acciones
               let abrir = ing.includes(patronAbrir[a]);
               if(abrir == true){
                  for(y = 0; y < patronPagina.length; y++){
                     let pagina = ing.includes(patronPagina[y]);
                     if(pagina == true){
                        document.getElementById(patronId[y]).click();
                        let listo = document.getElementById('listo');
                        listo.play();
                     };
                  }
               }
            }
         for (var d = 0; d < patronDespierto.length; d++){//despierto
               let despierto1 = ing.includes(patronDespierto[d]);
               if(despierto1 == true){
               let despierto = document.getElementById('despierto');
               despierto.play();
               }
            }
         for(var h = 0; h < patronHostil.length; h++){//intenciones hostiles
               let hostil = ing.includes(patronHostil[h]);
               if(hostil == true){
                  let hostilidad = document.getElementById('hostilidad');
                  hostilidad.play();
               }
            }
         for(var s = 0; s < patronSoy.length; s++){//ser
               let soy = ing.includes(patronSoy[s]);
               if(soy == true){
                  let ser = document.getElementById('soyJarvis');
                  ser.play();
               }
            }
         for(var q = 0; q <= patronQue.length; q++){//soy
               let que = ing.includes(patronQue[q]);
               if(que == true){
                  let eres = document.getElementById('soyUnPrograma');
                  eres.play();
               }
            }
         for(var m = 0; m <= patronMusica.length; m++){//reproducir y apagar ac dc
               let musica = ing.includes(patronMusica[m]);
               let music = document.getElementById('music');
               if(musica == true){
                  if(!music.paused){
                     music.pause();
                  }
               }
            }
         for(var r = 0; r <= patronRepro.length; r++){//audio hasta luego
               let reprod = ing.includes(patronRepro[r]);
               let repro = document.getElementById('music');
               if (reprod == true){
                 repro.play();
               }
            }
         for(var g = 0; g <= patronGrabar.length; g++){
               let grabar = ing.includes(patronGrabar[g]);
               let grabacion = document.getElementById('novedad');
               if (grabar == true){
                  grabacion.play();
               }
            }
         for(var b = 0; b <= patronBuscar.length; b++){//buscar en páginas
               let buscar = ing.includes(patronBuscar[b]);
               let bGoogle = ing.includes("google");
               let bTwitch = ing.includes("twitch");
               let bYouTube = ing.includes("youtube");
               let bCuevana = ing.includes("cuevana");
               let bNetflix = ing.includes("netflix");
               let bLinkedIn = ing.includes("linkedin");
               let bFacebook = ing.includes("facebook");
               let bInstagram = ing.includes("instagram");
               let bTwitter = ing.includes("twitter");
               let bTikTok = ing.includes("tik tok");
               let bMercadolibre = ing.includes('mercadolibre');
               let bSpotify = ing.includes("spotify");
               if(buscar == true && bGoogle == true){
                  let longGoogle = patronBuscar[b].length+7;
                  let strGoogle = ing.substr(longGoogle, 1000);
                  window.open('https://www.google.com/search?q='+strGoogle+'','_blank');
               }
               if(buscar == true && bTwitch == true){
                  let longTwitch = patronBuscar[b]+7;
                  let strTwitch = ing.substr(longTwitch, 1000);
                  window.open('https://www.twitch.tv/search?term='+strTwitch+'','_blank');
               }
               if(buscar == true && bYouTube == true){
                  let longYouTube = patronBuscar[b].length+8;
                  let strYouTube = ing.substr(longYouTube, 1000);
                  window.open('https://www.youtube.com/results?search_query='+strYouTube+'','_blank');
               }
               if(buscar == true && bCuevana == true){
                  let longCuevana = patronBuscar[b].length+8;
                  let strCuevana = ing.substr(longCuevana, 1000);
                  window.open('https://ver3.cuevana3.cc/?s='+strCuevana+'','_blank');
               }
               if(buscar == true && bNetflix == true){
                  let longNetflix = patronBuscar[b].length+8;
                  let strNetflix = ing.substr(longNetflix, 1000);
                  window.open('https://www.netflix.com/search?q='+strNetflix+'','_blank');
               }
               if(buscar == true && bLinkedIn == true){
                  let longLinkedIn = patronBuscar[b].length+9;
                  let strLinkedIn = ing.substr(longLinkedIn, 1000);
                  window.open('https://www.linkedin.com/search/results/all/?keywords='+strLinkedIn+'','_blank');
               }
               if(buscar == true && bFacebook == true){
                  let longFacebook = patronBuscar[b].length+9;
                  let strFacebook = ing.substr(longFacebook, 1000);
                  window.open('https://www.facebook.com/search/top?q='+strFacebook+'','_blank');
               }
               if (buscar == true && bInstagram == true){
                  let longInstagram = patronBuscar[b].length+10;
                  let strInstagram = ing.substr(longInstagram, 1000);
                  window.open('https://www.instagram.com/explore/search/keyword/?q='+strInstagram+'','_blank');
               }
               if(buscar == true && bTwitter == true){
                  let longTwitter = patronBuscar[b].length+8;
                  let strTwitter = ing.substr(longTwitter, 1000);
                  window.open('https://twitter.com/search?q='+strTwitter+'','_blank');
               }
               if(buscar == true && bTikTok == true){
                  let longTikTok = patronBuscar[b].length+8;
                  let strTikTok = ing.substr(longTikTok,1000);
                  window.open('https://www.tiktok.com/search?q='+strTikTok+'','_blank');
               }
               if(buscar == true && bMercadolibre == true){
                  let longMercado = patronBuscar[b].length+13;
                  let strMercado = ing.substr(longMercado,1000);
                  window.open('https://listado.mercadolibre.com.ar/'+strMercado+'','_blank');
               }
               if(buscar == true && bSpotify == true){
                  let longSpotify = patronBuscar[b].length+8;
                  let strSpotify = ing.substr(longSpotify,1000);
                  window.open('https://open.spotify.com/search/'+strSpotify+'','_blank');
               }
            }
   }
}
rec.start();
}
let ingervalJARVIS = setInterval(JARVIS, 9000);




