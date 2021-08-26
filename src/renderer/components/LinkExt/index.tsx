import React, { memo, MouseEventHandler, ReactNode, useCallback } from 'react';
import { Typography } from 'antd';

declare interface ILinkExtProps {
  children?: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
}

const LinkExt = memo((props: ILinkExtProps) => {
  const handleClick = useCallback<MouseEventHandler<HTMLAnchorElement>>(
    (e) => {
      e.preventDefault();
      if (props.href) {
        window.ipc['window:ext-url']({ url: props.href });
      }
    },
    [props.href]
  );

  return (
    <Typography.Link onClick={handleClick} {...props}>
      {props.children}
    </Typography.Link>
  );
});

LinkExt.displayName = 'LinkExternal';

export default LinkExt;
