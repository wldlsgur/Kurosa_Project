import { Howl } from 'howler';

function effectSound(src, volume = 0.2, loop) {
    let sound;
    const soundInject = (src) => {
        sound = new Howl({ src });
        sound.volume(volume);
        sound.loop(loop);
    }
    soundInject(src);
    return sound;
}

export default effectSound;