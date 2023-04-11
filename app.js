(function () {
  var loanny = function () {
    var maeley = new Date, voncil = maeley.getHours(), jessabell, jauron = maeley.getMinutes(), nysaiah = maeley.getSeconds(), senad = maeley.getDay(), dylani = maeley.getDate(), amiia = maeley.getMonth(), jacyn = maeley.getFullYear();
    var sequena = document.getElementById("horas"), juella = document.getElementById("minutos"), huk = document.getElementById("segundos"), brookston = document.getElementById("ampm"), ryhanna = document.getElementById("diaSemana"), abriannah = document.getElementById("dia"), kriselle = document.getElementById("mes"), laveeda = document.getElementById("year");
    var sharrone = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    ryhanna.textContent = sharrone[senad];
    abriannah.textContent = dylani;
    var brandeis = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    kriselle.textContent = brandeis[amiia];
    laveeda.textContent = jacyn;
    if (voncil >= 12) {
      voncil = voncil - 12;
      jessabell = "PM";
    } else {
      jessabell = "AM";
    }
    ;
    if (voncil == 0) {
      voncil = 12;
    }
    ;
    sequena.textContent = voncil;
    brookston.textContent = jessabell;
    if (jauron < 10) {
      jauron = "0" + jauron;
    }
    ;
    if (nysaiah < 10) {
      nysaiah = "0" + nysaiah;
    }
    ;
    huk.textContent = nysaiah;
    juella.textContent = jauron;
    if (voncil == 7 && jauron == 0 && nysaiah == 0 && jessabell == "AM") {
      let naylie = document.getElementById("alarma");
      naylie.play();
    }
  };
  loanny();
  var cletys = setInterval(loanny, 1e3);
}());
var music = document.getElementById("music");
var parlante = document.getElementById("parlante");
parlante.addEventListener("click", mutear, false);
function mutear() {
  if (!music.paused) {
    music.pause();
  } else {
    music.play();
  }
}
function repro() {
  var kiwanna = document.getElementById("audio");
  var anthoni = document.addEventListener("mouseover", kiwanna.play());
  kiwanna.play();
}
function widget1() {
  var ellesyn = document.addEventListener("mouseover", biftu());
  function biftu() {
    var hitomi = document.getElementById("pObjetivo");
    var deaundray = document.getElementById("icon1");
    var danyll = deaundray.getAttribute("name");
    hitomi.textContent = danyll;
  }
}
function widget2() {
  var srujan = document.addEventListener("mouseover", deajia());
  function deajia() {
    var tabiatha = document.getElementById("pObjetivo");
    var elyssia = document.getElementById("icon2");
    var thanos = elyssia.getAttribute("name");
    tabiatha.textContent = thanos;
  }
}
function widget3() {
  var javante = document.addEventListener("mouseover", beauty());
  function beauty() {
    var griff = document.getElementById("pObjetivo");
    var maritzabel = document.getElementById("icon3");
    var vien = maritzabel.getAttribute("name");
    griff.textContent = vien;
  }
}
function widget4() {
  var brenisha = document.addEventListener("mouseover", celiana());
  function celiana() {
    var rolman = document.getElementById("pObjetivo");
    var raeley = document.getElementById("icon4");
    var zaevon = raeley.getAttribute("name");
    rolman.textContent = zaevon;
  }
}
function widget5() {
  var derriah = document.addEventListener("mouseover", joquavious());
  function joquavious() {
    var jalijah = document.getElementById("pObjetivo");
    var deqa = document.getElementById("icon5");
    var raevon = deqa.getAttribute("name");
    jalijah.textContent = raevon;
  }
}
function widget6() {
  var araminta = document.addEventListener("mouseover", taela());
  function taela() {
    var nashly = document.getElementById("pObjetivo");
    var brocha = document.getElementById("icon6");
    var dardi = brocha.getAttribute("name");
    nashly.textContent = dardi;
  }
}
function widget7() {
  var razariah = document.addEventListener("mouseover", yoshio());
  function yoshio() {
    var amile = document.getElementById("pObjetivo");
    var dessire = document.getElementById("icon7");
    var nataniel = dessire.getAttribute("name");
    amile.textContent = nataniel;
  }
}
function widget8() {
  var lessie = document.addEventListener("mouseover", alyne());
  function alyne() {
    var marzella = document.getElementById("pObjetivo");
    var tyreeq = document.getElementById("icon8");
    var jaxun = tyreeq.getAttribute("name");
    marzella.textContent = jaxun;
  }
}
function widget9() {
  var arlaine = document.addEventListener("mouseover", siryah());
  function siryah() {
    var britnie = document.getElementById("pObjetivo");
    var shaqua = document.getElementById("icon9");
    var valentino = shaqua.getAttribute("name");
    britnie.textContent = valentino;
  }
}
function widget10() {
  var jaiceon = document.addEventListener("mouseover", sharva());
  function sharva() {
    var drakar = document.getElementById("pObjetivo");
    var angenetta = document.getElementById("icon10");
    var valerine = angenetta.getAttribute("name");
    drakar.textContent = valerine;
  }
}
function widget11() {
  var regana = document.addEventListener("mouseover", tanicka());
  function tanicka() {
    var pepe = document.getElementById("pObjetivo");
    var keeston = document.getElementById("icon11");
    var clione = keeston.getAttribute("name");
    pepe.textContent = clione;
  }
}
function widget12() {
  var naszier = document.addEventListener("mouseover", justino());
  function justino() {
    var marabel = document.getElementById("pObjetivo");
    var chrystiana = document.getElementById("icon12");
    var mehran = chrystiana.getAttribute("name");
    marabel.textContent = mehran;
  }
}
function widget13() {
  var lawaun = document.addEventListener("mouseover", garl());
  function garl() {
    var dorathy = document.getElementById("pObjetivo");
    var tahni = document.getElementById("icon13");
    var murdock = tahni.getAttribute("name");
    dorathy.textContent = murdock;
  }
}
function widget14() {
  var hughlene = document.addEventListener("mouseover", ellyette());
  function ellyette() {
    var marceda = document.getElementById("pObjetivo");
    var tashiona = document.getElementById("icon14");
    var colley = tashiona.getAttribute("name");
    marceda.textContent = colley;
  }
}
function widget15() {
  var dashanta = document.addEventListener("mouseover", makston());
  function makston() {
    var elee = document.getElementById("pObjetivo");
    var garit = document.getElementById("icon15");
    var raeleen = garit.getAttribute("name");
    elee.textContent = raeleen;
  }
}
function widget16() {
  var maddock = document.addEventListener("mouseover", kie());
  function kie() {
    var carmindy = document.getElementById("pObjetivo");
    var markelle = document.getElementById("muteBoton");
    var jaxper = markelle.getAttribute("name");
    carmindy.textContent = jaxper;
  }
}
function widget17() {
  var phenix = document.addEventListener("mouseover", talae());
  function talae() {
    var jalexia = document.getElementById("pObjetivo");
    var rotunda = document.getElementById("icon17");
    var rakira = rotunda.getAttribute("name");
    jalexia.textContent = rakira;
  }
}
function widget18() {
  var asaan = document.addEventListener("mouseover", sharleen());
  function sharleen() {
    var franes = document.getElementById("pObjetivo");
    var messias = document.getElementById("icon18");
    var jeriann = messias.getAttribute("name");
    franes.textContent = jeriann;
  }
}
function widget19() {
  var rachelle = document.addEventListener("mouseover", agron());
  function agron() {
    var brihanna = document.getElementById("pObjetivo");
    var violet = document.getElementById("icon19");
    var katelan = violet.getAttribute("name");
    brihanna.textContent = katelan;
  }
}
function widget20() {
  var jasmynne = document.addEventListener("mouseover", daeshun());
  function daeshun() {
    var treygan = document.getElementById("pObjetivo");
    var jeanettie = document.getElementById("icon20");
    var daguan = jeanettie.getAttribute("name");
    treygan.textContent = daguan;
  }
}
function widget21() {
  var riordan = document.addEventListener("mouseover", agostina());
  function agostina() {
    var jaquil = document.getElementById("pObjetivo");
    var lolabelle = document.getElementById("icon21");
    var akzel = lolabelle.getAttribute("name");
    jaquil.textContent = akzel;
  }
}
function widget22() {
  var apples = document.addEventListener("mouseover", ameriah());
  function ameriah() {
    var furlon = document.getElementById("pObjetivo");
    var izacc = document.getElementById("icon22");
    var nichlas = izacc.getAttribute("name");
    furlon.textContent = nichlas;
  }
}
function hide() {
  var jaruis = document.addEventListener("mouseover", raenah());
  function raenah() {
    var tahtianna = document.getElementById("pObjetivo");
    tahtianna.textContent = "J.A.R.V.I.S";
  }
}
