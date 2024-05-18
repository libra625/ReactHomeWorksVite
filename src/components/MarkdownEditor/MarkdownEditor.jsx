import React, { Component } from "react";
import PropTypes from "prop-types";
import { Editor } from "@toast-ui/editor";

class MarkdownEditor extends Component {
    constructor(props) {
        super(props);
        this.editorRef = React.createRef();
        this.state = {
            content: "",
        };
    }

    componentDidMount() {
        this.createEditor();
    }

    componentWillUnmount() {
        this.editor.destroy();
    }

    createEditor = () => {
        const { onContentChange } = this.props;

        this.editor = new Editor({
            el: this.editorRef.current,
            height: "1200px",
            previewStyle: "vertical",
            theme: "dark",
            events: {
                change: () => {
                    const content = this.editor.getMarkdown();
                    onContentChange(content);
                },
            },
        });
    };

    render() {
        return <div ref={this.editorRef}></div>;
    }
}

MarkdownEditor.propTypes = {
    onContentChange: PropTypes.func.isRequired,
};

export default MarkdownEditor;
