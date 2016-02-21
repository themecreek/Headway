(function(){
  var render;  
  var options = INSTALL_OPTIONS;

  render = function() {
      
      
  var HW_config = {
  selector: options.location,
  account: options.accid,
  translations: {
    title: options.title,
    labels: {
      "new": options.labelnew,
      "improvements": options.labelimprovement,
      "fix": options.labelfix
    }
   }
   };
   // todo: allow styling of labels, title color, etc...
  };
  render();

  INSTALL_SCOPE = {
      setOptions: function(opts) {
      options = opts;
      render();
    }
  };
})();
