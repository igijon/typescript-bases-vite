interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;

}

interface Details {
    author: string;
    year: number;
}

//Con cmnd+. rellena las propieades faltantes
const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

//Esto está regular
console.log('Song: ', audioPlayer.song);
console.log('Duration: ', audioPlayer.songDuration);
console.log('Author:', audioPlayer.details.author);

const song = 'New Song';

// const { 
//     song:anotherSong, 
//     songDuration:duration,
//     details: { author }
//} = audioPlayer;

const { 
    song: anotherSong, 
    songDuration: duration,
    details
} = audioPlayer;

const { author } = details;

console.log('Song: ', anotherSong);
console.log('Duration: ', duration);
console.log('Author:', author);