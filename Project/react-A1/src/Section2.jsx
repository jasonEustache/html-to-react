export function SectionTwo(props) {
  const info = props.item;
return (
  <section id="character-cards">
    {info.map((item,i)=>{
      return (
        <div className="card" key={i}>
        <div className="card-titles">
          <h3>{item.name}</h3>
          <h4>{item.nickName}</h4>
        </div>
        <img
          src={item.imageUrl}
          alt={item.name}
        />
        <p>
          {item.background}
        </p>
      </div>
      )
    })}
</section>
)
}