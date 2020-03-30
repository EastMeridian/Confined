import React, { useState } from 'react';
import t from 'prop-types';
import { View, Typography } from 'components';
import useFetch from 'hooks/useFetch';
import withVidgetContainer from 'decorators/withVidgetContainer';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const containerStyle = {
  flex: 1,
  justifyContent: 'space-around',
  padding: '1em',
};

const TextValidationItem = ({
  name,
  data,
  value,
  onChange,
  onClick,
  placeholder,
  adapter,
}) => {
  const adapterData = adapter(data);
  return (
    <View style={containerStyle}>
      <Typography component="h2">{name}</Typography>
      <TextField
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
      <Typography
        color={adapterData.valid ? 'green' : 'red'}
      >
        {adapterData.message}
      </Typography>
      <Button onClick={onClick}>Try</Button>
    </View>
  );
};

TextValidationItem.propTypes = {
  name: t.string.isRequired,
  data: t.shape({}).isRequired,
  value: t.string.isRequired,
  onChange: t.func.isRequired,
  onClick: t.func.isRequired,
  placeholder: t.string,
  adapter: t.func.isRequired,
};

TextValidationItem.defaultProps = {
  placeholder: 'Type some stuff...',
};

const EhancedItem = withVidgetContainer(TextValidationItem);

const TextValidationVidget = ({
  name, url, parameters, adapter,
}) => {
  const [textValue, setTextValue] = useState('');

  const {
    data, error, setURL,
  } = useFetch();

  const onTextChange = (event) => {
    const { value } = event.target;
    setTextValue(value);
  };

  return (
    <EhancedItem
      loaded
      error={error}
      onChange={onTextChange}
      value={textValue}
      data={data}
      adapter={adapter}
      name={name}
      placeholder={parameters.placeholder}
      onClick={() => setURL(url + textValue)}
    />
  );
};

TextValidationVidget.propTypes = {
  url: t.string.isRequired,
  name: t.string.isRequired,
  parameters: t.shape({
    placeholder: t.string,
  }).isRequired,
  adapter: t.func.isRequired,
};

export default TextValidationVidget;
