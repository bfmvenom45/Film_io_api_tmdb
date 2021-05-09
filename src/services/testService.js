import { find, findIndex } from 'lodash';

const object = [
    {
        "type": "like",
        "movie": {
            "adult": false,
            "backdrop_path": "/mYM8x2Atv4MaLulaV0KVJWI1Djv.jpg",
            "genre_ids": [
                28,
                80,
                53
            ],
            "id": 804435,
            "original_language": "en",
            "original_title": "Vanquish",
            "overview": "После выхода на пенсию бывший комиссар полиции понял, что прикрывать продажных детективов было ошибкой. Но чтобы подчистить за собой город, он выбирает не самый гуманный способ. Похитив невинного ребенка, он шантажирует его мать. В попытке спасти дочь женщина становится орудием в войне против разбушевавшегося криминала. Впрочем, теперь ее гнева хватит не только на преступников.",
            "popularity": 1971.405,
            "poster_path": "/7RAgd1wPhLIXt9WlOaCxLrzf7k1.jpg",
            "release_date": "2021-04-16",
            "title": "Ангел мести",
            "video": false,
            "vote_average": 6.4,
            "vote_count": 63
        }
    },
    {
        "type": "like",
        "movie": {
            "adult": false,
            "backdrop_path": "/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg",
            "genre_ids": [
                28,
                14,
                12,
                878
            ],
            "id": 460465,
            "original_language": "en",
            "original_title": "Mortal Kombat",
            "overview": "Боец смешанных единоборств Коул Янг не раз соглашался проиграть за деньги. Он не знает о своем наследии и почему император Внешнего мира Шан Цзун посылает могущественного криомансера Саб-Зиро на охоту за Коулом. Янг боится за безопасность своей семьи, и майор спецназа Джакс, обладатель такой же отметки в виде дракона, как и у Коула, советует ему отправиться на поиски Сони Блейд. Вскоре Коул, Соня и наёмник Кано оказываются в храме Лорда Рейдена, Старшего Бога и защитника Земного царства, который дает убежище тем, кто носит метку. Здесь прибывшие тренируются с опытными воинами Лю Каном и Кун Лао, готовясь противостоять врагам из Внешнего мира, а для этого им нужно раскрыть в себе аркану — могущественную силу души.",
            "popularity": 5441.414,
            "poster_path": "/pMIixvHwsD5RZxbvgsDSNkpKy0R.jpg",
            "release_date": "2021-04-07",
            "title": "Мортал Комбат",
            "video": false,
            "vote_average": 7.8,
            "vote_count": 2192
        }
    },
    {
        "type": "like",
        "movie": {
            "adult": false,
            "backdrop_path": "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
            "genre_ids": [
                878,
                28,
                18
            ],
            "id": 399566,
            "original_language": "en",
            "original_title": "Godzilla vs. Kong",
            "overview": "Конг и группа ученых отправляются в опасное путешествие в поисках родного дома гиганта. Среди них девочка Джия, единственная, кто умеет общаться с Конгом. Неожиданно они сталкиваются с разъяренным Годзиллой, разрушающим все на своем пути. Битва двух титанов, спровоцированная неведомыми силами — лишь малая часть тайны, спрятанной в недрах Земли.",
            "popularity": 2676.239,
            "poster_path": "/w6s3yQIMKMc6cmtdEtBkkGCA3V1.jpg",
            "release_date": "2021-03-24",
            "title": "Годзилла против Конга",
            "video": false,
            "vote_average": 8.1,
            "vote_count": 5325
        }
    }
];
function  getItemId(movie) {
	const index = findIndex(object,  function(obj) {
		return obj.type === movie;
	})
	if (index !== -1) {
		return object[index]["movie"];
	}
}

// const getItemId = object.find(item => item.movie)

//   if (item.type === 'like') {
//     return item.movie
//   }
// function getItemId(type) {
// 	const index = findIndex(object, function(obj) {
// 		return obj.type === type;
// 	})
// 	if (index !== -1) {
// 		return object[index]["name"];
// 	}
// }
// console.log('LION:', getItemId('like'))
export default getItemId;