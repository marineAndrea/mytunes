// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table class='queue'",

  initialize: function() {
    this.render()
    this.collection.on('add remove', function(){ 
      this.render()
    }, this);
  },

  render: function() {
    // this.$el.children().detach();

    this.$el.html('<th class="queueHolder">Song Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
    }))
  }

});
