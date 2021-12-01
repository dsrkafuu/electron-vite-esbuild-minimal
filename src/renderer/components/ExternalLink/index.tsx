import { MouseEventHandler, ReactNode, useCallback } from 'react';
import { Typography } from 'antd';

interface ExternalLinkProps {
  children?: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
}

function ExternalLink(props: ExternalLinkProps) {
  const handleClick = useCallback<MouseEventHandler<HTMLAnchorElement>>(
    (e) => {
      e.preventDefault();
      if (props.href) {
        window.ipc['OPEN_EXTERNAL_URL']({ url: props.href });
      }
    },
    [props.href]
  );

  return (
    <Typography.Link onClick={handleClick} {...props}>
      {props.children}
    </Typography.Link>
  );
}

export default ExternalLink;
