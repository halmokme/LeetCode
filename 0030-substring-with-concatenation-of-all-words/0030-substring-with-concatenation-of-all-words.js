/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = function (s, words) {
    let answers = [];

    const totalLengthOfWords = words.reduce(
        (total, word) => (total += word.length), 0
    );

    for (let i = 0; i <= s.length - totalLengthOfWords; i++) {
        if (doesStringContainAllWords(s.substring(i), words.slice())) {
            answers.push(i);
        }
    }

    return answers;
};


function doesStringContainAllWords(string, words) {
    if (!words.length) return true;

    for (let i = 0; i < words.length; i++) {
        const targetWordLength = words[i].length;

        if (string.substring(0, targetWordLength) === words[i]) {
            words.splice(i, 1);

            return doesStringContainAllWords(
                string.substring(targetWordLength),
                words
            );
        }
    }

    return false;
}