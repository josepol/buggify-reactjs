import React from 'react'

class FileFieldComponent extends React.Component {

  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.state = {
      isFileFormatInvalid: false
    }
  }

  onChange(e) {
    this.validateFileType(e)
  }

  validateFileType(e){
    const fileName = document.getElementById("fileName").value;
    const idxDot = fileName.lastIndexOf(".") + 1;
    const extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    if (extFile === "jpg" || extFile === "jpeg" || extFile === "png"){
      this.setState({isFileFormatInvalid: false})
      const { input: { onChange } } = this.props
      onChange(e.target.files[0])
    } else {
      this.setState({isFileFormatInvalid: true})
    }
}

  render() {
    return (
      <React.Fragment>
        <input id="fileName" type="file" onChange={this.onChange} encType="multipart/form-data" accept="image/*"/>
        <p className="error-msg">{this.state.isFileFormatInvalid && <span>Invalid file format</span>}</p>
      </React.Fragment>
    )
  }
}

export default FileFieldComponent