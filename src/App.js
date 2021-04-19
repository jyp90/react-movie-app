function Food(props) {
    return <h3>I like {props.fav}</h3>
}

function App() {
  return (
    <div>
      <h1>
        Hello Nyong!! 2021 !!
      </h1>
        <Food fav="kimchi"/>
        <Food fav="ramen"/>
        <Food fav="samgiopsal"/>
        <Food fav="chukumi"/>
    </div>
  );
}

export default App;
