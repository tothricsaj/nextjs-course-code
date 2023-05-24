import Link from "next/dist/client/link";

import classes from "./button.module.css";

function Button(props) {
  return(
    <Link href={props.link}>
      <a className={classes.btn}>
        {props.children}
      </a>
    </Link>
  )
}

export default Button;