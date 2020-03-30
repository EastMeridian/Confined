import React from 'react';
import t from 'prop-types';
import { fileExtension } from 'utils/file';
import useFetchAdapter from 'hooks/useFetchAdapter';
import withVidgetContainer from 'decorators/withVidgetContainer';

const BLACK_LIST = [
  'mp4',
  'webm',
];

const ImageComponent = ({ url }) => <img src={url} width="100%" height="100%" alt="ImageVidget" style={{ objectFit: 'cover' }} />;

ImageComponent.propTypes = {
  url: t.string.isRequired,
};

const EhancedImageComponent = withVidgetContainer(ImageComponent);

const ImageVidget = ({ url, adapter, blacklist }) => {
  const { loaded, data, error } = useFetchAdapter({ url, adapter });
  const isLoaded = loaded;
  let hasError = error;

  if (isLoaded && !hasError) {
    const extension = fileExtension(data.url);
    if (blacklist.includes(extension)) hasError = `Wrong extension provided: ${extension}`;
  }

  return (
    <EhancedImageComponent
      loaded={isLoaded}
      error={hasError}
      {...data}
    />
  );
};

ImageVidget.propTypes = {
  url: t.string.isRequired,
  adapter: t.func.isRequired,
  blacklist: t.arrayOf(t.string),
};

ImageVidget.defaultProps = {
  blacklist: BLACK_LIST,
};

export default ImageVidget;
