document.addEventListener('DOMContentLoaded', function () {
    const playlist = document.getElementById('playlist');
    const audioPlayer = document.getElementById('audioPlayer');
    const songForm = document.getElementById('songForm');

    // Sample list of songs
    let songs = [
        { title: 'Song 1', src: 'song1.mp3' },
        { title: 'Song 2', src: 'song2.mp3' },
        // Add more songs as needed
    ];

    // Function to create playlist
    function createPlaylist() {
        playlist.innerHTML = ''; // Clear the playlist before re-rendering

        songs.forEach((song, index) => {
            const listItem = document.createElement('div');
            listItem.classList.add('song');
            listItem.textContent = `${index + 1}. ${song.title}`;
            listItem.addEventListener('click', () => playSong(index));
            playlist.appendChild(listItem);
        });
    }

    // Function to play a song
    function playSong(index) {
        const selectedSong = songs[index];
        audioPlayer.src = selectedSong.src;
        audioPlayer.play();
    }

    // Function to add a new song to the playlist
    function addSong(title, file) {
        const newSong = {
            title: title,
            src: URL.createObjectURL(file),
        };

        songs.push(newSong);
        createPlaylist();
        // You might want to send the new song information to the server for permanent storage.
    }

    // Event listener for form submission
    songForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const title = document.getElementById('songTitle').value;
        const file = document.getElementById('songFile').files[0];

        addSong(title, file);
        songForm.reset(); // Clear the form after adding the song
    });

    // Initialize the playlist
    createPlaylist();
});
