import React from 'react';
import t from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import colors from 'styles/colors';
import Typography from './Typography';

const contentContainerStyle = {
  backgroundColor: colors.background,
};

const titleStyle = {
  margin: 16,
};

const ScrollDialog = ({
  open,
  onClose,
  title,
  children,
}) => (
  <Dialog
    open={open}
    onClose={onClose}
    scroll="paper"
    aria-labelledby="scroll-dialog-title"
    aria-describedby="scroll-dialog-description"
  >
    <Typography component="h2" style={titleStyle}>{title}</Typography>
    <DialogContent dividers style={contentContainerStyle}>
      {children}
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary">
        Cancel
      </Button>
    </DialogActions>
  </Dialog>
);


ScrollDialog.propTypes = {
  open: t.bool.isRequired,
  onClose: t.func,
  title: t.string,
  children: t.node,
};

ScrollDialog.defaultProps = {
  onClose: () => { },
  title: null,
  children: null,
};

export default ScrollDialog;
