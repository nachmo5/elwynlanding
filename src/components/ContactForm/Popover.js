import React from 'react';
import ReactTooltip from 'react-tooltip';

const Popover = ({ field, place }) => {
  const ref = React.useRef();
  React.useEffect(() => {
    ReactTooltip.show(ref.current);
  }, []);
  return (
    <>
      <p ref={ref} data-tip="tooltip"></p>
      <ReactTooltip place={place || 'bottom'} type="warning">
        {`Please enter a valid value for the ${field} field`}
      </ReactTooltip>
    </>
  );
};

export default Popover;
