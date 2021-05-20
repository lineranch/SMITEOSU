/**
 * fireCallbackOnSuccess will execute the provided function if a === b
 * 
 * 
 * @param {dynamic} a is compared against b
 * @param {dynamic} b is compared against a
 * @param {dynamic} func will execute if a === b
 * @returns boolean evaluation of a === b
 */
export default function fireCallbackOnSuccess(a, b, func) {
    if (a === b) {
    func();
        return true;
    } else {
        return false;
    }
}