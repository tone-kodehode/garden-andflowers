/**
 * @param {Array} array - array to iterate through
 * @param {Function} callback - callback function to apply to each element of the input array
 * @returns {Array} - array of transformed elements collected from the callback
 */

// iterat through each element, applie the callback, creating a new array, return transformed element collected
export default function mapArray(array, callback) {
    return array.map(callback)
}
