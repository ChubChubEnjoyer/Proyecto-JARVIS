(function(){ //widget fecha + hora
   var actualizarHora = function(){
      var   fecha = new Date(),
            horas = fecha.getHours(),
            ampm,
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year = fecha.getFullYear();
      
      var   pHoras = document.getElementById('horas'),
            pMinutos = document.getElementById('minutos'),
            pSegundos = document.getElementById('segundos'),
            pAMPM = document.getElementById('ampm'),
            pDiaSemana = document.getElementById('diaSemana'),
            pDia = document.getElementById('dia'),
            pMes = document.getElementById('mes'),
            pYear = document.getElementById('year');

      var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
      pDiaSemana.textContent = semana[diaSemana];
      pDia.textContent = dia;
      var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
      
      pMes.textContent = meses[mes];
      pYear.textContent = year;
      if(horas >= 12){
         horas = horas -12;
         ampm = 'PM';
      }else{
         ampm = 'AM';
      }
      if (horas == 0){
         horas = 12;
      }
      pHoras.textContent = horas;
      pAMPM.textContent = ampm;
      if(minutos < 10){minutos = "0"+ minutos};
      if (segundos <10){segundos = "0"+ segundos};
      pSegundos.textContent = segundos;
      pMinutos.textContent = minutos;

      if(horas == 7 && minutos == 00 && segundos == 00 && ampm == 'AM'){ //alarma de las 7am
         let idAlarma = document.getElementById('alarma');
         idAlarma.play(); 
      }
      //pegar algo
      
   };
   actualizarHora();
   var intervalo = setInterval(actualizarHora, 1000);
}());

var music = document.getElementById('music');
var parlante = document.getElementById('parlante');
parlante.addEventListener('click', mutear, false);
function mutear(){
   if(!music.paused){
      music.pause();
   }else{
      music.play();
   }
}

function repro(){
   var audio = document.getElementById('audio');
   var sound = document.addEventListener('mouseover', audio.play());
   audio.play();
}

function widget1(){ //widget nombre de icono
   var target = document.addEventListener('mouseover', actualizarWidget());
   function actualizarWidget(){
   var pObjetivo = document.getElementById('pObjetivo'); //obtengo valor de P
   var  icon1 = document.getElementById('icon1'); //obtengo ID de icono1   
   var  icono1 = icon1.getAttribute('name'); //obtengo el nombre de icono
   pObjetivo.textContent = icono1;
   }
}

function widget2(){ //widget nombre de icono
   var target = document.addEventListener('mouseover', actualizarWidget());
   function actualizarWidget(){
   var pObjetivo = document.getElementById('pObjetivo'); //obtengo valor de P
   var  icon2 = document.getElementById('icon2'); //obtengo ID de icono1   
   var  icono2 = icon2.getAttribute('name'); //obtengo el nombre de icono
   pObjetivo.textContent = icono2;
   }
}
function widget3(){ //widget nombre de icono
   var target = document.addEventListener('mouseover', actualizarWidget());
   function actualizarWidget(){
   var pObjetivo = document.getElementById('pObjetivo'); //obtengo valor de P
   var  icon3 = document.getElementById('icon3'); //obtengo ID de icono1   
   var  icono3 = icon3.getAttribute('name'); //obtengo el nombre de icono
   pObjetivo.textContent = icono3;
   }
}
function widget4(){ //widget nombre de icono
   var target = document.addEventListener('mouseover', actualizarWidget());
   function actualizarWidget(){
   var pObjetivo = document.getElementById('pObjetivo'); //obtengo valor de P
   var  icon4 = document.getElementById('icon4'); //obtengo ID de icono1   
   var  icono4 = icon4.getAttribute('name'); //obtengo el nombre de icono
   pObjetivo.textContent = icono4;
   }
}
function widget5(){ //widget nombre de icono
   var target = document.addEventListener('mouseover', actualizarWidget());
   function actualizarWidget(){
   var pObjetivo = document.getElementById('pObjetivo'); //obtengo valor de P
   var  icon5 = document.getElementById('icon5'); //obtengo ID de icono1   
   var  icono5 = icon5.getAttribute('name'); //obtengo el nombre de icono
   pObjetivo.textContent = icono5;
   }
}
function widget6(){ //widget nombre de icono
   var target = document.addEventListener('mouseover', actualizarWidget());
   function actualizarWidget(){
   var pObjetivo = document.getElementById('pObjetivo'); //obtengo valor de P
   var  icon6 = document.getElementById('icon6'); //obtengo ID de icono1   
   var  icono6 = icon6.getAttribute('name'); //obtengo el nombre de icono
   pObjetivo.textContent = icono6;
   }
}
function widget7(){ //widget nombre de icono
   var target = document.addEventListener('mouseover', actualizarWidget());
   function actualizarWidget(){
   var pObjetivo = document.getElementById('pObjetivo'); //obtengo valor de P
   var  icon7 = document.getElementById('icon7'); //obtengo ID de icono1   
   var  icono7 = icon7.getAttribute('name'); //obtengo el nombre de icono
   pObjetivo.textContent = icono7;
   }
}
function widget8(){ //widget nombre de icono
   var target = document.addEventListener('mouseover', actualizarWidget());
   function actualizarWidget(){
   var pObjetivo = document.getElementById('pObjetivo'); //obtengo valor de P
   var  icon8 = document.getElementById('icon8'); //obtengo ID de icono1   
   var  icono8 = icon8.getAttribute('name'); //obtengo el nombre de icono
   pObjetivo.textContent = icono8;
   }
}
function widget9(){ //widget nombre de icono
   var target = document.addEventListener('mouseover', actualizarWidget());
   function actualizarWidget(){
   var pObjetivo = document.getElementById('pObjetivo'); //obtengo valor de P
   var  icon9 = document.getElementById('icon9'); //obtengo ID de icono1   
   var  icono9 = icon9.getAttribute('name'); //obtengo el nombre de icono
   pObjetivo.textContent = icono9;
   }
}
function widget10(){ //widget nombre de icono
   var target = document.addEventListener('mouseover', actualizarWidget());
   function actualizarWidget(){
   var pObjetivo = document.getElementById('pObjetivo'); //obtengo valor de P
   var  icon10 = document.getElementById('icon10'); //obtengo ID de icono1   
   var  icono10 = icon10.getAttribute('name'); //obtengo el nombre de icono
   pObjetivo.textContent = icono10;
   }
}
function widget11(){ //widget nombre de icono
   var target = document.addEventListener('mouseover', actualizarWidget());
   function actualizarWidget(){
   var pObjetivo = document.getElementById('pObjetivo'); //obtengo valor de P
   var  icon11 = document.getElementById('icon11'); //obtengo ID de icono1   
   var  icono11 = icon11.getAttribute('name'); //obtengo el nombre de icono
   pObjetivo.textContent = icono11;
   }
}
function widget12(){ //widget nombre de icono
   var target = document.addEventListener('mouseover', actualizarWidget());
   function actualizarWidget(){
   var pObjetivo = document.getElementById('pObjetivo'); //obtengo valor de P
   var  icon12 = document.getElementById('icon12'); //obtengo ID de icono1   
   var  icono12 = icon12.getAttribute('name'); //obtengo el nombre de icono
   pObjetivo.textContent = icono12;
   }
}
function widget13(){ //widget nombre de icono
   var target = document.addEventListener('mouseover', actualizarWidget());
   function actualizarWidget(){
   var pObjetivo = document.getElementById('pObjetivo'); //obtengo valor de P
   var  icon13 = document.getElementById('icon13'); //obtengo ID de icono1   
   var  icono13 = icon13.getAttribute('name'); //obtengo el nombre de icono
   pObjetivo.textContent = icono13;
   }
}
function widget14(){ //widget nombre de icono
   var target = document.addEventListener('mouseover', actualizarWidget());
   function actualizarWidget(){
   var pObjetivo = document.getElementById('pObjetivo'); //obtengo valor de P
   var  icon14 = document.getElementById('icon14'); //obtengo ID de icono1   
   var  icono14 = icon14.getAttribute('name'); //obtengo el nombre de icono
   pObjetivo.textContent = icono14;
   }
}
function widget15(){ //widget nombre de icono
   var target = document.addEventListener('mouseover', actualizarWidget());
   function actualizarWidget(){
   var pObjetivo = document.getElementById('pObjetivo'); //obtengo valor de P
   var  icon15 = document.getElementById('icon15'); //obtengo ID de icono1   
   var  icono15 = icon15.getAttribute('name'); //obtengo el nombre de icono
   pObjetivo.textContent = icono15;
   }
}
function widget16(){ //widget nombre de icono
   var target = document.addEventListener('mouseover', actualizarWidget());
   function actualizarWidget(){
   var pObjetivo = document.getElementById('pObjetivo'); //obtengo valor de P
   var  icon16 = document.getElementById('muteBoton'); //obtengo ID de icono1   
   var  icono16 = icon16.getAttribute('name'); //obtengo el nombre de icono
   pObjetivo.textContent = icono16;
   }
}
function widget17(){ //widget nombre de icono
   var target = document.addEventListener('mouseover', actualizarWidget());
   function actualizarWidget(){
   var pObjetivo = document.getElementById('pObjetivo'); //obtengo valor de P
   var  icon17 = document.getElementById('icon17'); //obtengo ID de icono1   
   var  icono17 = icon17.getAttribute('name'); //obtengo el nombre de icono
   pObjetivo.textContent = icono17;
   }
}
function widget18(){ //widget nombre de icono
   var target = document.addEventListener('mouseover', actualizarWidget());
   function actualizarWidget(){
   var pObjetivo = document.getElementById('pObjetivo'); //obtengo valor de P
   var  icon18 = document.getElementById('icon18'); //obtengo ID de icono1   
   var  icono18 = icon18.getAttribute('name'); //obtengo el nombre de icono
   pObjetivo.textContent = icono18;
   }
}
function widget19(){ //widget nombre de icono
   var target = document.addEventListener('mouseover', actualizarWidget());
   function actualizarWidget(){
   var pObjetivo = document.getElementById('pObjetivo'); //obtengo valor de P
   var  icon19 = document.getElementById('icon19'); //obtengo ID de icono1   
   var  icono19 = icon19.getAttribute('name'); //obtengo el nombre de icono
   pObjetivo.textContent = icono19;
   }
}
function widget20(){ //widget nombre de icono
   var target = document.addEventListener('mouseover', actualizarWidget());
   function actualizarWidget(){
   var pObjetivo = document.getElementById('pObjetivo'); //obtengo valor de P
   var  icon20 = document.getElementById('icon20'); //obtengo ID de icono1   
   var  icono20 = icon20.getAttribute('name'); //obtengo el nombre de icono
   pObjetivo.textContent = icono20;
   }
}
function widget21(){ //widget nombre de icono
   var target = document.addEventListener('mouseover', actualizarWidget());
   function actualizarWidget(){
   var pObjetivo = document.getElementById('pObjetivo'); //obtengo valor de P
   var  icon21 = document.getElementById('icon21'); //obtengo ID de icono1   
   var  icono21 = icon21.getAttribute('name'); //obtengo el nombre de icono
   pObjetivo.textContent = icono21;
   }
}
function widget22(){ //widget nombre de icono
   var target = document.addEventListener('mouseover', actualizarWidget());
   function actualizarWidget(){
   var pObjetivo = document.getElementById('pObjetivo'); //obtengo valor de P
   var  icon22 = document.getElementById('icon22'); //obtengo ID de icono1   
   var  icono22 = icon22.getAttribute('name'); //obtengo el nombre de icono
   pObjetivo.textContent = icono22;
   }
}
function hide(){
   var target = document.addEventListener('mouseover', actualizarWidget());
   function actualizarWidget(){
      var pObjetivo = document.getElementById('pObjetivo');
      pObjetivo.textContent = "J.A.R.V.I.S";
   }
}

        