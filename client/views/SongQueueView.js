// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render()
    this.collection.on('add', function(){ 
      this.render()
    }, this);
  },

  render: function() {
    // this.$el.children().detach();
    console.log('collection', this.collection)
    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        console.log('somg', song);
        return new SongQueueEntryView({model: song}).render();
    }))
  }

});
