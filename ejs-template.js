const Koa = require('koa')
const Views = require('koa-views')
const Path = require('path')
const app = new Koa()
app.use(Views(Path.join(__dirname,'./views'),{
    extension:'ejs'
}))
app.use(async(ctx)=>{
    let title = 'hello EJS'
    await ctx.render('index',{title})
})
app.listen(3000,()=>{
    console.log('server is start 3000')
})