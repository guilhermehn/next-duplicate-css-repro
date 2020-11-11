import style from "./style.module.css";

export default function Button(props) {
	return <button className={style.button} {...props} />;
}
