import React from 'react';
import {connect} from 'react-redux'
import AccordianItem from './accordianItem'
import {updateState} from '../Actions'


class AccordianReact extends React.Component{
    constructor(props){
        super(props);
        this.state={
            item:props.item||[
                {header:'First',item:'First Element GOes Here'},//Default Val
            ],
            itemToShow:[],
            toggleState:{}
        }
    }
    static getDerivedStateFromProps(props, state){
        if(state.toggleState!==props.toggleState)
                return {toggleState:props.toggleState}
                else{
                    return null
                }

    }
    onclickHeader=(data)=>{
        let key=data.target.dataset['indexval']
        let val=!(data.target.dataset['togglestate']==="true")
       this.props.updateToggle({[key]:val})
            
       
    }
 
    render(){
       
        return(
            <>
            <div className={'accordianContainer'} style={this.props.style}>
         { this.state.item.map((data,index)=>{
        return (<AccordianItem key={index} Header={data.header} indexVal={index} itemData={data.item} length= {this.state.item.length}
        onclickHeader={this.onclickHeader} toggleState={this.state.toggleState[index]}/>)
          })
        }
        </div>
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
        toggleState: state.accordianReducer.toggleState||{}
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        updateToggle: data => {
        dispatch(updateState(data));
      }
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AccordianReact);

