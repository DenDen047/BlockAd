(function() {
    // get URL
    var url = document.URL;
    url = url.split('/');

    // init
    var ad_div = [];

    ad_div.push(document.getElementById('octopus-scr'));

    if (url[url.length-2] == 'detail') {
        /*--- Preview Page ---*/
        // top ad
        var divs = document.getElementById("wrap");
        var div = divs.getElementsByTagName('div')[1];
        console.log('div');
        ad_div.push(div);

        // round ad
        ad_div.push(document.getElementsByClassName("movie-in-ad")[0]);
        ad_div.push(document.getElementsByClassName("adbox left")[0]);
        ad_div.push(document.getElementsByClassName("adbox right")[0]);
        ad_div.push(document.getElementById('ad_tsuibi'));
    }
    else {
        /*--- Search Page ---*/
        // banner bottom-right
        ad_div.push(document.getElementById('ad_tsuibi'));
        // top ad
        ad_div.push(document.getElementById("main2col").getElementsByTagName('div')[0]);
        // top article
        ad_div.push(document.getElementsByTagName("iframe")[0]);
        // article ad
        ad_div.push(document.getElementsByClassName("content_list")[0]);
        ad_div.push(document.getElementsByClassName("content_list")[2]);
        // preview box ad
        ad_div.push(document.getElementsByClassName("box")[3]);
    }

    // remove alll
    for (var i = 0; i < ad_div.length; i++) {
        del_element(ad_div[i]);
    }

    function del_element(element){
        try {
            element.parentNode.removeChild(element);
        }
        catch(e){}
    }
})();
