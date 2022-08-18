import React from 'react';
import { Editor } from '@tinymce/tinymce-react';


  
 class Tinymce extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: props.initialValue ?? '' };
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.initialValue !== prevProps.initialValue) {
      this.setState({ value: this.props.initialValue ?? '' })
    }
  }

  handleEditorChange(value, editor) {
    this.setState({ value });
  }

  render() {
    return (
      <Editor
        initialValue={this.props.initialValue}
        value={this.state.value}
        apiKey='wt8d5rcrexduz1zs6s5ck57ss7u6vwz3p4z5fpavlymw1wmg'
        onEditorChange={this.handleEditorChange}
      />
    )
  }
}
export default Tinymce;
