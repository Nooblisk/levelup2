import Immutable from 'immutable';
// import * as ActionType from 'actions/applications';

const features = [
	{
		id: 1,
		title: 'eligendi',
		description: 'Debitis et saepe eum sint dolorem delectus.',
		image_url: 'http://lorempixel.com/640/480/?34574',
		level: 1,
	}, {
		id: 2,
		title: 'ipsum',
		description: 'Sed libero et velit.',
		image_url: 'http://lorempixel.com/640/480/?62506',
		level: 2,
	}, {
		id: 3,
		title: 'suscipit',
		description: 'Deserunt laudantium quibusdam enim nostrum soluta qui ipsam non.',
		image_url: 'http://lorempixel.com/640/480/?25202',
		level: 3,
	}, {
		id: 4,
		title: 'velit',
		description: 'Aperiam et fuga doloribus nisi placeat cumque est ducimus.',
		image_url: 'http://lorempixel.com/640/480/?81035',
		level: 2,
	}, {
		id: 5,
		title: 'modi',
		description: 'Architecto unde non dicta eveniet exercitationem aut porro.',
		image_url: 'http://lorempixel.com/640/480/?20754',
		level: 2,

	},
];

const quests = {
	1: [
		{
			id: 2,
			title: "ab",
			description: "Sed a nam et sint autem inventore aut.",
			level: 3,
			max_level: 22,
			steps: [{
				id: 3,
				comment: "Aut dolores quis totam incidunt ducimus aperiam nesciunt.",
				completed_at: "2016-12-09T18:45:24+0300",
			}, {
				id: 4,
				comment: "Minima sunt qui similique ut culpa natus consequatur.",
				completed_at: "2016-12-17T08:37:25+0300",
			}, {
				id: 19,
				comment: "Molestiae odio sed vitae maiores ex beatae reprehenderit exercitationem.",
				completed_at: "2016-12-02T14:30:40+0300",
			}],
		},
	],
	2: [
		{
			id: 5,
			title: "aut",
			description: "Fuga est placeat rerum ut et.",
			level: 7,
			max_level: 15,
			steps: [{
				id: 1,
				comment: "Molestias et quibusdam et ab.",
				completed_at: "2016-12-09T08:53:44+0300",
			}, {
				id: 2,
				comment: "Ipsum voluptatibus est accusantium eveniet.",
				completed_at: "2016-12-17T06:46:00+0300",
			}, {
				id: 24,
				comment: "Esse eveniet debitis omnis voluptatem voluptatem et.",
				completed_at: "2016-11-19T03:49:27+0300",
			}, {
				id: 43,
				comment: "Incidunt omnis aut enim nihil repellat ut culpa.",
				completed_at: "2016-11-25T11:00:24+0300",
			}, {
				id: 54,
				comment: "Omnis inventore mollitia unde id in id.",
				completed_at: "2016-12-09T13:41:55+0300",
			}, {
				id: 55,
				comment: "Maxime sint doloremque similique aut est dolores.",
				completed_at: "2016-11-23T17:34:32+0300",
			}, {
				id: 60,
				comment: "Aliquam delectus accusantium quidem ut eius.",
				completed_at: "2016-12-16T19:23:26+0300",
			}],
		}, {
			id: 7,
			title: "illo",
			description: "Qui ex esse veritatis.",
			level: 4,
			max_level: 18,
			steps: [{
				id: 16,
				comment: "Aut at consequatur non rerum in cupiditate voluptas.",
				completed_at: "2016-12-15T18:27:35+0300",
			}, {
				id: 20,
				comment: "Ut ducimus omnis molestiae consequatur sint.",
				completed_at: "2016-11-29T01:49:45+0300",
			}, {
				id: 29,
				comment: "Molestiae asperiores consequuntur sit.",
				completed_at: "2016-12-11T14:38:05+0300",
			}, {
				id: 59,
				comment: "Accusantium autem suscipit quia et.",
				completed_at: "2016-11-30T23:03:26+0300",
			}],
		},
	],
	3: [
		{
			id: 1,
			title: "officia",
			description: "Corporis incidunt saepe provident esse hic eligendi quos.",
			level: 10,
			max_level: 22,
			steps: [{
				id: 6,
				comment: "Iste in dolores harum rerum sequi.",
				completed_at: "2016-11-21T15:57:54+0300",
			}, {
				id: 11,
				comment: "Optio quos sed autem voluptatibus eum aut nesciunt.",
				completed_at: "2016-12-10T19:19:44+0300",
			}, {
				id: 17,
				comment: "Cum non qui quaerat cupiditate incidunt id sunt.",
				completed_at: "2016-11-22T23:41:24+0300",
			}, {
				id: 34,
				comment: "Laudantium voluptatem officiis vel dignissimos et.",
				completed_at: "2016-11-23T01:26:09+0300",
			}, {
				id: 37,
				comment: "At ut non eos sed amet.",
				completed_at: "2016-12-05T04:47:22+0300",
			}, {
				id: 38,
				comment: "Sapiente occaecati natus assumenda reiciendis.",
				completed_at: "2016-12-05T02:10:32+0300",
			}, {
				id: 39,
				comment: "Vel nisi ea itaque est et.",
				completed_at: "2016-12-09T04:41:20+0300",
			}, {
				id: 51,
				comment: "Quia nisi accusantium natus voluptatem.",
				completed_at: "2016-12-17T01:42:52+0300",
			}, {
				id: 52,
				comment: "Eligendi ut ut sapiente ut qui.",
				completed_at: "2016-12-07T01:56:04+0300",
			}, {
				id: 56,
				comment: "Odio modi consequatur dicta ipsa temporibus sit facere.",
				completed_at: "2016-12-03T17:46:52+0300",
			}],
		}, {
			id: 3,
			title: "aut",
			description: "Et ducimus eos odit amet et.",
			level: 6,
			max_level: 22,
			steps: [{
				id: 5,
				comment: "Nihil ut porro amet laborum iure molestiae et.",
				completed_at: "2016-11-25T09:34:49+0300",
			}, {
				id: 10,
				comment: "Maxime voluptas quibusdam inventore esse harum accusantium rerum.",
				completed_at: "2016-12-13T10:18:53+0300",
			}, {
				id: 14,
				comment: "Maxime sint suscipit laudantium quod magni non voluptas.",
				completed_at: "2016-12-06T19:03:43+0300",
			}, {
				id: 15,
				comment: "Non non explicabo et neque itaque.",
				completed_at: "2016-11-28T17:15:06+0300",
			}, {
				id: 35,
				comment: "Quia voluptatem quibusdam ad in maiores.",
				completed_at: "2016-11-28T07:48:25+0300",
			}, {
				id: 50,
				comment: "Et tempora repellat corporis excepturi sint.",
				completed_at: "2016-12-02T21:01:40+0300",
			}],
		}, {
			id: 8,
			title: "possimus",
			description: "Aut incidunt sunt cumque asperiores incidunt iure sequi.",
			level: 6,
			max_level: 24,
			steps: [{
				id: 7,
				comment: "Sint saepe numquam tempora.",
				completed_at: "2016-12-06T12:21:17+0300",
			}, {
				id: 8,
				comment: "Natus ut doloribus magni.",
				completed_at: "2016-11-20T04:25:09+0300",
			}, { id: 9, comment: "Ea similique ad sed.", completed_at: "2016-11-20T05:51:19+0300" }, {
				id: 27,
				comment: "Omnis saepe dolor in perspiciatis sit.",
				completed_at: "2016-11-23T18:18:18+0300",
			}, {
				id: 36,
				comment: "Sapiente quia recusandae aut numquam laboriosam sint enim.",
				completed_at: "2016-12-17T09:29:32+0300",
			}, {
				id: 41,
				comment: "Amet neque deleniti totam aut nisi.",
				completed_at: "2016-12-03T20:51:42+0300",
			}],
		},
	],
	4: [
		{
			id: 6,
			title: "eveniet",
			description: "Sunt quia delectus aut nam et eum architecto.",
			level: 7,
			max_level: 12,
			steps: [{
				id: 12,
				comment: "Recusandae eaque molestias sit id labore.",
				completed_at: "2016-12-05T02:10:15+0300",
			}, {
				id: 13,
				comment: "Laudantium perferendis eveniet quam vero fuga.",
				completed_at: "2016-12-02T15:11:39+0300",
			}, {
				id: 22,
				comment: "Doloribus voluptatibus perspiciatis quae sapiente quia suscipit.",
				completed_at: "2016-12-17T17:02:07+0300",
			}, {
				id: 30,
				comment: "Doloremque et reprehenderit nesciunt eum.",
				completed_at: "2016-11-24T07:25:57+0300",
			}, {
				id: 46,
				comment: "Nostrum ea dolores doloremque fuga labore qui.",
				completed_at: "2016-12-06T21:04:20+0300",
			}, {
				id: 53,
				comment: "Amet velit aut delectus iure sed alias.",
				completed_at: "2016-12-17T19:25:59+0300",
			}, {
				id: 58,
				comment: "Consequatur facilis molestias quo omnis minima illo.",
				completed_at: "2016-12-16T23:32:18+0300",
			}],
		}, {
			id: 9,
			title: "rem",
			description: "Rerum exercitationem est rem.",
			level: 2,
			max_level: 11,
			steps: [{
				id: 26,
				comment: "Nobis doloribus illo velit eius similique dolore.",
				completed_at: "2016-12-12T05:53:51+0300",
			}, {
				id: 45,
				comment: "Error consequatur fugit ad iste minus ullam quidem.",
				completed_at: "2016-12-09T10:21:20+0300",
			}],
		},
	],
	5: [
		{
			id: 4,
			title: "eum",
			description: "Molestiae quidem ut sunt et quidem.",
			level: 7,
			max_level: 25,
			steps: [
				{
					id: 18,
					comment: "Perferendis molestiae est ut iure possimus.",
					completed_at: "2016-11-19T11:27:39+0300",
				}, {
					id: 21,
					comment: "Doloremque aperiam qui rerum accusamus beatae.",
					completed_at: "2016-11-22T01:51:17+0300",
				}, {
					id: 28,
					comment: "Laborum hic hic reiciendis culpa rerum.",
					completed_at: "2016-12-08T09:31:39+0300",
				}, {
					id: 40,
					comment: "Voluptatibus quae sit veniam vel eos officiis et.",
					completed_at: "2016-12-08T16:15:19+0300",
				}, {
					id: 44,
					comment: "Est alias neque autem nihil esse repudiandae.",
					completed_at: "2016-12-13T13:16:21+0300",
				}, {
					id: 47,
					comment: "Minus et omnis porro voluptatibus enim quia reprehenderit magni.",
					completed_at: "2016-12-13T00:30:46+0300",
				}, {
					id: 49,
					comment: "Totam eos omnis inventore perferendis voluptatem nisi quis.",
					completed_at: "2016-12-12T07:20:49+0300",
				},
			],
		}, {
			id: 10,
			title: "fuga",
			description: "Reiciendis qui architecto fugiat nemo omnis.",
			level: 9,
			max_level: 10,
			steps: [
				{
					id: 23,
					comment: "Saepe libero quas magni rerum consequatur laudantium nisi.",
					completed_at: "2016-12-09T10:09:22+0300",
				}, {
					id: 25,
					comment: "Praesentium est velit molestiae porro consequuntur.",
					completed_at: "2016-12-02T17:34:49+0300",
				}, {
					id: 31,
					comment: "Et ut quis corporis voluptate ullam.",
					completed_at: "2016-12-10T12:36:49+0300",
				}, {
					id: 32,
					comment: "Eaque possimus quia optio explicabo.",
					completed_at: "2016-12-13T23:01:23+0300",
				}, {
					id: 33,
					comment: "Quod tempore totam iste quidem eum labore.",
					completed_at: "2016-11-30T08:22:55+0300",
				}, {
					id: 42,
					comment: "Velit nesciunt eligendi eos sint.",
					completed_at: "2016-12-04T05:37:01+0300",
				}, {
					id: 48,
					comment: "Velit alias et et quis quae distinctio ratione.",
					completed_at: "2016-11-29T04:37:51+0300",
				}, {
					id: 57,
					comment: "Ad asperiores quaerat eius accusamus sint.",
					completed_at: "2016-11-22T23:12:52+0300",
				}, { id: 61, comment: "", completed_at: "2016-12-18T00:36:33+0300" },
			],
		},
	],
};

const defaultState = Immutable.fromJS({
	features,
	quests,
});

function appReducer(state = defaultState, action) {
	switch (action.type) {
	case 'LOCAL_CREATE_FEATURE':
		return state.setIn(['features', state.get('features').size], action.payload.feature);

	case 'LOCAL_DELETE_FEATURE':
		return state.setIn(['features', state.get('features').findIndex(item => item.get('id') == action.payload.featureId), 'is_deleted'], 1);

	case 'LOCAL_UPDATE_FEATURE':
		return state.setIn(['features', state.get('features').findIndex(item => item.get('id') == action.payload.featureId), action.payload.field], action.payload.value);


	default:
		return state;
	}
}

export default appReducer;
