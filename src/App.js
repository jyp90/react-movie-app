function Food(props) {
  return (
    <div>
      <h2>I like {props.name}</h2>
      <img src={props.picture} alt={props.name} />
    </div>
  )
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image:
      'https://www.bgw.kr/wp-content/uploads/2019/12/%ED%8F%AC%EA%B8%B0%EA%B9%80%EC%B9%98.png',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ramen',
    image:
      'https://health.chosun.com/site/data/img_dir/2020/09/07/2020090702900_0.jpg',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Samgiopsal',
    image:
      'https://newsimg.hankookilbo.com/cms/articlerelease/2020/06/11/202006111362061920_7.jpg',
    rating: 5.5,
  },
  {
    id: 4,
    name: 'Chukumi',
    image:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fdh9Dqr%2FbtqzsWLoYqY%2FKgEhm09QyxfW29QfeWlkWk%2Fimg.png',
    rating: 4.7,
  },
]

const renderFood = function (dish) {
  console.log(dish)
  return <Food key={dish.id} name={dish.name} picture={dish.image} />
}

function App() {
  return <div>{foodILike.map(renderFood)}</div>
}

export default App
