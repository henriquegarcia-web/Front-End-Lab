import React from 'react'
import * as S from './style'

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const RichText = (props) => {
  return (
    <S.RichText height={props.height}>
      <Editor
        // editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        // onEditorStateChange={setEditorState}
      />
    </S.RichText>
  )
}

export default RichText