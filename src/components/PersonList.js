
//import {useMemo } from "react";
import "../styles/PersonList.css";
import PersonItem from "./PersonItem.js";
//import LoadingCell from './LoadingCell.js';

function PersonList() {

    // const loadingCellRenderer = useMemo(() => {
    //     return LoadingCell;
    //   }, []);
    // const loadingCellRendererParams = useMemo(() => {
    //     return {
    //       loadingMessage: 'One moment please...',
    //     };
    // }, []);

    return (
      <div className="list-container">
        <PersonItem/>
        <PersonItem/>
        <PersonItem/>
      </div>
    );
}

export default PersonList;