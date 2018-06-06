const Koa  = require('koa');
const app = new Koa();
 
app.use(async(ctx)=>{
    // 创建的cookie会存在web的application里，而且HTTP是打钩的，不能用js获取到
    ctx.cookies.set('MyName','JSPang',{
        // domain: '127.0.0.1', // 主机名，用localhost的时候不能生效
        path: '/', // 规定在哪可以生成cookie
        maxAge: 1000*60*60, // 失效时间
        httpOnly: false // 设置cookie安全性
    });
    ctx.body = 'cookie is ok';
});
 
app.listen(3006,()=>{
    console.log('[demo] server is starting at port 3006');
})