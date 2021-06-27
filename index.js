import {$,jQuery} from 'jquery';
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;
var express = require("express");   //require thư viên express để render html
var app = express();                //tạo biến app sử dụng express
app.use(express.static("public"));  //thư mục chứa ảnh,video khách hàng request là vào public tìm
app.set("view engine","ejs");       //là view engine

app.set("views","./views");         //khi đổi trang là tự động chạy vào views(chứa các giao diện các trang)
                                    // (./) ==> đi vào folder views
app.listen(3000);                   //localhost:3000 (port)

app.get("/" , function(req,res){    //khi mở nó tự chạy vào trang chủ("/" là truy cập https://localhost:3000)
    res.render("trangchu");         //nó tự tìm trangchu.ejs
})