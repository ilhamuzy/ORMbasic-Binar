const {Client} = require ("pg")
const { title } = require("process")
const client = new Client({
    user: "anandailham",
    host: "localhost",
    database: "nodedb",
    password: "1",
    port: 5432
})
client.connect()

const getAuthors = (req, res) => {
    client.query("SELECT * FROM authors ORDER BY id DESC", (err, result)=>{
        if (err)
            throw(err)
        res.status(200).json(result.rows)
    })
}

const updateArticles = (req, res) => {
    const id = parseInt(req.params.id);
    // console.log(req.body);
    // return false
    const {title, content, author} = req.body //destructuring
    client.query("UPDATE articles SET title = $1, content = $2, author = $3 WHERE id = $4",[title, content, author, id], (err, result)=> { //menambahkan variable diargumen
        if (err)
            throw(err)
        res.status(200).json("Berhasil melakukan update")        
    })
}

const getAuthorsByID = (req, res) => {
    const id = parseInt(req.params.id);
    client.query("SELECT * FROM authors WHERE id = $1", [id], (err, result)=> {
        if (err)
            throw (err)
        res.status(200).json(result.rows)
    })
}

module.exports = { getAuthors, getAuthorsByID, updateArticles}