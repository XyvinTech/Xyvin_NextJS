import React from "react";
import Image from "next/image";
import image from "@/assets/img/modern_digital_need.jpg";


interface DataType {
	title_1: string;
	des_1: string;
	title_2: string;
	des_2: string;
	features: {
		id: number;
		title: string;
		des: string;
	}[];
}

const innovative_data: DataType = {
	title_1: `Innovative Solutions for Modern Digital Needs`,
	des_1: `Welcome to our digital agency! We specialize in helping businesses like yours succeed online. From website design and development to digital marketing and advertising,`,
	title_2: `Creating a Strong Brand Identity`,
	des_2: `Welcome to our digital agency! We spec ialize in helping businesses like yours succeed Well come to our digital agency`,
	features: [
		{
			id: 1,
			title: `Ideation`,
			des: `Digital of the day Mobile app excellence`,
		},
		{
			id: 2,
			title: `Ideation`,
			des: `Digital of the day Mobile app excellence`,
		},
		{
			id: 3,
			title: `Ideation`,
			des: `Digital of the day Mobile app excellence`,
		},
	],
};

const { title_1, des_1, title_2, des_2, features } = innovative_data;

const InnovativeHomeTwo = () => {
	return (
		<>
			<div className="cs_height_150 cs_height_lg_60"></div>
			<section>
				<div className="container">
					<div className="cs_modern_needs cs_style">
						<div className="cs_col_md_778">
							<div className="cs_text">
								<div className="cs_section_heading cs_style_1">
									<div className="cs_section_heading_text">
										<h2 className="cs_section_title anim_heading_title">
											{title_1}
										</h2>
									</div>
								</div>
								<div className="cs_height_65"></div>
								<p className="anim_text">{des_1}</p>
							</div>
							<div className="cs_height_85"></div>
							<div className="row anim_div_ShowLeftSide">
								{features.map((item, i) => (
									<div className="col-md-4 col-12" key={i}>
										<div className="cs_stroke_text">
											<span>{item.id}</span>
										</div>
										<div className="text-section">
											<h6>{item.title}</h6>
											<p>{item.des}</p>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="cs_col_md_672">
							<div className="cs_img_section">
								<Image src={image} alt="modern_digital_need" />
								<div className="cs_img_card_text anim_div_ShowZoom">
									<h6 className="cs_color_style">{title_2}</h6>
									<p>{des_2}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default InnovativeHomeTwo;
