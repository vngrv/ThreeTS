
interface Quux {
    quuz: string;
    courge: number;
}

class Grault {
    private garply: string;

    constructor(quux: Quux, waldo: number[]) {
        this.garply = quux.quuz + " " + quux.courge + " " + waldo;
    }

    public getGatply() {
        return this.garply;
    }
}

function foo(bar: Quux) {
    return "Hello, " + bar.quuz + " " + bar.courge;
}

let baz = { quuz: "ABC", courge: 123 };
let fred: Grault = new Grault(baz, [1,2,3]);

console.log(fred.getGatply());
