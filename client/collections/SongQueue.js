// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){ 
      if (this.length===1){ 
       this.playFirst(this.at(0)); 
      } else { 
        console.log('I added something!')
      }

    });
    // this.on('remove', function(){ 


    // })
  },

  playFirst: function(song){ 
    song.play();
    
  }

});