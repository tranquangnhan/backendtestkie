var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');


router.post('/sendemail', function(req, res, next) {
    const toEmail = req.body.toemail;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        // type: "OAuth2",
        user: 'tranquangnhan1606@gmail.com',
        pass: 'Quangnhan@1606',
        // clientId: '31956089141-j8ffehte0qessvhtng3tfshisen2ncjl.apps.googleusercontent.com',
        // clientSecret: 'QF9EqTmJ3rpg7WFbF-D-peQL',
        // refreshToken: '1//04SoHeXp7MMw8CgYIARAAGAQSNwF-L9Ir10O30_tXp3AyrG9mht4xqkk3bGOlmFssU7LhTI2n3YB8gxo-lZkR0hd4vig8ceZo1pA',
      }
    });

    const mailOptions = {
      from: 'thanhnutruyenky86@gmail.com',
      to: toEmail,
      subject: 'CẢM ƠN BẠN ĐÃ ĐĂNG KÝ NHẬN TIN MỚI NHẤT TỪ WORDSMINE',
      text: `Xin chào, chúng tôi là WORDMINE, chúng tôi xin cảm ơn bạn đã đăng
      ký nhận phiên bản mới nhất từ chúng tôi!`
    }

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        res.json({
          msg: 'fail',
          bug: error
        });
      } 
      else{
        res.json({
          msg: 'success'
        })
        const mailOptions = {
          from: 'thanhnutruyenky86@gmail.com',
          to: 'thanhnutruyenky86@gmail.com',
          subject: 'CÓ USER ĐĂNG KÝ NHẬN BẢN MỚI NHẤT: '+toEmail,
          text: `User ${toEmail} đã đăng ký nhận bản mới nhất từ WORDSMINE`
        }; 


        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            res.json({
              msg: 'fail',
              bug: error
            });
            console.log(error)
          }  else{
            res.json({
              msg: 'success'
            })
          }
        })

      }
    });


});



router.get('/sendemail', function(req, res, next) {
    res.send('Send mail của nhân')

});

module.exports = router;
