{
 $('button#play-pause').on('click', function() {
   player.playPause();
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
  player.playPause(nextSong);
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
  player.playPause(previousSong);
});

}
