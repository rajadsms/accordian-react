import React from "react";

const AccordianItem = props => {
  const {
    Header,
    itemData,
    onclickHeader,
    indexVal,
    toggleState,
    length
  } = props;
  let itemDescClass = "commonClass padding20";
  let itemHeaderClass = "hoverActive commonClass bottomBorder padding20";
  itemDescClass += indexVal !== length - 1 ? " bottomBorder" : "";
  if (toggleState) {
    itemHeaderClass += " highlightGrey";
  }
  return (
    <>
      <div
        className={itemHeaderClass}
        data-indexval={indexVal}
        data-togglestate={toggleState}
        onClick={onclickHeader}
      >
        {Header}
      </div>
      <div
        className={itemDescClass}
        style={{ display: toggleState ? "block" : "none" }}
      >
        {itemData}
      </div>
    </>
  );
};
export default AccordianItem;
