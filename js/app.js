;(function($) {
  var app = $.sammy(function() {

    this.get('#/', function() {
    });

    this.get('#/r/:name', function() {
      getSubReddit(this.params['name']);
    });

  });

  var getSubReddit = function(name){
    $('#container').empty();
    $.getJSON('http://www.reddit.com/r/'+name+'/.json?jsonp', function(r){
      var results = r.data.children;
      $.each(results, function(i,s){
        var theTemplateScript = $("#item-template").html();
        var theTemplate = Handlebars.compile (theTemplateScript);
        $('#container').append (theTemplate (s.data));
      });
    });
  }

  $(function() {
    app.run()
  });
})(jQuery);
