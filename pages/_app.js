import Link from "next/link";
import Button from "../components/Button";
import style from "../styles/app.module.css";

function MyApp({ Component, pageProps }) {
	return (
		<div className={style.app}>
			<ul>
				<li>
					<Link href="/">
						<a>With Button</a>
					</Link>
				</li>
				<li>
					<Link href="/no-button">
						<a>No Button</a>
					</Link>
				</li>
			</ul>
			<hr />
			<Button>_app Button</Button>
			<hr />
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
