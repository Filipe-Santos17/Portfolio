export default function LinkPage({idPage, children}){
  return(
    <li>
      <a href={idPage}>
        {children}
      </a>
    </li>
  )
}