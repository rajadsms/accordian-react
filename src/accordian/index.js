import React from "react";
import AccordianItem from "./accordianItem";

class AccordianReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item || [
        { header: "First", item: "First Element GOes Here" }//Default Val
      ],
      itemToShow: [],
      toggleState: {}
    };
  }
  onclickHeader = data => {
    let key = data.target.dataset["indexval"];
    let val = !(data.target.dataset["togglestate"] === "true");
    this.setState(
      {
        toggleState: { [key]: val }
      },
      () => {
        this.renderItem();
      }
    );
  };

  renderItem = () => {
    let item = this.state.item.map((data, index) => {
      return (
        <AccordianItem
          key={index}
          Header={data.header}
          indexVal={index}
          itemData={data.item}
          length={this.state.item.length}
          onclickHeader={this.onclickHeader}
          toggleState={this.state.toggleState[index]}
        />
      );
    });
    this.setState({ itemToShow: item });
  };
  componentDidMount() {
    this.renderItem();
  }
  render() {
    return (
      <div className={"accordianContainer"} style={this.props.style}>
        {this.state.itemToShow}
      </div>
    );
  }
}

export default AccordianReact;
