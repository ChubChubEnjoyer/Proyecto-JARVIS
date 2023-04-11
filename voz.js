function JARVIS() {
  let sakaria;
  if (!("webkitSpeechRecognition" in window)) {
    alert("Tu navegador no reconoce la entrada de microfono. Usa Google Chrome");
  } else {
    sakaria = new webkitSpeechRecognition;
    sakaria.lang = "es-AR";
    sakaria.continuous = true;
    sakaria.interim = true;
    sakaria.addEventListener("result", myoshia);
  }
  ;
  function myoshia(ashlin) {
    for (var bianica = ashlin.resultIndex; bianica < ashlin.results.length; bianica++) {
      let kametra = ashlin.results[bianica][0].transcript;
      console.log("Se ingresó por micrófono: " + kametra);
      let salahuddin = kametra.toLowerCase();
      let zyriana = ["abrir", "abramos", "abre", "abras", "abrime", "ábreme"];
      let zkye = ["estás despierto", "estás ahí", "estas ahi"];
      let franchette = ["twitch", "youtube", "binance", "cuevana", "mega peliculas", "pelis now", "netflix", "whatsapp", "linkedin", "facebook", "instagram", "telegram", "twitter", "discord", "mega", "pausar música", "google", "gmail", "tik tok", "mercadolibre", "xbox", "microsoft", "spotify"];
      let aliani = ["i1", "i2", "i3", "i4", "i5", "i6", "i7", "i8", "i9", "i10", "i11", "i12", "i13", "i14", "i15", "parlante", "i17", "i18", "i19", "i20", "i21", "i22", "spotify"];
      let birklee = ["mata a", "que mates", "lastimar a", "hackea a", "hackees a", "hackear a"];
      let hutton = ["quién eres", "quién sos", "hola"];
      let izzibella = ["qué eres", "qué sos"];
      let ibad = ["apagar música", "silencio", "desactivar música", "silenciar música", "pausa", "pausar música", "detener música"];
      let lenci = ["reproducir música", "tocar música", "reproducir"];
      let araseli = ["detener grabación", "parar grabación", "dejar de grabar"];
      let kainoah = ["buscar en ", "quiero buscar en ", "busca en ", "busquemos en ", "quiero que me busques ", "quiero que busques "];
      let nasi = ["cerrar", "cerremos", "cerrame", "cierra", "cierrame"];
      for (var beasley = 0; beasley < zyriana.length; beasley++) {
        let beautrice = salahuddin.includes(zyriana[beasley]);
        if (beautrice == true) {
          for (y = 0; y < franchette.length; y++) {
            let luisandres = salahuddin.includes(franchette[y]);
            if (luisandres == true) {
              document.getElementById(aliani[y]).click();
              let gabrielalexande = document.getElementById("listo");
              gabrielalexande.play();
            }
          }
        }
      }
      ;
      for (var hermela = 0; hermela < zkye.length; hermela++) {
        let leia = salahuddin.includes(zkye[hermela]);
        if (leia == true) {
          let bernalee = document.getElementById("despierto");
          bernalee.play();
        }
      }
      ;
      for (var felicha = 0; felicha < birklee.length; felicha++) {
        let thida = salahuddin.includes(birklee[felicha]);
        if (thida == true) {
          let appie = document.getElementById("hostilidad");
          appie.play();
        }
      }
      ;
      for (var genele = 0; genele < hutton.length; genele++) {
        let jomanda = salahuddin.includes(hutton[genele]);
        if (jomanda == true) {
          let charrissa = document.getElementById("soyJarvis");
          charrissa.play();
        }
      }
      ;
      for (var mcguire = 0; mcguire <= izzibella.length; mcguire++) {
        let delyza = salahuddin.includes(izzibella[mcguire]);
        if (delyza == true) {
          let janeicia = document.getElementById("soyUnPrograma");
          janeicia.play();
        }
      }
      ;
      for (var jaelyn = 0; jaelyn <= ibad.length; jaelyn++) {
        let chalei = salahuddin.includes(ibad[jaelyn]);
        let lavont = document.getElementById("music");
        if (chalei == true) {
          if (!lavont.paused) {
            lavont.pause();
          }
        }
      }
      ;
      for (var stanleigh = 0; stanleigh <= lenci.length; stanleigh++) {
        let jayland = salahuddin.includes(lenci[stanleigh]);
        let lyanie = document.getElementById("music");
        if (jayland == true) {
          lyanie.play();
        }
      }
      ;
      for (var brycie = 0; brycie <= araseli.length; brycie++) {
        let sammy = salahuddin.includes(araseli[brycie]);
        let cion = document.getElementById("novedad");
        if (sammy == true) {
          cion.play();
        }
      }
      ;
      for (var jarryn = 0; jarryn <= kainoah.length; jarryn++) {
        let sammatha = salahuddin.includes(kainoah[jarryn]);
        let pendleton = salahuddin.includes("google");
        let reathel = salahuddin.includes("twitch");
        let milene = salahuddin.includes("youtube");
        let sofya = salahuddin.includes("cuevana");
        let jasmeh = salahuddin.includes("netflix");
        let kyber = salahuddin.includes("linkedin");
        let jaedan = salahuddin.includes("facebook");
        let thurza = salahuddin.includes("instagram");
        let nuhamin = salahuddin.includes("twitter");
        let shannen = salahuddin.includes("tik tok");
        let jermy = salahuddin.includes("mercadolibre");
        let tymon = salahuddin.includes("spotify");
        if (sammatha == true && pendleton == true) {
          let javontai = kainoah[jarryn].length + 7;
          let kynna = salahuddin.substr(javontai, 1e3);
          window.open("https://www.google.com/search?q=" + kynna + "", "_blank");
        }
        ;
        if (sammatha == true && reathel == true) {
          let shanissa = kainoah[jarryn] + 7;
          let sharna = salahuddin.substr(shanissa, 1e3);
          window.open("https://www.twitch.tv/search?term=" + sharna + "", "_blank");
        }
        ;
        if (sammatha == true && milene == true) {
          let charlain = kainoah[jarryn].length + 8;
          let leaisha = salahuddin.substr(charlain, 1e3);
          window.open("https://www.youtube.com/results?search_query=" + leaisha + "", "_blank");
        }
        ;
        if (sammatha == true && sofya == true) {
          let haide = kainoah[jarryn].length + 8;
          let traviss = salahuddin.substr(haide, 1e3);
          window.open("https://ver.cuevana.pro/busqueda/" + traviss + "", "_blank");
        }
        ;
        if (sammatha == true && jasmeh == true) {
          let gideon = kainoah[jarryn].length + 8;
          let jaxdyn = salahuddin.substr(gideon, 1e3);
          window.open("https://www.netflix.com/search?q=" + jaxdyn + "", "_blank");
        }
        ;
        if (sammatha == true && kyber == true) {
          let helene = kainoah[jarryn].length + 9;
          let math = salahuddin.substr(helene, 1e3);
          window.open("https://www.linkedin.com/search/results/all/?keywords=" + math + "", "_blank");
        }
        ;
        if (sammatha == true && jaedan == true) {
          let jahkobe = kainoah[jarryn].length + 9;
          let carlotta = salahuddin.substr(jahkobe, 1e3);
          window.open("https://www.facebook.com/search/top?q=" + carlotta + "", "_blank");
        }
        ;
        if (sammatha == true && thurza == true) {
          let lynus = kainoah[jarryn].length + 10;
          let kylia = salahuddin.substr(lynus, 1e3);
          window.open("https://www.instagram.com/explore/search/keyword/?q=" + kylia + "", "_blank");
        }
        ;
        if (sammatha == true && nuhamin == true) {
          let jimmya = kainoah[jarryn].length + 8;
          let kojak = salahuddin.substr(jimmya, 1e3);
          window.open("https://twitter.com/search?q=" + kojak + "", "_blank");
        }
        ;
        if (sammatha == true && shannen == true) {
          let ogle = kainoah[jarryn].length + 8;
          let ravonne = salahuddin.substr(ogle, 1e3);
          window.open("https://www.tiktok.com/search?q=" + ravonne + "", "_blank");
        }
        ;
        if (sammatha == true && jermy == true) {
          let ailish = kainoah[jarryn].length + 13;
          let maaha = salahuddin.substr(ailish, 1e3);
          window.open("https://listado.mercadolibre.com.ar/" + maaha + "", "_blank");
        }
        ;
        if (sammatha == true && tymon == true) {
          let leelynn = kainoah[jarryn].length + 8;
          let filisha = salahuddin.substr(leelynn, 1e3);
          window.open("https://open.spotify.com/search/" + filisha + "", "_blank");
        }
      }
    }
  }
  sakaria.start();
}
let ingervalJARVIS = setInterval(JARVIS, 9e3);
