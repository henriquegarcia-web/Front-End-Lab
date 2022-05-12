import React from 'react'
import * as S from './style'

import { WithContext as ReactTags } from 'react-tag-input';

const Tags = () => {

  const [tags, setTags] = React.useState([
    { id: 'React', text: 'React' },
    { id: 'Styled-Components', text: 'Styled-Components' },
    { id: 'Firebase', text: 'Firebase' },
    { id: 'Scrum', text: 'Scrum' }
  ]);

  const handleDelete = i => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = tag => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const handleTagClick = index => {
    console.log('The tag at index ' + index + ' was clicked');
  };

  return (
    <S.Tags className='tags'>
      <ReactTags
        tags={tags}
        // suggestions={}
        // delimiters={delimiters}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        handleDrag={handleDrag}
        handleTagClick={handleTagClick}
        inputFieldPosition="bottom"
        autocomplete
        placeholder='Enter para adicionar a tag'
      />
    </S.Tags>
  )
}

export default Tags