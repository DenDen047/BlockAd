(function() {
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    var observer = new MutationObserver(function() {
        // init
        var ad_div = []

        // top link list
        ad_div.push(document.getElementsByClassName("blogroll-wrapper")[0]);

        // del all ads
        for (var i = 0; i < ad_div.length; i++) {
            del_element(ad_div[i]);
        }


        function del_element(element){
            element.parentNode.removeChild(element);
        }
    });

    observer.observe(document, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree:true
    });

})();