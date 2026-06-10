import magicSong from '../assets/audios/pianoSong.mp3';

export function loadBeep() {
  const audio = new Audio(magicSong);
  audio.load();

  return () => {
    audio.currentTime = 0;
    audio.play().catch((error) => console.log('Erro ao tocar áudio', error));
  };
}
