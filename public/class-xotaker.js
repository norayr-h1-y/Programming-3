class Xotaker extends livingCreatures {
    constructor() {
        super(x, y);
        /*this.x = x;
        this.y = y;
         this.directions = [];*/
        this.energy = 5;

    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    sharjvel() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(0);
        var norvandak = random(datarkvandakner);
        if (norvandak) {
            matrix[this.y][this.x] = 0;
            matrix[norvandak[1]][norvandak[0]] = 2;
            this.x = norvandak[0];
            this.y = norvandak[1];
            this.energy--;
        }
    }
    eat() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(1);
        var norvandak = random(datarkvandakner);

        if (norvandak) {

            matrix[this.y][this.x] = 0;
            matrix[norvandak[1]][norvandak[0]] = 2;
            this.x = norvandak[0];
            this.y = norvandak[1];
            this.energy++;
            for (var c in grassArr) {
                if (grassArr[c].x == this.x && grassArr[c].y == this.y) {
                    grassArr.splice(c, 1);
                    break;
                }
            }
        }
        else {
            this.sharjvel();
        }
    }
    bazmanal() {
        this.energy = 6;
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
            xotakerner.push(norXotaker);
            matrix[norVandak[1]][norVandak[0]] = 2;
        }
    }
    mahanal(i) {
        matrix[this.y][this.x] = 0;
        xotakerner.splice(i, 1);
        //console.log(xotakerner.length)
    }
}