import { MouseEventHandler, ReactNode, useCallback } from 'react';

interface ExternalLinkProps {
  href: string;
  target?: string;
  rel?: string;
  className?: string;
  children?: ReactNode;
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
    <a onClick={handleClick} {...props}>
      {props.children}
    </a>
  );
}

export default ExternalLink;
