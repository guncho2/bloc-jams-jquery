class Helper{

  playPauseAndUpdate(song){

    player.playPause(song);

    if(!song){
      return;
    }


    const totalTime = song.duration;
    $('#time-control .total-time').text( totalTime );
  }

}

const helper = new Helper();
//Add code that updates the total
// time any time a new song begins.
