const app=require('./index');
const applicationRoutes=require('./applicationRoutes');
const closureRoutes=require('./closureRoutes');
app.use('/api/applications',applicationRoutes);
app.use('/api/closure',closureRoutes);
module.exports=app;
