class Helper{

  playPauseAndUpdate(){

player.playPause(song.duration)


    if (player.playState !== 'playing') { return; }

    const totalTime = player.song.duration;
    $('#time-control .total-time').text( totalTime );
  }

}

const helper = new Helper();
//Add code that updates the total
// time any time a new song begins.
