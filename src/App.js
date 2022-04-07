import React, { useState } from "react";
import Header from "./Components/Navigation/Header";
import Nav from "./Components/Navigation/Nav";
import Results from "./Components/Movie/Results";
import Detail from "./Components/Movie/Detail";
import Seasons from "./Components/Movie/Seasons";
import { BrowserRouter as Router, Route } from "react-router-dom";
import requests, { existingWatchlist } from "./js/requests";
import WatchList from "./Components/Navigation/WatchList";
import Search from "./Components/Movie/Search";
import SearchPeople from "./Components/Person/SearchPeople";
import "./Styles/App.css";
import "./Styles/WatchList.css";
import Cast from "./Components/Cast/Cast";
import KnownForMovies from "./Components/Person/KnownForMovies";
import SeasonDetail from "./Components/Movie/SeasonDetail";
import Similars from "./Components/Movie/Similars";

function App() {
	const [genre, setGenre] = useState(requests.fetchAction);
	const [watchList, setWatchList] = useState(existingWatchlist);

	return (
		<div className="app">
			<Router>
				<Route path="/:mediaType/:movieID" exact>
					<Detail watchList={watchList} setWatchList={setWatchList} />
				</Route>
				<Route path="/:mediaType/:movieID/recommendations" exact>
					<Similars />
				</Route>
				<Route path="/" exact>
					<Header />
					<Nav setGenre={setGenre} />
					<Results genre={genre} />
				</Route>
				<Route path="/trending" exact>
					<Header />
					{/* <Nav setGenre={setGenre} /> */}
					<Results genre={requests.fetchTrending} />
				</Route>
				<Route path="/watchlist" exact>
					<Header />
					<WatchList watchList={watchList} setWatchList={setWatchList} />
				</Route>
				<Route path="/search">
					<Header />
					<Search />
				</Route>
				<Route path="/searchPeople" exact>
					<Header />
					<SearchPeople />
				</Route>
				<Route path="/searchPeople/:id/knownfor">
					<KnownForMovies />
				</Route>
				<Route path="/:mediaType/:movieID/cast" exact>
					<Cast />
				</Route>
				<Route path="/:mediaType/:movieID/seasons" exact>
					<Seasons />
				</Route>
				<Route path="/:mediaType/:movieID/seasons/season/:seasonNumber" exact>
					<SeasonDetail />
				</Route>
			</Router>
		</div>
	);
}

export default App;
