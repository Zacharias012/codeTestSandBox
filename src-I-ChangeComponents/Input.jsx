// return a <textarea> if a richText prop is true
// return an <input> otherwise
// forward / set the received props on the returned elements

const placeholderText = "Your name";
const placeholderRichText = "Your message";

export default function Input(props) {
    if (props.richText) {
        return(
            < textarea
                {...props}
                placeholder={placeholderRichText}
            />
        );
    }
    return (
        <input
            {...props}
            type="text"
            placeholder={placeholderText}
        />
    );
}

/*
<type "text" placeholder="Your name"/>
<richText placeholder="Your message"/>
 */