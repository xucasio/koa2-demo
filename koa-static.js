const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
 
const app = new Koa()
 //设置静态资源获取路径
const staticPath = './static'
 
app.use(static(
  path.join( __dirname,  staticPath)
))
// http://localhost:3000/user.jpg 可以获取到静态资源
app.use( async ( ctx ) => {
  ctx.body = 'hello world'
})
 
app.listen(3001, () => {
  console.log('[demo] static-use-middleware is starting at port 3000')
})