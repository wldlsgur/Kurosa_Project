import { Howl } from 'howler';

function useSound(src, volume = 1) {
    let sound;
    const soundInject = (src) => {
        sound = new Howl({ src });
        sound.volume(volume);
        // sound.loop(true);
    }
    soundInject(src);
    return sound;
}

// const soundStop = () => sound.stop();
export default useSound;