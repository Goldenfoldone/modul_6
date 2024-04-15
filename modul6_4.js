let pole = []
let stok = []
let str = ''

for (let i = 1; i < 4; i ++){
    for (let j = 0; j < 3; j ++){
        if ((i + j) % 2 == 0) {
            stok.push('o')
        } else {
            stok.push('x')
        }
    }
    pole.push(stok)
    stok = []
}

for (let i = 0; i < 3; i ++){
    for (let j = 0; j < 3; j ++){
        str += `${pole[i][j]} `
    }
    str += "\n"
}
console.log(str)