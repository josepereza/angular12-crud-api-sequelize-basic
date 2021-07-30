const express = require('express');
const path = require('path');
const cors = require('cors');
const Sequelize = require('sequelize');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
const PORT = 3000;
const sequelize = new Sequelize('sequelize1', 'root', '3266jpa', {
  host: 'localhost',
  dialect: 'mysql'
})

sequelize.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conecto')
  })

//define
const Post = sequelize.define('post', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: Sequelize.STRING,
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  authorId: Sequelize.INTEGER
},
  {
    freezeTableName: true, timestamps: false
  }
);



const Author = sequelize.define('author', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: Sequelize.STRING
},
  {
    freezeTableName: true, timestamps: false
  }
);
Author.hasMany(Post);
Post.belongsTo(Author);
//sincronizar
sequelize.sync();

//settings
//middlewares
app.use(cors());
//static files
app.use(express.static('public'))
//routes 
app.get('/', (req, res) => {
  res.render('index', { title: 'MI APP' });

})

app.get("/posts", (req, res) => {

  Post.findAll({ include: Author }).then((result) => res.json(result))

});

app.get("/listado_posts", (req, res) => {

  sequelize.query("select post.id,post.title,post.content,author.firstName  from post inner join author  on post.authorId=author.id order by post.id").then((results) => {
    res.render('post', { data: results });
    console.log(results);

  })

});

app.get("/edit_post/:id", (req, res) =>

  Post.findByPk(req.params.id).then((result) => res.json(result))

);

app.post("/post", (req, res) =>
  Post.create({
    title: req.body.titulo,
    content: req.body.contenido,
    authorId: req.body.autor
  }).then((result) => res.json(result))
    .catch((error) => {
      console.log("ops: " + error);
      res.status(500).json({ error: "error" });
    })

);


app.put("/post/:id", (req, res) =>
  Post.update({
    title: req.body.titulo,
    content: req.body.contenido
  },
    {
      where: {
        id: req.params.id
      }
    }).then((result) => res.json(result))
);

app.delete("/post/:id", (req, res) =>
  Post.destroy({
    where: {
      id: req.params.id
    }
  }).then((result) => res.json(result))
    .catch(function (error) {
      console.log("ops: " + error);
      res.status(500).json({ error: "error" });
    })

);

app.post("/author", (req, res) => {
console.log('mi author', req.body)
  Author.create({
    // firstName: "jose",
    // lastName: "martinez"
    firstName: req.body.firstName,
    lastName: req.body.lastName

  })
    .then((result) => res.json(result))
    .catch(error => res.json({
      error: true,
      data: [],
      error: error
    }))

});

app.get("/author/:id", (req, res) =>
  Author.findByPk(req.params.id,{include:Post}).then((result) => res.json(result))
);
app.get("/author", (req, res) =>
  Author.findAll({include:Post}).then((result) => res.json(result))
);


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})