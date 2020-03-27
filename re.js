const fs = require('fs')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generate = require('@babel/generator').default

let name = `e3906616_326`
let slideJs = fs.readFileSync(`./tcaptcha-slide/${name}.js`, 'utf8')
let ast = parser.parse(slideJs)
traverse(ast, {
    ArrayExpression(path) {
        let len = path.node.elements.length
        if (len > 30) {
            fs.rmdirSync(`./tcaptcha-slide/${name}`, { recursive: true })
            fs.mkdirSync(`./tcaptcha-slide/${name}`)
            for (let i = 0; i < len; i++) {
                if (path.node.elements[i]) {
                    let a = generate(path.node.elements[i])
                    fs.writeFileSync(`./tcaptcha-slide/${name}/${i}.js`, a.code)
                }
            }
            debugger
            path.stop()
        }
    }
})
console.log(slideJs)