class Pat extends livingCreatures {
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
        this.stanalNorKordinatner()
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
    kill() {
        this.stanalNorKordinatner();
        var norvandak = random(this.directions);
        if (norvandak) {

            if (matrix[norvandak[1]][norvandak[0]] == 1) {
                for (var i in xotakerner) {
                    if (norvandak[1] == xotakerner[i].y && norvandak[0] == xotakerner[i].x) {
                        xotakerner.splice(i, 1);
                        matrix[norvandak[1]][norvandak[0]] = 0;
                        break;
                    }
                }
            }
            else if (matrix[norvandak[1]][norvandak[0]] == 2) {
                for (var i in gishatichner) {
                    if (norvandak[1] == gishatichner[i].y && norvandak[0] == gishatichner[i].x) {
                        gishatichner.splice(i, 1);
                        matrix[norvandak[1]][norvandak[0]] = 0
                        break;
                    }
                }
            }
            else if (matrix[norvandak[1]][norvandak[0]] == 3) {
                for (var i in aryucner) {
                    if (norvandak[1] == aryucner[i].y && norvandak[0] == aryucner[i].x) {
                        aryucner.splice(i, 1);
                        matrix[norvandak[1]][norvandak[0]] = 0;
                        break;
                    }
                }
            }
        }

    }

}