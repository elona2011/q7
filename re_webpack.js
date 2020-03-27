const fs = require('fs')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generate = require('@babel/generator').default
const path = require('path')

if (!process.argv[2]) throw new Error('need 1 argument')
let p = path.parse(process.argv[2])
let slideJs = fs.readFileSync(`./${p.dir}/${p.base}`, 'utf8')
let ast = parser.parse(slideJs)
traverse(ast, {
    ArrayExpression(path) {
        let len = path.node.elements.length
        if (len > 30) {
            fs.rmdirSync(`./${p.dir}/${p.name}`, { recursive: true })
            fs.mkdirSync(`./${p.dir}/${p.name}`)
            for (let i = 0; i < len; i++) {
                if (path.node.elements[i]) {
                    let a = generate(path.node.elements[i])
                    fs.writeFileSync(`./${p.dir}/${p.name}/${i}.js`, a.code)
                }
            }
            path.stop()
        }
    }
})