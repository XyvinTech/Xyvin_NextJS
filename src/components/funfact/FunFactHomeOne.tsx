import React from 'react';
import Count from '../common/Count';

interface DataType {
  id: number;
  title: string;
  number: string;
}

const counter_data: DataType[] = [
  {
    id: 1,
    title: 'Project Completed',
    number: '50',
  },
  {
    id: 2,
    title: 'Customer Support',
    number: '24*7',
  },
  {
    id: 3,
    title: 'Years Experiences',
    number: '05',
  },
  {
    id: 4,
    title: 'Client Satisfaction',
    number: '98',
  },
];

const FunFactHomeOne = ({ style_2, style_3 }: any) => {
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          {counter_data.map((item, i) => (
            <div key={i} className="col-lg-3">
              <div className="cs_funfact cs_style1">
                <div className={`cs_funfact_number me-4 ${style_2 ? 'cs_stroke_normal' : 'cs_stroke_text'}`}>
                  <div className="amin_auto_count">
                    {item.number.includes('*') ? (
                      <span>{item.number}</span>
                    ) : (
                      <Count number={parseInt(item.number, 10)} add_style={true} />
                    )}
                  </div>
                  {i === 0 && <span>+</span>}
                  {i === 2 && <span>+</span>}
                  {i === 3 && <span>%</span>}
                </div>
                <div className={`cs_funfact_text cs_primary_font ${style_2 ? 'cs_color_1' : ''}`}>
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {style_3 ? null : <div className="cs_height_150 cs_height_lg_60"></div>}
    </>
  );
};

export default FunFactHomeOne;
