import React, {Component} from 'react';
class LeftBar extends Component{
    state={
        sec1: 'active',
        sec2: 'false',
        sec3: 'false',
        sec4: 'false',
        sec5: 'false'
    }
    activefunc=(val)=>{
        switch(val){
            case 1: this.setState({sec1: 'active',
                                sec2: 'false',
                                sec3: 'false',
                                sec4: 'false',
                                sec5: 'false'})
                        break;
            case 2: this.setState({sec1: 'false',
                            sec2: 'active',
                            sec3: 'false',
                            sec4: 'false',
                            sec5: 'false'})
                    break;
            case 3: this.setState({sec1: 'false',
                        sec2: 'false',
                        sec3: 'active',
                        sec4: 'false',
                        sec5: 'false'})
                break;
            case 4: this.setState({sec1: 'false',
                    sec2: 'false',
                    sec3: 'false',
                    sec4: 'active',
                    sec5: 'false'})
            break;
            case 5: this.setState({sec1: false,
                    sec2: "false",
                    sec3:'false',
                    sec4: 'false',
                    sec5: 'active'})
                break;
            default: break;
            }
        }
    render(){
        return(
        <nav>
            <h1>Dummy Name</h1>
            <ul>
              <li onClick={()=>{this.activefunc(1)}}><a href="#section-1" className={this.state.sec1}>Section 1</a></li>
              <li onClick={()=>{this.activefunc(2)}}><a href="#section-2" className={this.state.sec2}>Section 2</a></li>
              <li onClick={()=>{this.activefunc(3)}}><a href="#section-3" className={this.state.sec3}>Section 3</a></li>
              <li onClick={()=>{this.activefunc(4)}}><a href="#section-4" className={this.state.sec4}>Section 4</a></li>
              <li onClick={()=>{this.activefunc(5)}}><a href="#section-5" className={this.state.sec5}>Section 5</a></li>
            </ul>
        </nav>
        )
    }
}
export default LeftBar;