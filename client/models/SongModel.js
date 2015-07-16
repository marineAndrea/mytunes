// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function(){ 
    //add this song to song queue collection, song queue collection view re-renders
    this.trigger('enqueue', this)
    
  },

  dequeue: function(){ 
    //removes this song from song queue collection, song queue collection view removes that song entry
    this.trigger('dequeue', this)
  },

  ended: function(){ 
    //song has ended, change song queue view to next song in song queue collection, play that song
    this.trigger('ended', this)
  }

});

