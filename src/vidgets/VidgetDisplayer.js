import React from 'react';
import colors from 'styles/colors';
import PaperScrollDialog from 'components/PaperScrollDialog';
import VidgetDisplayerCard from 'components/VidgetDisplayerCard';
import Typography from 'components/Typography';
import View from 'components/View';
import withGridItem from 'decorators/withGridItem';
import Grid from '@material-ui/core/Grid';
import t from 'prop-types';

const GridDisplayerCard = withGridItem(VidgetDisplayerCard);

const contentContainerStyle = { padding: 16 };

const VidgetDisplayer = ({
  entityRegister,
  open,
  onClose,
  onClick,
}) => {
  const handleClick = (item) => {
    onClick(item);
    onClose();
  };

  return (
    <PaperScrollDialog
      open={open}
      onClose={onClose}
      title="New Vidget"
    >
      <View style={contentContainerStyle}>
        <Grid container justify="center" spacing={2}>
          {entityRegister.map((item) => (
            <GridDisplayerCard key={item.name} onClick={() => handleClick(item)}>
              <Typography
                style={{ fontSize: 14, fontFamily: 'Sen' }}
              >
                {item.name}
              </Typography>
              <Typography
                color={colors.secondaryText}
                style={{ fontSize: 14 }}
              >
                {item.component}
              </Typography>
            </GridDisplayerCard>
          ))}
        </Grid>
      </View>
    </PaperScrollDialog>
  );
};

VidgetDisplayer.propTypes = {
  entityRegister: t.shape({}).isRequired,
  open: t.bool.isRequired,
  onClose: t.func.isRequired,
  onClick: t.func.isRequired,
};

export default VidgetDisplayer;
