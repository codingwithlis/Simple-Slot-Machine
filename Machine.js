class Machine extends React.Component{
    render(){
        return(
            <div>
            {this.props.s1}{this.props.s2}{this.props.s3}
            <p>{areEqual(this.props.s1,this.props.s2,this.props.s3) ? "You win!" : "You lose!"}</p>
            </div>
        )
    }
}

function areEqual(){
   var len = arguments.length;
   for (var i = 1; i< len; i++){
      if (arguments[i] === null || arguments[i] !== arguments[i-1])
         return false;
   }
   return true;
}