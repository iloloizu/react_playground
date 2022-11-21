

let str = "abc";

let permuation = (str, result) => {
        if (str.length === 0) {
            console.log(result);
    }
        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            let left = str.substring(0, i);
            let right = str.substring(i + 1);
            let rest = left + right;
            permuation(rest, result + char);
    }
}
permuation(str, "");