interface DataType {
	id: number;
	img: string;
	avatar_name: string;
	designation: string;
	linkedin:string
}

const team_data: DataType[] = [
	{
		id: 2,
		img: "/assets/img/team/Team_2.png",
		avatar_name: "Ashin Amanulla",
		designation: "Chief Executive Officer",
		linkedin:"https://www.linkedin.com/in/ashin-amanulla/"
	},
	{
		id: 1,
		img: "/assets/img/team/Team_1.png",
		avatar_name: "Adithya Vishnu",
		designation: "Chief Product Officer",
		linkedin:"https://www.linkedin.com/in/adithya-vishnu-tm-218b501b4/"
	},

	{
		id: 3,
		img: "/assets/img/team/Team_3.png",
		avatar_name: "Afsal E",
		designation: "Chief Business Officer",
		linkedin:"https://www.linkedin.com/in/afsal-e-muhammed-66998b1b1/"
	},
	{
		id: 4,
		img: "/assets/img/team/Team_4.png",
		avatar_name: "Ramees",
		designation: "Chief Marketing Officer",
		linkedin:"https://www.linkedin.com/in/ramees-a-b379b7247/"
	}
	// team data

];

export default team_data;
