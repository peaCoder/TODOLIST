import React from 'react';

const List = (props) => {//这里的onclick还可以有另外一种方法：onClick={()=>props.onClick(i)}

  const list = props.listItems.map((el, i) => (
    <li key={i} className="clearfix">
      <span style={
        el.done
          ? { textDecoration: "line-through", fontSize: "20px" }
          : { textDecoration: "none", fontSize: "20px" }
      }
        onClick={props.onClick.bind(null, i)}>
        {el.item}

      </span>
      <button className="btn btn-danger pull-right" onClick={props.deleteListItem.bind(null, i)}>x</button>
    </li>
  ));

  return (
    <div>
      <ul>
        {
          list
        }
      </ul>
    </div>
  )
};

export default List;