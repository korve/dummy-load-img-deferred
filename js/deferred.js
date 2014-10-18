/**
 * Created by andre (http://korve.github.io/) on 18.10.2014
 */

document.addEventListener("DOMContentLoaded", function(){

    var imgs = document.getElementsByTagName('img');
    for(var i = 0; i < imgs.length; i++)
    {
        imgs[i].src = imgs[i].src + '?cdn=true';
    }

}, false);