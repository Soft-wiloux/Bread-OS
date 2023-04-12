function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
     if ((new Date().getTime() - start) > milliseconds) {
      break;
     }
    }
   }


function go() {
    var user = document.getElementById('exampleInputEmail1');
    var pass = document.getElementById('exampleInputPassword1');

    

    window.location.href="/loading/loading.html";
    

    var user_data = user.value;
    var pass_data = pass.value;
}