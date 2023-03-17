import classNames from "classnames";
import React, { FC, InputHTMLAttributes, ReactElement } from "react";

type InputSize = "lg" | "sm";
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
  disable?: boolean;
  size?: InputSize;
  icon?: any;
  prepand?: string | ReactElement;
  append?: string | ReactElement;
}

const Input: FC<InputProps> = (props) => {
  const { disable, size, icon, prepand, append, style, ...restProps } = props;
  const cls = classNames("viking-input-wrapper", {
    [`input-size-${size}`]: size,
  });
  return (
    <div className={cls} style={style}>
      {prepand && <div className="viking-input-group-prepend">{prepand}</div>}
      {icon && <div className="icon-wrapper">{icon}</div>}
      <input className="viking-input-inner" disabled={disable} {...restProps} />
      {append && <div className="viking-input-group-append">{append}</div>}
    </div>
  );
};

export default Input;
