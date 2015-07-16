// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr', 
  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: { 
    'click': function(){ 
      this.model.dequeue(); // what asbout play? is it deleguaded to app model and then to lib view?
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }


});
