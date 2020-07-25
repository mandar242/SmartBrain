import React from 'react';

//I pass two props to update the Rank:
const Rank = ( {name,entries} ) => {
    return(
        <div>
            <div className = 'white f3'>
                {`${name}, your current rank is...`}
            </div>
            <div className = 'white f1'>
                {entries}
            </div>
            
        </div>
    );
}

export default Rank;