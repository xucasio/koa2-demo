const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();

const router = new Router({
      prefix:'/jspang' // 设置路由的前置路由
})

router
    .get('/',(ctx,next)=>{
        ctx.body = 'hello route!'
    })
    .get('/goods',(ctx,next)=>{
        ctx.body = 'hello goods!'
    })

app.use(router.routes()). // 应用路由
    use(router.allowedMethods()); // 提交方式限制

app.listen(3006);
console.log('starting at 3006');