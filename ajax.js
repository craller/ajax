function ajax(method, url, flag, data, callback) {
    var app = null;
    if (window.XMLHttpRequest) {
        //非ie
        app = new XMLHttpRequest();
    } else {
        //ie
        app = new ActiveXObject('Microsoft.XMLHTTP');
    }
    if (method == "GET") {
        app.open(method, url + '?' + data, flag);
        app.send();
    } else if (method == "POST") {
        app.open(method, url, flag);
        app.setRequestHeader("Content-type", 'application/x-www-form-urlencoded');
        app.send(data);
    }
    app.onreadystatechange = function() {
        if (app.readyState == 4) {
            if (app.status == 200) {
                callback(app.responseText);
            }
        }
    }
}