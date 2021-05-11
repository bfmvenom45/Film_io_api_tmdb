export default class FetchService {
    _apiKey = 'b96993fb25220304f950b534ddafb551&language=en-US&page=1';
    _apiBase = 'https://api.themoviedb.org/3/';

    async getResoures(url) {
        const res = await fetch(`${this._apiBase}${url}?api_key=${this._apiKey}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return await res.json()
    }

    getPopularFilms() {
        return this.getResoures(`movie/popular`)
    }
    getDetailsFilms() {
        return this.getResoures(`movie/detailpage`)
    }
}