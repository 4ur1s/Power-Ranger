// JS de los menus\\
var xhtpp = new XMLHttpRequest();
xhtpp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        document.getElementById('menu-superior').outerHTML
        = this.responseText;
    }
}
xhtpp.open('GET','menu-superior.html',true);
xhtpp.send();

var xhtpp = new XMLHttpRequest();
xhtpp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        document.getElementById('menu-superior-admin').outerHTML
        = this.responseText;
    }
}
xhtpp.open('GET','menu-superior-admin.html',true);
xhtpp.send();

var xhtpp = new XMLHttpRequest();
xhtpp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        document.getElementById('menu-superior-usuario').outerHTML
        = this.responseText;
    }
}
xhtpp.open('GET','menu-superior-usuario.html',true);
xhtpp.send();

// JS DEL FOOTER \\
var foot = new XMLHttpRequest();
foot.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        document.getElementById('pie-pagina').innerHTML
        = this.responseText;
    }
};

foot.open('GET','pie-pagina.html',true);
foot.send();