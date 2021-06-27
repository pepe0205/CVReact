
class Mauvang extends React.Component{
  laythongtin(){
    alert(this.props.children);
}
  render(){
    return(
    <div>
      <h1 className="yellow"> PEPE {this.props.name} {this.props.anothername} </h1> 
      <button onClick={this.laythongtin.bind(this)}>Thong tin</button>
      <p>{this.props.children}</p>
      <Maudo name ="that ko"></Maudo>
    </div>);
  }
 
  //props chỉ là truyền tham số vào html để dễ thay đổi (this-->là tại component đó)

}
class Maudo extends React.Component{
  render(){
    return <h2 className="red"> {this.props.name}</h2> ;
  }
}

//khởi tạo 1 object 
//render là cái object này có chức năng render gì ra màn hình
//Khi mà có quá nhiều <h1> thì ta có thể dùng component nó đóng vai trò như một hàm function
//nên đặt tên class có uppcase letter
ReactDOM.render(
    <div>
       <Mauvang name="Dep trai" anothername="ko hpai dau">mon hoc js</Mauvang>   
           
     </div> 
     //chỉ cần gọi tên class trên component xuống là đc
     //muốn mở thêm thẻ thì phải có thẻ bao lại ví dụ div
   , document.getElementById("root") ); 
   
   //nhúng html vào thẻ nào



   