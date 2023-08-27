import React from "react";

const Header = () => {
    return (
        <div className="sticky border top-0 w-full py-2 flex justify-around items-center bg-card z-50 px-2">
            <p>Logo</p>
            <input type="text" placeholder="Search bar" />
            <p>Account links</p>
        </div>
    );
};

export default Header;
