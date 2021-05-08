import { find, findIndex } from 'lodash';

const object = [
	{
		"type": "like",
		"movie": 508442
	},
	{
		"type": "like",
		"movie": 458576
	},
	{
		"type": "like",
		"movie": 544401
	},
	{
		"type": "like",
		"movie": 647302
	},
	{
		"type": "like",
		"movie": 793723
	},
	{
		"type": "like",
		"movie": 726684
	},
	{
		"type": "like",
		"movie": 567189
	},
	{
		"type": "like",
		"movie": 632357
	},
	{
		"type": "like",
		"movie": 635302
	},
	{
		"type": "like",
		"movie": 804435
	},
	{
		"type": "like",
		"movie": 615457
	},
	{
		"type": "like",
		"movie": 399566
	},
	{
		"type": "like",
		"movie": 460465
	}
];
// function  getItemId(type) {
//   const index = findIndex(object,  function(obj) {
//     return obj.type === type;
//   })
//   if (index !== -1) {
//     return object[index]["movie"];
//   }
// }

const getItemId = object.find(item => item.movie)

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
console.log('LION:', getItemId)
export default getItemId;