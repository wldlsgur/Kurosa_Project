import { Howl } from 'howler';

function effectSound(src, volume = 0.2) {
    let sound;
    const soundInject = (src) => {
        sound = new Howl({ src });
        sound.volume(volume);
    }
    soundInject(src);
    return sound;
}

export default effectSound;