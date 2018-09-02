function Application(){
  return (
    <div>
      <h1>Hello from React World!</h1>
      <p>I was rendered from the Application component!</p>
    </div>
  
  );

}
//ReactDOM.render(<h1>Hello World!</h1>, document.getElementById('container'));
ReactDOM.render(<Application />, document.getElementById('container'));