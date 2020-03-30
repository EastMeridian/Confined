import React from 'react';
import t from 'prop-types';
import useFetchAdapter from 'hooks/useFetchAdapter';
import withVidgetContainer from 'decorators/withVidgetContainer';
import { View, Typography } from 'components';
import Chip from '@material-ui/core/Chip';

const containerStyle = {
  alignItems: 'cenger',
  justifyContent: 'center',
  flex: 1,
  padding: '1em',
};

const chipContainerStyle = {
  flexDirection: 'row',
  marginTop: '1em',
  justifyContent: 'flex-start',
};

const TextComponent = ({ content, categories }) => (
  <View style={containerStyle}>
    <Typography style={{ fontFamily: 'sen', fontWeight: 300 }}>
      <i>
        {content}
      </i>
    </Typography>
    <View style={chipContainerStyle}>
      {['beta', ...categories].map((category) => <Chip label={category} style={{ marginRight: 4 }} key={category} />)}
    </View>
  </View>
);

TextComponent.propTypes = {
  content: t.string.isRequired,
  categories: t.arrayOf(t.string),
};

TextComponent.defaultProps = {
  categories: [],
};

const EhancedImageComponent = withVidgetContainer(TextComponent);

const TextVidget = ({ url, adapter }) => {
  const { loaded, data, error } = useFetchAdapter({ url, adapter });

  return (
    <EhancedImageComponent
      loaded={loaded}
      error={error}
      {...data}
    />
  );
};

TextVidget.propTypes = {
  url: t.string.isRequired,
  adapter: t.func.isRequired,
};

export default TextVidget;
