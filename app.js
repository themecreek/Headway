(function() {
    var options = INSTALL_OPTIONS;
    style = document.createElement('style');
    document.head.appendChild(style);
    style.innerHTML = (
      '#HW_badge_cont.HW_visible {' +
      'display: inline-block !important;' +
      '}'
    ); 
    render = function() {     
        if (options.translate) {        
        window.HW_config = {
            account: options.id,
            selector: options.location,
            translations: {
                title: options.title, 
                labels: {
                    "new": options.labelNew,
                    "improvements": options.labelImprovement,
                    "fix": options.labelFix
                }
            }
        };     
        } else {
           window.HW_config = {
            account: options.id,
            selector: options.location
        };
        }     
    };
    var async = function(u, c) {
        var d = document, t = 'script',
          o = d.createElement(t),
          s = d.getElementsByTagName(t)[0];
        o.src = '//' + u;
        if (c) { o.addEventListener('load', function (e) { c(null, e); }, false); }
        s.parentNode.insertBefore(o, s);
    };
    var initApp = function() {
        render();
    if (!window.addEventListener || !options.id) {
        return;
    } 
    async('cdn.headwayapp.co/widget.js', function() {});
    };
    var setOptions = function(opts) {
        options = opts;
        initApp();
    };
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initApp);
    }
    else {
        initApp();
    }
    INSTALL_SCOPE = {
        setOptions: setOptions
    };
})();