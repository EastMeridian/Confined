import React, { useState } from 'react';
import {
  View,
  Card,
  AppBar,
  Typography,
  EmptyListComponent,
  AddCard,
} from 'components';
import Grid from '@material-ui/core/Grid';
import withGridItem from 'decorators/withGridItem';
import withEntityRegister from 'decorators/withEntityRegister';
import useVidgetReducer from 'hooks/useVidgetReducer';
import { VidgetDisplayer, VidgetProvider } from 'vidgets';

const containerStyle = {};

const GridCard = withGridItem(Card);

const EhancedVidgetDisplayer = withEntityRegister(VidgetDisplayer);

const HomeScreen = () => {
  const {
    vidgets,
    buildVidget,
  } = useVidgetReducer();

  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <View style={containerStyle}>

      <AppBar><Typography component="h2">Confined</Typography></AppBar>

      <View style={{ padding: 16 }}>
        {vidgets.length === 0 && <EmptyListComponent />}
        <Grid container justify="center" spacing={2}>
          {vidgets.map((id) => (
            <GridCard key={id}>
              <VidgetProvider id={id} />
            </GridCard>
          ))}
          <Grid item>
            <AddCard onClick={() => setDialogOpen(true)} />
          </Grid>
        </Grid>
      </View>

      <EhancedVidgetDisplayer
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onClick={buildVidget}
      />
          
    </View>
  );
};

export default HomeScreen;
