import PropTypes from 'prop-types';
import { createContext, useState } from "react";

export const PageContext = createContext();
export const PageContextProvider = ({ children }) => {
    const [view, setView] = useState(false);

    return (
        <PageContext.Provider value={{ view, setView }}>
            {children}
        </PageContext.Provider>
    );
}

PageContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
