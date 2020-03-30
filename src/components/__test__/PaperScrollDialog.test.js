import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import PaperScrollDialog from '../PaperScrollDialog';
import '@testing-library/jest-dom/extend-expect';

describe('PaperScrollDialog component', () => {
  const testTitle = 'Test title';
  const testChildren = 'Test children';

  it('should not display children or title when closed', () => {
    const { queryByText } = render(
      <PaperScrollDialog open={false} title={testTitle}>{testChildren}</PaperScrollDialog>,
    );
    expect(queryByText(testChildren)).not.toBeInTheDocument();
    expect(queryByText(testTitle)).not.toBeInTheDocument();
  });

  it('should display children or title when open', () => {
    const { getByText } = render(
      <PaperScrollDialog open title={testTitle}>{testChildren}</PaperScrollDialog>,
    );
    expect(getByText(testChildren)).toBeInTheDocument();
    expect(getByText(testTitle)).toBeInTheDocument();
  });

  it('should be closed on close', () => {
    let open = true;
    const {
      getByText, getByRole, rerender,
    } = render(
      <PaperScrollDialog
        open={open}
        title={testTitle}
        onClose={() => {
          open = false;
        }}
      >
        {testChildren}
      </PaperScrollDialog>,
    );

    expect(getByText(testChildren)).toBeInTheDocument();
    expect(getByText(testTitle)).toBeInTheDocument();

    fireEvent.click(getByRole('button'));
    rerender(
      <PaperScrollDialog open={open} title={testTitle}>
        {testChildren}
      </PaperScrollDialog>,
    );

    setTimeout(() => {
      expect(getByText(testChildren)).not.toBeInTheDocument();
      expect(getByText(testTitle)).not.toBeInTheDocument();
    }, 50);
  });
});
