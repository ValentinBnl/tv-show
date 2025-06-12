import { TVShowAPI } from "./api/tv-show";
import s from "./style.module.css";

TVShowAPI.fetchPopulars();
function App() {
	return (
		<div className={s.main_container}>
			<div className={s.header}>
				<div className="row">
					<div className="col-4">
						<div>Logo</div>
						<div>Subtittle</div>
					</div>
					<div className="col-sm-12 col-md-4">
						<input style={{ width: "100%" }} type="text" />
					</div>
				</div>
			</div>
			<div className={s.tv_show_details}>Detail</div>
			<div className={s.recommendations}>Recommendations</div>
		</div>
	);
}

export { App };
