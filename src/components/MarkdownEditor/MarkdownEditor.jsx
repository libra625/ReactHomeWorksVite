import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Editor } from "@toast-ui/editor";

const MarkdownEditor = ({ onContentChange }) => {
    const editorRef = useRef(null);

    useEffect(() => {
        const editor = new Editor({
            el: editorRef.current,
            height: "1200px",
            previewStyle: "vertical",
            theme: "dark",
            events: {
                change: () => {
                    const content = editor.getMarkdown();
                    onContentChange(content);
                },
            },
        });
    }, [onContentChange]);

    return <div ref={editorRef}></div>;
};

MarkdownEditor.propTypes = {
    onContentChange: PropTypes.func.isRequired,
};

export default MarkdownEditor;
