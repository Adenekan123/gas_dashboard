import PropTypes from 'prop-types';


const Screen = (props) =>{
return  <h1>{props.count}</h1>
}

const Review = (props) => {
//   const {count,updateCount} = props;
  return (
    <>
   <Screen count={props.count} />
    <button onClick={props.updateCount}>add</button>
    </>
    
  )
}

Review.propTypes = {
    count:PropTypes.number.isRequired,
    updateCount: PropTypes.func.isRequired
}

Screen.propTypes = {
    count:PropTypes.number.isRequired,
}



export default Review