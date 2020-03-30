import uniqueID from 'lodash/uniqueId';

const createVidgetID = () => `vidget#${uniqueID()}${Date.now()}`;

const createVidget = ({
  name = 'NO-NAME',
  url = 'NO-URL',
  vidget = 'NO-VIDGET-ID',
  component = 'NO-COMPONENT',
  parameters = {},
  id,
} = {}) => ({
  id: id || createVidgetID(),
  name,
  url,
  component,
  parameters,
  vidget,
});

export default createVidget;
