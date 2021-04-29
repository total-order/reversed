/**
 * Compile a new comparison function whose underlying total order is the
 * reverse of the input comparison function's underlying total order.
 *
 * @param {Function} compare The comparison function to reverse.
 * @return {Function} A function f such that compare(a,b) === f(b,a) for all a,b.
 */
const reversed = (compare) => (a, b) => compare(b, a);
export default reversed;
