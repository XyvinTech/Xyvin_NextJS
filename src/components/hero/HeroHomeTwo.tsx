import React from "react";

const hero_data = {
	subtitle: `Welcome to our digital agency!`,
	title_1: `Startup Sprint Accelerating`,
	title_2: `Digital Growth`,
	des: `Welcome to our digital agency! We specialize in helping businesses like yours succeed online. From website design and development to digital marketing and advertising, we have the tools.`,
};
const { subtitle, title_1, title_2, des } = hero_data;

const HeroHomeTwo = () => {
	return (
		<>
			<div className="cs_height_219 cs_height_lg_120"></div>
			<section>
				<div className="cs_hero cs_style4">
					<div className="cs_text_hero">
						<div className="cs_short_title anim_text_upanddowns">
							<h6>{subtitle}</h6>
							<div className="cs_hr_design cs_color_1"></div>
						</div>
						<div className="anim_banner_text_left">
							<h1 className="cs_title_text cs_mp0">{title_1}</h1>
						</div>
						<div className="cs_text_section_2">
							<div className="anim_banner_text_right">
								<h1 className="cs_title_text cs_mp0">{title_2}</h1>
							</div>
							<p className="cs_detils_text cs_mp0 anim_subtext">{des}</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default HeroHomeTwo;
