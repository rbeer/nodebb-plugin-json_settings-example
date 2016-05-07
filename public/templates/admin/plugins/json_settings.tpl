<div class="row">
  <div class="col col-md-12">
    <h1>json-settings-example</h1>
    <ul id="tests">
    </ul>
  </div>
</div>
<style type="text/css">
  .red {

  }
  .green {

  }
</style>
<script>
/* global ajaxify */
$(window).on('action:ajaxify.contentLoaded', function(event) {
  var data = ajaxify.data;
  var ul = $('#tests');
  ul.children().remove();

  function addEntry(text, success) {
    if (success !== void 0) {
      var icon = $('<i>').addClass('fa fa-' + (success ? 'check' : 'times'));
    }
    var li = $('<li>').text(text);
    li.append(icon);
    ul.append(li);
  }
  if (data.rat) {
    addEntry('I\'m with him though. - A rat in a dress... Of course it is - a rat in a dress.', false);
    return addEntry('Middleware denied access');
  }
  addEntry('Two frogs on a bench ', true);
  addEntry('flag is a Boolean [true]', typeof data.flag === 'boolean' && data.flag === true);
  addEntry('num is a Number [251]', typeof data.num === 'number' && data.num === 251);
  addEntry('str is a String [\'xNOSJs\']', typeof data.str === 'string' && data.str === 'sJSONx'
                                                                           .split('')
                                                                           .reverse()
                                                                           .join(''));
});
</script>
