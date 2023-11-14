const Scroll = (props) => {
  return (
    <div style={{overflow: 'scroll', border: '1px solid black', height: '80%'}}>
      {props.children}
    </div>
  )
}

export default Scroll;