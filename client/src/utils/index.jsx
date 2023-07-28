import { promptSample } from '../constants';

export function getRandomPrompt(prompt) {
    let randIndex = 0;
    let randPrompt = promptSample[0];

    while (true) {
        randIndex = Math.floor(Math.random() * promptSample.length);
        randPrompt = promptSample[randIndex];
        if(randPrompt !== prompt) break;
    }

    return randPrompt;
};

export function downloadImage(id, photo) {
    const link = document.createElement("a");
    link.href = photo;
    link.download = `download-${id}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};