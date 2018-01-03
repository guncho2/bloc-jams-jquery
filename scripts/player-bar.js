{
 $('button#play-pause').on('click', function() {
   helper.playPauseAndUpdate();
   $(this).attr('playState', player.playState);
 });

$('button#next').on('click', function(){
    // player.playState to check if a song is playing
  if (player.playState !== 'playing'){ return; }
  //next step is to call player.playPause()
  // on the next song in the album
  //get the index of  player.currentlyPlaying
  // in album.songs Use .indexOf() to get the
  //index of player.currentlyPlaying in album.songs
  //assign it to a variable, songIndex
  const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
  //Create another variable for the next song's index
  //and call it nextSongIndex, Use  nextSongIndex to get
  // the next song in album.songs and assign that
  // to a nextSong variable. Finally, call
  //player.playPause() and pass it nextSong.
  const nextSongIndex = currentSongIndex + 1;
  if (nextSongIndex >= album.songs.length) { return; }
  const nextSong = album.songs[nextSongIndex];
  helper.playPauseAndUpdate(nextSong);
  //Next Track button doesn't respond if there
  // is no next song, checks whether the value of
  //nextSongIndex is greater than or equal to the
  //length of album.songs
//if (nextSongIndex >= album.songs.length) { return; }

});
$('button#previous').on('click', function(){
  if (player.playState !== 'playing'){ return; }
  const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
  const previousSongIndex = currentSongIndex - 1;
  if (previousSongIndex < album.songs[0]) { return; }
  const previousSong = album.songs[previousSongIndex];
  helper.playPauseAndUpdate(previousSong);
});
//change the song's playback position, event handler that
// responds to input changes on the time control range input
$('#time-control input').on('input', function (event) {
  //player object's .skipTo() method to change the time in the
  // audio file. .skipTo() accepts a percentage as a
  //parameter, so we can pass it the value property of
  // our seek bar, event.target.
  player.skipTo(event.target.value);
});
$('#volume-control input').on('input', function (event) {

  player.setVolume(event.target.value);
});

// time control's range input update every second so that it
// reflects the current time of the song
setInterval( () => {
  //don't want our setInterval callback function to do anything
  // if a song isn't currently playing
  if (player.playState !== 'playing') { return; }
  //convert the current time into a percentage of the total time
  // before applying a value to the range input
  const currentTime = player.getTime();
  const duration = player.getDuration();
  const percent = (currentTime / duration) * 100;
  //update current time'slider inside of the
  // setInterval callback function
  $('#time-control .current-time').text( currentTime );
  //applying a value to the range input
  $('#time-control input').val(percent);

}, 1000);



}
