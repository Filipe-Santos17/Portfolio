export default function Button({btnClass, textButton}) {
  return (
    <button className={`btn ${btnClass}`}>{textButton}</button>
  )
}
