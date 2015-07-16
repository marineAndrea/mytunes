// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){ 
       if(this.length === 1){ 
        this.playFirst(); 
      } else { 
        //do nothing
      }
    }, this);

    this.on('dequeue', function(song){ 
      this.remove(song);
      if(this.length > 0){
        this.playFirst();
      } 
    }, this)

    this.on('ended', function(song) {
      this.remove(song);
      if(this.length>0) { 
        this.playFirst();
      }
    }, this)

  },

  playFirst: function(){ 
    this.at(0).play();  
  }

});

// this.get('songQueue').on('dequeue', function(song){
    //   this.get('songQueue').remove(song);
    //   console.log(this.get('songQueue'))
    // }, this);