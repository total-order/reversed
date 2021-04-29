import test from 'ava';
import {increasing, decreasing} from '@total-order/primitive';
import {reversed} from '../../src/index.js';

const increasing2 = reversed(decreasing);
const decreasing2 = reversed(increasing);

const macro = (t, a, b) => {
	const i = increasing(a, b);
	const d = decreasing(a, b);
	const i2 = increasing2(a, b);
	const d2 = decreasing2(a, b);
	const ri = increasing(b, a);
	const rd = decreasing(b, a);
	const ri2 = increasing2(b, a);
	const rd2 = decreasing2(b, a);

	t.deepEqual(i, i2, `i i2 (${a}, ${b})`);
	t.deepEqual(-i, ri, `-i ri (${a}, ${b})`);
	t.deepEqual(-i, ri2, `-i ri2 (${a}, ${b})`);
	t.deepEqual(-i, d, `-i d (${a}, ${b})`);
	t.deepEqual(-i, d2, `-i d2 (${a}, ${b})`);
	t.deepEqual(i, rd, `i rd (${a}, ${b})`);
	t.deepEqual(i, rd2, `i rd2 (${a}, ${b})`);
};

macro.title = (title, a, b) => title ?? `(${a}, ${b})`;

const random = () => Math.random() - 0.5;

for (let n = 0; n < 100; ++n) {
	test(macro, random(), random());
}
