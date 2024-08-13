import { useNetworkState } from '@uidotdev/usehooks';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import clsx from 'clsx';

const NetworkConnectivity = () => {
  const network = useNetworkState();

  return (
    <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup className="me-2" aria-label="First group">
        <Button variant={network.online ? 'success' : 'danger'}>
          <i
            className={clsx(
              'bi',
              network.online && 'bi-wifi',
              !network.online && 'bi-wifi-off'
            )}
          ></i>
        </Button>
        <Button className="text-uppercase">{network.effectiveType}</Button>
      </ButtonGroup>
    </ButtonToolbar>
  );
};

export default NetworkConnectivity;
