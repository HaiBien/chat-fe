import React from 'react';
import PropTypes from 'prop-types';
const DefaultAvatar = ({ size, name }) => {
    const generateColor = (str) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        const hue = Math.abs(hash % 360);
        return {
            width: size,
            height: size,
            backgroundColor: `hsl(${hue}, 70%, 40%)`,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#fff',
        };
    }

    const initials = name
        .split(' ')
        .map(word => word.charAt(0))
        .join('')
        .toUpperCase();

    const avatar_style = generateColor(name);

    return (
        <div style={avatar_style}>
            <span>{initials}</span>
        </div>
    );
};

export default DefaultAvatar;

DefaultAvatar.propTypes = {
    size: PropTypes.any,
    name: PropTypes.string
};

DefaultAvatar.defaultProps = {
    size: 50,
};
