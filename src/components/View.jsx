import Country from './Country';

export default function View(props) {

  return (
    <div className="grid-temp">
        {props.arr.map((current,key) => <Country key={key} province={current.province} country={current.country} image={current.image}/>)}
    </div>
  )
}