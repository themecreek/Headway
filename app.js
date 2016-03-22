(function() {
    if (!window.addEventListener)
        return;

    var options = INSTALL_OPTIONS;
    style = document.createElement('style');
    document.head.appendChild(style);
    style.innerHTML = (
        '#HW_badge_cont.HW_visible {' +
            'display: inline-block !important;' +
        '}'
    );
    var el;
    render = function() {
        el = Eager.createElement(options.location, el);
        el.className = 'eager-headway-app';

        if (options.translate) {
            window.HW_config = {
                account: options.id,
                selector: '.eager-headway-app',
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
                selector: '.eager-headway-app'
            };
        }
    };
    var async = function(src, cb) {
        var el = document.createElement('script');
        el.src = '//' + src;

        if (cb) {
            el.addEventListener('load', function(e) {
                cb(null, e);
            });
        }

        document.head.appendChild(el);
    };
    var initApp = function() {
        render();

        if (!options.id) {
            return;
        }

        async('cdn.headwayapp.co/widget.js');
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initApp);
    } else {
        initApp();
    }
})();
