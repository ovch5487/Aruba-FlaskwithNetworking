// (C) Copyright 2018 Hewlett Packard Enterprise Development LP.

$('.deviceInfo').ready(function () {
    var refresh = function () {
        deviceid = document.getElementById('deviceid').getAttribute('value');
        ostype = document.getElementById('ostype').getAttribute('value');
        stacktype = document.getElementById('stacktype').getAttribute('value');
        $("div[data-chart='deviceinfo']").load('showDevice?deviceid=' + deviceid + '&ostype=' + ostype + '&stacktype=' + stacktype);
    }
    setInterval(refresh, 5000);
    refresh();
});