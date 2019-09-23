import React from "react";

const MainView = () => {
    const stageItems = [...Array(50)].map(() => <div className={"stage-item"}></div>);

    return (
        <div id={"main-view"}>
            <div id={"stage"}>
                {stageItems}
            </div>
            <div id={"stage-filters"}>Filters</div>
        </div>
    );
};

export default MainView;
