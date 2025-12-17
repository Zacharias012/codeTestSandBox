export default function Button({Icon, mode, children, ...props}) {
    let className = "button"; // default fallback value

    if (!mode || mode === "filled") { // we need "button filled-button" e.g.
        className += " filled-button";
    } else {
        className += ` ${mode}-button`;
    }

    if (Icon) { // add " icon-button" if we have a "Icon"
        className += " icon-button";
    }

    return (
        <button className={className} {...props}>
            {Icon && (
                <span className="button-icon">
          <Icon/>
        </span>
            )}
            <span>{children}</span>
        </button>
    );
}

// !!! Important:
// Wrap the icon with a <span className="button-icon"> to achieve the target look
// Also wrap the children prop with a <span>