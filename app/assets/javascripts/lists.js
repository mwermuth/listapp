$( document ).ready(function() {
  initPod('pod_0');
  initPod('pod_1');  
});

function initPod(id){
  var cocoapods = function(query, cb) {
    if(query){
      $.getJSON("http://search.cocoapods.org/api/v1/pods.flat.hash.json?query=name:" + query, cb);
    }
  };

    $('#'+id).typeahead(null, {
      displayKey: 'id',
      minLength: 2,
      source: cocoapods
    });

    $('#'+id).on("typeahead:selected", function(obj, suggestion, name) {
    });

    $('#'+id).keypress(function (e) {
      if (e.which == 13) {
          $("")
          e.preventDefault();
      }
    });
}
