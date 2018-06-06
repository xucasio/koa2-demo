const Koa = require('koa')
const app = new Koa()
app.use(async (ctx)=>{
    let request = ctx.request
    let req = ctx.req
    let req_request = request.query
    let reqstr_request = request.querystring
    ctx.body = 'JSON.stringify(req)'
})
app.listen(3006, ()=>{
    console.log('server is running at 3006')
})