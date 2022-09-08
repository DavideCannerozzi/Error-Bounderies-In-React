import React, { Component } from 'react';

class ErrBound extends Component {
        constructor(props) {
          super(props);
          this.state = { hasError: false }
        }

        static getDerivedStateFromError(error){     // is invoked if some error occurs during the rendering phase of any lifecycle methods or any children components
            return { hasError: true }
        }

        componentDidCatch(error,info){                // Log the error , service report error 
          console.log(error)
          console.log(info);
        }           

    render() {
      if( this.state.hasError){
        return <h1>Wrong! Error!</h1>
      }
      return this.props.children
    }
}

export default ErrBound;
