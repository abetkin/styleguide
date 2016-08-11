const React = require('react');
const classNames = require('classnames');

const Link = React.createClass({
    propTypes: {
        href:       React.PropTypes.string,
        className:  React.PropTypes.string,
        children:   React.PropTypes.node,
        muted:      React.PropTypes.bool,
        underlined: React.PropTypes.bool,
        onClick:    React.PropTypes.func
    },

    onClick: function(e) {
        let { onClick } = this.props;

        if (onClick) {
            e.preventDefault();
            onClick(e);
        }
    },

    render: function() {
        let { href, className, children, muted, underlined, ...props } = this.props;

        className = classNames(className, {
            'muted-link':      muted,
            'underlined-link': underlined
        });

        return (
            <a
                className={className}
                href={href}
                onClick={this.onClick}
                {...props}
            >{children}</a>
        );
    }
});

module.exports = Link;