const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const courses = require('./Data/courses.json');
const category = require('./Data/category.json');

app.use(cors())

app.get('/',(req,res)=>{
    res.send('Courses API Running');
});

app.get('/courses',(req,res)=>{
    res.send(courses);
})

app.get('/course-category',(req,res)=>{
    res.send(category);
})

app.get('/courses/:id',(req,res)=>{
    const id = req.params.id;
    const selectedCourse = courses.courses.find(course =>course.uid==id);
    res.send(selectedCourse);
})
app.get('/category/:id',(req,res)=>{
    const id = req.params.id;
    const categoryCourses = courses.courses.filter((course)=>course.category_id==id);
    res.send(categoryCourses);
})


app.listen(port, ()=>{
    console.log('learning app running on port',port);
});