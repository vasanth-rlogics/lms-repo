const app=require('./index');
const applicationRoutes=require('./applicationRoutes');
app.use('/api/applications',applicationRoutes);
module.exports=app;
