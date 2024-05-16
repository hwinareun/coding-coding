// 6w3d 과제 제출용 파일.
// 쿠키 설정 및 JWT 유효기간 설정 부분까지만 제출.

const express = require('express');
const router = express.Router();
const conn = require('../mydb');
const {body, validationResult} = require('express-validator');

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

router.use(express.json());

const validate = (req, res, next) => {
    const err = validationResult(req);
    if(err.isEmpty()){
        return next();
    } else {
        return res.status(400).json(err.array());
    }
};

router.post(
    '/login', 
    [
        body('email').notEmpty().isEmail().withMessage('이메일 형식에 맞게 적어주세요.'),
        body('password').notEmpty().isString().withMessage('비밀번호 형식에 맞게 적어주세요.'),
        validate
    ],
    (req,res) => {
        let {email, password} = req.body;
        let sql = `SELECT * FROM users WHERE email = ?`;

        conn.query(sql, email,
            function (err, results) {
                let loginUser = results[0];

                if(err){
                    console.log(err);
                    return res.status(400).end();
                };

                if(loginUser && loginUser.password == password){

                    // 토큰 발급
                    // jwt.sign(payload, secretKey, options, callback)
                    const token = jwt.sign({
                        email: loginUser.email,
                        name: loginUser.name,
                        password: loginUser.password,
                        contact: loginUser.contact
                    }, 
                        process.env.PRIVATE_KEY, 
                    {
                        expiresIn: '2h', // 유효기간(토큰의 만료 시간을 지정)
                        issuer: "hwinareun" // 토큰 발급자
                    });

                    // 쿠키 옵션 설정. 쿠키에 토큰을 담아 보냄.
                    // httpOnly: 웹 서버를 통해서만 cookie에 접근할 수 있도록 함.
                    res.cookie("token", token, {httpOnly: true});

                    res.status(200).json({
                        message: `${loginUser.name}님, 로그인 되었습니다.`
                    });
                } else {
                    res.status(403).json({
                        message: `이메일 또는 비밀번호가 틀렸습니다.`
                    });
                };
            }
        );  
    }
);
