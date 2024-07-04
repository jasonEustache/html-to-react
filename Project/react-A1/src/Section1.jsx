import {Component} from "react"

export class SectionOne extends Component {
render(){
  const info = this.props.item;
  return (
    <section id="character-ratings">
        <h4>Top Characters</h4>
        <table>
            <tr>
              <th>Name</th>
              <th>Skillset</th>
              <th>Votes</th>
            </tr>
          {info.map((item,i) => {
           const lightOrDark = i % 2 ? 'light' : 'dark'
            return (
              <tr key = {i} className={lightOrDark}>
              <td>{item.name}</td>
              <td>{item.skillset.join()}</td>
              <td>{item.votes}</td>
              </tr>
            )
          })}
        </table>
      </section>
  )
}
}


