import { useState, useEffect } from "react";
import { TVShowAPI } from "./api/tv-show";
import s from "./style.module.css";

export function App() {
	const [currentTvShow, setCurrentTVShow] = useState();

	async function fetchPopulars() {
		const populars = await TVShowAPI.fetchPopulars();
		if (populars.length > 0) {
			setCurrentTVShow(populars[0]);
		}
	}

	useEffect(() => {
		async function fetchData() {
			await fetchPopulars();
		}
		fetchData();
	}, []);

	console.log("***", currentTvShow);

	return (
		<div
			className={s.main_container}
			style={{
				background: currentTvShow
					? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(https://image.tmdb.org/t/p/original${currentTvShow.backdrop_path}) no-repeat center / cover`
					: "black",
			}}
		>
			<div className={s.header}>
				<div className="row">
					<div className="col-4">
						<div>Logo</div>
						<div>Subtitle</div>
					</div>
					<div className="col-sm-12 col-md-4">
						<input style={{ width: "100%" }} type="text" />
					</div>
				</div>
			</div>
			<div className={s.tv_show_details}>Detail :</div>
			<div className={s.recommendations}>Recommendations</div>
		</div>
	);
}
