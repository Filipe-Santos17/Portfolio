export default function ButtonLink({btnClass, children, linkBtn}) {
  return (
    <a className={`btn ${btnClass}`} href={linkBtn}>{children}</a>
  )
}
