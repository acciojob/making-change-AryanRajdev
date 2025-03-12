const makeChange = (c) => {
  // your name here
	let cq = 0;
	let cd = 0;
	let cn = 0;
	let cp = 0;

	cq = Math.floor(c/25);
	c = c%25;

	cd = Math.floor(c/10);
	c = c%10;

	cn = Math.floor(c/5);
	c = c%5;

	cp = Math.floor(c/1);
	c = c%1;

	let ans = new Object();
	ans.q = cq;
	ans.d = cd;
	ans.n = cn;
	ans.p = cp;

	return ans;
};

//Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
