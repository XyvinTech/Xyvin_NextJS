interface DataType {
	id: number;
	img: string;
	avatar_name: string;
	designation: string;
}

const team_data: DataType[] = [
	{
		id: 2,
		img: "/assets/img/team/Team_2.png",
		avatar_name: "Ashin Amanulla",
		designation: "Chief Executive Officer",
	},
	{
		id: 1,
		img: "/assets/img/team/Team_1.png",
		avatar_name: "Adithya Vishnu",
		designation: "Chief Product Officer",
	},

	{
		id: 3,
		img: "/assets/img/team/Team_3.png",
		avatar_name: "Afsal E",
		designation: "Chief Business Officer",
	},
	{
		id: 4,
		img: "/assets/img/team/Team_4.png",
		avatar_name: "Ramees",
		designation: "Chief Marketing Officer",
	},
	{
		id: 5,
		img: "/assets/img/team/Team_5.png",
		avatar_name: "Dhilraj Soza",
		designation: "Chief Strategy Officer",
	},
	// team data

];

export default team_data;
