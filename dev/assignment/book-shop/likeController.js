const conn = require('../mydb');
const {StatusCodes} = require('http-status-codes');

const likeAdd = (req,res) => {
    const {user_id} = req.body;
    const {id} = req.params;

    let sql = `INSERT INTO likes (user_id, liked_book_id) VALUES (?, ?)`;
    let values = [user_id, id];

    conn.query(sql, values,
        (err, results) => {
            if(err){
                console.log(err);
                return res.status(StatusCodes.BAD_REQUEST).end();
            }
            return res.status(StatusCodes.OK).json(results);
        }
    );
};

const likeDelete = (req,res) => {
    const {user_id} = req.body;
    const {id} = req.params;

    let sql = `DELETE FROM likes WHERE user_id = ? AND liked_book_id = ?`;
    let values = [user_id, id];

    conn.query(sql, values,
        (err, results) => {
            if(err){
                console.log(err);
                return res.status(StatusCodes.BAD_REQUEST).end();
            }
            return res.status(StatusCodes.OK).json(results);
        }
    );
};

module.exports = {likeAdd, likeDelete};