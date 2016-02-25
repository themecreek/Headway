(function() {
    var options = INSTALL_OPTIONS;
    console.log(options);
    // We check for features which are not universally supported, 
    // and don't try to show the app if it would error.
    if (!window.addEventListener || !options.accid) {
        return;
    }   
    style = document.createElement('style');
    document.head.appendChild(style);
    style.innerHTML = (
      '#HW_badge_cont.HW_visible {' +
        'display: inline-block !important;}' +
        '}'
    ); 
    render = function() {
        window.HW_config = {
            account: options.accid,
            selector: options.location,
            translations: {
                title: options.title,
                labels: {
                    "new": options.labelnew,
                    "improvements": options.labelimprovement,
                    "fix": options.labelfix
                }
            }
        };
    console.log(HW_config);
    // todo: allow styling of labels, title color, etc...
    };
    // this loads the needed script and then runs a defined function
    var async = function(u, c) {
        var d = document, t = 'script',
          o = d.createElement(t),
          s = d.getElementsByTagName(t)[0];
        o.src = '//' + u;
        if (c) { o.addEventListener('load', function (e) { c(null, e); }, false); }
        s.parentNode.insertBefore(o, s);
    };
    // this wraps it up. this our initialization
    var initApp = function() {
        render();
        async('cdn.headwayapp.co/widget.js', function() {
            // do your things here
            // I've tried setting render before the async but that didn't work...
           
        });
    };
    var setOptions = function(opts) {
        options = opts;
        initApp();
    };
    // Since we're adding an element to the body, we need to wait until the DOM is
    // ready before inserting our widget.
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initApp);
    }
    else {
        initApp();
    }
    // This is used by the preview to enable live updating of the app while previewing.
    // See the preview.handlers section of the install.json file to see where it's used.
    INSTALL_SCOPE = {
        setOptions: setOptions
    };
})();