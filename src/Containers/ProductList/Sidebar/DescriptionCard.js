import React, { useState, useEffect, memo } from 'react';
import { CardHeader, Card, CardTitle, CardBody } from 'reactstrap';
import { secondaryTextCardTitle } from 'Utility/Theme/CustomStyles';
import Editor from 'Components/Editor';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

const DescriptionCard = ({ value, setFieldValue }) => {
  const [editorState, setEditorState] = useState();

  useEffect(() => {
    const contentBlock = value ? htmlToDraft(value) : null;

    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      setEditorState(EditorState.createWithContent(contentState));
    } else {
      setEditorState(EditorState.createEmpty());
    }
  }, [value]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Açıklama
          <span css={secondaryTextCardTitle} className="text-seconday small">
            Bu alanada yazı ve ya görsel kullana bilirsiniz. Ne kadar düzgün açıklama yaparsanız
            satış potansiyeliniz o kadar yüksek olur
          </span>
        </CardTitle>
      </CardHeader>
      <CardBody>
        <Editor
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          value={editorState}
          onChange={(rawEditorState) => {
            setEditorState(rawEditorState);
            setFieldValue(
              'description',
              draftToHtml(convertToRaw(rawEditorState.getCurrentContent())),
            );
          }}
        />
      </CardBody>
    </Card>
  );
};

export default memo(DescriptionCard);
